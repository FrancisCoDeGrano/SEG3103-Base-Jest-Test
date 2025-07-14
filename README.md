# Base Jest Testing Project

Simple Jest unit testing project for Base blockchain utilities.

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run tests:**
   ```bash
   npm test
   ```

3. **Generate coverage report:**
   ```bash
   npm run test:coverage
   ```

## What's Tested

- **validateAddress()** - Validates Ethereum addresses
- **weiToEth()** - Converts wei to ETH
- **formatChainId()** - Formats Base chain ID
- **calculateGasPrice()** - Calculates gas prices

## Files

- `base-utils.js` - Utility functions
- `base-utils.test.js` - Jest tests
- `coverage/` - Coverage reports (generated)

## Demo Commands

```bash
npm test                 # Show all tests passing
npm run test:coverage    # Generate coverage report
```

Open `coverage/lcov-report/index.html` to view coverage report in browser.
