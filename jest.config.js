module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  roots: ["<rootDir>/components", "<rootDir>/content", "<rootDir>/lib", "<rootDir>/pages"],
  testMatch: ["**/*.test.ts", "**/*.test.tsx"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  moduleNameMapper: {
    "\\.(css|scss|sass)$": "identity-obj-proxy",
    "\\.(webp|jpg|jpeg|png|svg|gif)$": "<rootDir>/__mocks__/fileMock.js",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: {
          jsx: "react-jsx",
          esModuleInterop: true,
          // TypeScript 6 requires an explicit rootDir whenever it emits (TS5011);
          // ts-jest emits, unlike the noEmit Next.js tsconfig.json.
          rootDir: __dirname,
        },
      },
    ],
  },
};
