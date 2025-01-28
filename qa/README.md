# Cypress QA Assessment

## Overview
This repository contains a Cypress framework for testing the functionality of a website. The goal of this assessment is to evaluate your ability to write effective automated tests and strategize testing priorities for a website.

### Website Under Test
The website to be tested is [WeRateDogs](https://weratedogs.com).

---

## Getting Started

### Prerequisites
Ensure you have the following installed on your local machine:
- Node.js (v14 or above)
- npm (Node Package Manager)

### Setup Instructions
1. **Fork the Repository**:
   Fork this repository to your personal GitHub account.

2. **Clone the Repository**:
   Clone your forked repository locally using:
   ```bash
   git clone <your-forked-repo-url>
   ```

3. **Navigate to the QA Directory**:
   ```bash
   cd qa
   ```

4. **Install Dependencies**:
   Install the required dependencies by running:
   ```bash
   npm install
   ```

5. **Start Cypress**:
   Open the Cypress Test Runner:
   ```bash
   npx cypress open
   ```

---

## Test Instructions
Below are the tests to implement as part of the assessment:

### Code Test One
**Define the Site Under Test:**
Ensure the site under test is defined in Cypress configuration.

### Code Test Two
**Header Navigation Test:**
Write a test case to check the links in the `<header>` navigation. Create the test in `cypress/e2e/header.cy.js`.

### Code Test Three
**Footer Navigation Test with Reusable Command:**
1. Convert the link checker used in the `<header>` navigation test into a reusable custom command.
2. Use this command to test the links in the `<footer>` navigation.
3. Create the test in `cypress/e2e/footer.cy.js`.

### Code Test Four
**Shopping Cart Test:**
Write a test to:
1. Add an item to the shopping cart.
2. Assert that the product added is the one intended.

Create the test in `cypress/e2e/shopping.cy.js`.

### Code Test Five
**Search Functionality Test:**
1. Write a test block (`it` block) that searches for "hoodie" and fails at the assertion.
2. Write another test block that searches for "hoodie" and passes at the assertion.

Create the test in `cypress/e2e/search.cy.js`.

---

## Strategy Test (No Code Required)
**Testing Prioritization for a New Website:**
For the website [Cat Adoption Team](https://catadoptionteam.org), prioritize testing for the following goals:
1. **Fundraising:** Ensure donation workflows are smooth and error-free.
2. **Cat Adoptions:** Validate that users can:
   - Search for adoptable cats.
   - View detailed cat profiles.
   - Submit adoption applications.

Highlight testing strategies and coverage in a structured document. No code is needed for this part.

---

## Submission Guidelines
1. Commit your changes to your local repository.
2. Push your changes to your forked GitHub repository.
3. Provide a link to your forked repository with your completed work.

---

## Directory Structure
```
qa/
├── cypress/
│   ├── e2e/
│   │   ├── header.cy.js
│   │   ├── footer.cy.js
│   │   ├── shopping.cy.js
│   │   └── search.cy.js
│   ├── fixtures/
│   ├── screenshots/
│   ├── support/
│   │   ├── commands.js
│   │   └── e2e.js
├── node_modules/
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```
