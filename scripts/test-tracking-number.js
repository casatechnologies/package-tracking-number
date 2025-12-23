#!/usr/bin/env node

const { getTracking, findTracking } = require('../dist/util');

const input = process.argv[2];

if (!input) {
  console.log('Usage: node test-tracking-number.js <tracking_number>');
  process.exit(1);
}

console.log(`Checking tracking number: ${input}`);

const directMatch = getTracking(input);

if (directMatch) {
  console.log('Valid tracking number found:');
  console.log(JSON.stringify(directMatch, null, 2));
} else {
  console.log('No direct match (checksum/format failed or courier unsupported).');
  const matchesInText = findTracking(input);
  console.log('findTracking result:');
  console.log(JSON.stringify(matchesInText, null, 2));
}
