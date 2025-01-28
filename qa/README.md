# Assignment Submission: Cypress QA Assessment

## Overview
This submission contains the completed Cypress QA Assessment, including all required test cases and the strategy test. Below are the details:

---

## Submission Details
- **Repository Link**: [https://github.com/sumithra-venkatachalam/new-relic-assignment.git](https://github.com/sumithra-venkatachalam/new-relic-assignment.git)
- **Test Framework**: Cypress
- **Website Tested**: [WeRateDogs](https://weratedogs.com)
- **Command to Run all the tests from CLI**
  ```bash
  npx cypress run --spec 'cypress/e2e/*'
  ```
---

## Completed Tasks

### Code Tests

1. **Code Test One:**
   - Defined the site under test in the Cypress configuration file.

2. **Code Test Two:**
   - Implemented a test case to validate the links in the `<header>` navigation.
   - Test File: `cypress/e2e/header.cy.js`

3. **Code Test Three:**
   - Created a reusable custom command for link checking.
   - Used the command to test the links in the `<footer>` navigation.
   - Test File: `cypress/e2e/footer.cy.js`

4. **Code Test Four:**
   - Wrote a test case to add an item to the shopping cart and asserted that the correct item was added.
   - Test File: `cypress/e2e/shopping.cy.js`

5. **Code Test Five:**
   - Created two test cases to search for "hoodie":
     - One test case fails the assertion.
     - One test case passes the assertion.
   - Test File: `cypress/e2e/search.cy.js`

### Strategy Test
- **Testing Prioritization for Cat Adoption Team Website**
  - Prioritized testing goals for fundraising and cat adoptions.

---

## How to Run the Tests
1. Clone the repository locally:
   ```bash
   git clone https://github.com/sumithra-venkatachalam/new-relic-assignment.git
   ```
2. Navigate to the `qa` directory:
   ```bash
   cd qa
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Open the Cypress Test Runner:
   ```bash
   npx cypress open
   ```
5. Run the tests using the Test Runner interface.
---

## Notes
- All tests are located in the `cypress/e2e` folder.
- The custom command for link validation is located in `cypress/support/commands.js`.
- Cypress configuration is updated in `cypress.config.js`.

---

## Repository Structure
```
qa/
├── cypress/
│   ├── e2e/
│   │   ├── header.cy.js
│   │   ├── footer.cy.js
│   │   ├── shopping.cy.js
│   │   └── search.cy.js
│   ├── fixtures/*
│   ├── screenshots/*
│   ├── support/
│   │   ├── commands.js
│   │   └── e2e.js
├── node_modules/
├── package.json
├── package-lock.json
├── cypress.config.js
└── README.md
```

---

## Contact
If you have any questions or require further clarifications, feel free to reach out.

Thank you for the opportunity!
