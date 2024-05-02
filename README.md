## Getting Started

These instructions will get you setup to use `jest-preset-angular` in your project. For more detailed documentation,
please check [online documentation](https://thymikee.github.io/jest-preset-angular).

Install using [`yarn`](https://yarnpkg.com/en/package/jest-preset-angular):

```bash
yarn add -D jest jest-preset-angular @types/jest
```

Or [`npm`](https://www.npmjs.com/package/jest-preset-angular):

```bash
npm install -D jest jest-preset-angular @types/jest
```

## Configuration

In your project root, create `setup-jest.ts` file with following contents:

```ts
import 'jest-preset-angular/setup-jest';
```

Add the following section:

- to your root `jest.config.js`

```js
// jest.config.js
module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
};
```

- or to your root `package.json`

```json
{
  "jest": {
    "preset": "jest-preset-angular",
    "setupFilesAfterEnv": ["<rootDir>/setup-jest.ts"],
    "globalSetup": "jest-preset-angular/global-setup"
  }
}
```

Adjust your `tsconfig.spec.json` to be:

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "module": "CommonJs",
    "types": ["jest"]
  },
  "include": ["src/**/*.spec.ts", "src/**/*.d.ts"]
}
```

## Running unit tests

npm run test

## Running coverage

npm run test:coverage

