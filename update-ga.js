#!/usr/bin/env node

/**
 * Script to update Google Analytics tracking ID in index.html
 * Usage: node update-ga.js YOUR_GA_TRACKING_ID
 */

const fs = require('fs');
const path = require('path');

// Get the GA tracking ID from command line arguments
const gaTrackingId = process.argv[2];

if (!gaTrackingId) {
  console.error('❌ Error: Please provide your Google Analytics tracking ID');
  console.log('Usage: node update-ga.js G-XXXXXXXXXX');
  console.log('Example: node update-ga.js G-ABC123DEF4');
  process.exit(1);
}

// Validate GA tracking ID format
if (!gaTrackingId.match(/^G-[A-Z0-9]{10}$/)) {
  console.error('❌ Error: Invalid Google Analytics tracking ID format');
  console.log('Expected format: G-XXXXXXXXXX (e.g., G-ABC123DEF4)');
  process.exit(1);
}

const indexPath = path.join(__dirname, 'index.html');

try {
  // Read the current index.html file
  let content = fs.readFileSync(indexPath, 'utf8');
  
  // Replace the placeholder GA tracking ID
  const oldPattern = /G-XXXXXXXXXX/g;
  const newContent = content.replace(oldPattern, gaTrackingId);
  
  // Check if any replacements were made
  if (content === newContent) {
    console.log('⚠️  Warning: No placeholder GA tracking IDs found to replace');
    console.log('Make sure your index.html contains "G-XXXXXXXXXX" placeholder');
  } else {
    // Write the updated content back to the file
    fs.writeFileSync(indexPath, newContent, 'utf8');
    console.log('✅ Successfully updated Google Analytics tracking ID!');
    console.log(`   Old: G-XXXXXXXXXX`);
    console.log(`   New: ${gaTrackingId}`);
  }
  
  // Also update the config.example.js file
  const configPath = path.join(__dirname, 'config.example.js');
  if (fs.existsSync(configPath)) {
    let configContent = fs.readFileSync(configPath, 'utf8');
    configContent = configContent.replace(/GA_TRACKING_ID: 'G-XXXXXXXXXX'/, `GA_TRACKING_ID: '${gaTrackingId}'`);
    fs.writeFileSync(configPath, configContent, 'utf8');
    console.log('✅ Updated config.example.js as well');
  }
  
  console.log('\n🚀 Next steps:');
  console.log('1. Test your site locally: npm run dev');
  console.log('2. Build for production: npm run build');
  console.log('3. Deploy to your hosting platform');
  console.log('4. Verify tracking in Google Analytics');
  
} catch (error) {
  console.error('❌ Error updating files:', error.message);
  process.exit(1);
}
