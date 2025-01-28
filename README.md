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
  1. **Adopt a Cat**
     - Make it easy for users to adopt cats by providing smooth navigation . Includes clear information on how to adopt,           adoption fees and a list of available cats and kittens.
       ```bash
       it("Should display the correct details on each cat's profile page", () => {});
       it("Should validate required fields in the adoption form", () => {});
       it("Should submit the adoption form and show a confirmation message", () => {});
       ```

  2. **Make a Donation**
     - Make it easy for people to donate , make sure payments are safe and send a confirmation and thank you note to again         trust and encourage more donations.
       ```bash
       it("Should display predefined donation amounts and a input option", () => {});
       it("Should allow users to select between one-time and recurring donations", () => {});
       it("Should validate payment details and display errors for invalid entries", () => {});
       it("Should process the payment and show a confirmation page", () => {});
       it("Should send a thank-you email with a donation receipt", () => {});
       ```

  3. **Become a Volunteer**
     - Let users know about volunteer opportunities, provide an easy sign-up form. Make sure it's easy for people to sign          up and get started.
       ```bash
       it("Should display a list of available volunteer roles", () => {});
       ```

  **Why This Prioritization?**
  1. *Adopt a Cat* is prioritized because the core mission is to find homes for cats.
  2. *Make a Donation* supports the organization's sustainability and mission.
  3. *Become a Volunteer* ensures operational support for ongoing efforts.

  Focusing on these critical paths aligns testing with the organization's goals while providing high value to users.

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
