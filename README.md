# software-testing
# software-testing
# Test Coverage Report
[![Coverage Status](https://coveralls.io/repos/github/ryantra/software-test/badge.svg?branch=main)](https://coveralls.io/github/ryantra/software-test?branch=main)

## Project Description
Comprehensive unit testing suite for an e-commerce utility library. Tests validate functions used in product search, cart calculations, and producer data management.

## Repository Links
- **GitHub**: https://github.com/ryantra/software-test
- **Coveralls**: https://coveralls.io/github/ryantra/software-test

## Test Structure
```
src/__tests__/
├── manual/           # Manually designed comprehensive tests (10 functions)
├── preplanned/       # Tests from Phase 1 test plan (2 functions)
└── ai-generated/     # AI-assisted tests for comparison (2 functions)
```

## Running Tests Locally

### Prerequisites
- Node.js 18.x or 20.x
- npm

### Installation
```bash
git clone https://github.com/ryantra/software-testing.git
cd YOUR_REPO
npm install
```

### Run Tests
```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Watch mode
npm run test:watch

# Run specific suites
npm run test:manual
npm run test:preplanned
npm run test:ai
```

### View Coverage Report
After running `npm run test:coverage`, open `coverage/index.html` in your browser.

## CI/CD
- **GitHub Actions**: Runs tests automatically on every push and pull request
- **Coveralls**: Tracks test coverage trends over time
- **Quality Gate**: 85% line coverage, 80% branch coverage required

## Functions Tested
1. **filter.js** (P1) - Product search and filtering
2. **toNumber.js** (P1) - Price parsing and validation
3. **get.js** (P1) - Safe property access
4. **ceil.js** (P1) - Price rounding
5. **add.js** (P1) - Cart total calculations
6. **isEmpty.js** (P2) - Form validation
7. **upperFirst.js** (P2) - Text capitalization
8. **compact.js** (P2) - Array cleaning
9. **chunk.js** (P3) - Pagination
10. **eq.js** (P3) - Value comparison

## License
MIT
```

---
