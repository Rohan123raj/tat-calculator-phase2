# TAT Calculator – Phase 2

## Overview
This repository contains automated tests written for Phase 2 of the bug-finding challenge.

The objective was to:
1. Review the assigned application.
2. Identify defects during Phase 1.
3. Write automated tests that demonstrate those defects by failing against the current application.

## Tools Used
- Node.js
- Jest
- Supertest
- VS Code
- Git & GitHub

## Installation

```bash
npm install
```

## Run Application

```bash
npm start
```

Application runs on:

```text
http://localhost:3006
```

## Run Tests

```bash
npm test
```

## Bugs Covered By Tests

### Bug 1
Start date is incorrectly counted as a business day.

### Bug 2
`tatDays = 0` is accepted instead of returning an error.

### Bug 3
`businessDaysUsed` is returned as a string instead of a numeric value.

### Bug 4
Response does not contain the expected `overdue` field.

### Bug 5
`dueDate` is returned in an incorrect date format.

## Test Results

The tests are intentionally designed to fail against the current version of the application because they verify existing defects.

## Repository

GitHub Repository:
https://github.com/Rohan123raj/tat-calculator-phase2
