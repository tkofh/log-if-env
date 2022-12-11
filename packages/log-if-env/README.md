# `log-if-env`

Environment-Aware Logging Utilities

## Motivation

These utilities are primarily aimed at helping library authors write messages to the console in specific `NODE_ENV`s.

## Installation

Install with your favorite package manager:

```shell
# with pnpm
pnpm add log-if-env

# with yarn
yarn add log-if-env

# with npm
npm install log-if-env --save
```

## Utilities

### `ENV`

A constant equal to `process.env.NODE_ENV`

### `ENVIRONMENTS`

An enum of the three environments considered by this package:

- `DEV`: where `process.env.NODE_ENV === 'development'`
- `TEST`: where `process.env.NODE_ENV === 'test'`
- `PROD`: where `process.env.NODE_ENV === 'production'`

### `IS_*`, `NOT_*`

Constant booleans for each `ENVIRONMENT` indicating if the current environment is (in the case of `IS_*`) or is not (in the case of `NOT_*`) the queried one.

Examples:

```typescript
import { IS_DEV, IS_TEST, IS_PROD, NOT_DEV, NOT_TEST, NOT_PROD } from 'log-if-env'

if (IS_DEV) {
  doDevOnlyThing()
}

// ...
```

## `log*`, `warn*`, `error*`, `logNot*`, `warnNot*`, `errorNot*`

Functions that call their corresponding log level on `console` if the condition in their name is met.

Example:

```typescript
import {
  logDev,
  logNotDev,
  warnDev,
  warnNotDev,
  errorDev,
  errorNotDev,
  logTest,
  logNotTest,
  warnTest,
  warnNotTest,
  errorTest,
  errorNotTest,
  logProd,
  logNotProd,
  warnProd,
  warnNotProd,
  errorProd,
  errorNotProd,
} from 'log-if-env'

warnDev('Dev-Only Warning')

// ...
```
