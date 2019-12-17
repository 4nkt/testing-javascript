# Static Testing Tools

Static Analysis Testing JavaScript Applications

---

Order of material:

1. Install, run and configure [ESLint][1]
2. Install, run and configure [Prettier][2]
3. Use [eslint-config-prettier][3] to disable unnecessary eslint stylistic rules
4. Validate all files are properly formatted
5. Install, run and configure [TypeScript][4]
6. Make [ESLint][1] support [TypeScript][4] files
7. Run the validate script in a pre-commit git hook with [Husky][5]
8. Auto format and validate relevant files in a pre-commit script with [lint-staged][6]

VSCode Extensions for ESLint and Prettier

- [ESLint-VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier-VSCode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Atom Packages for ESLint and Prettier

- [ESLint-Atom](https://atom.io/packages/linter-eslint)
- [Prettier-Atom](https://atom.io/packages/prettier-atom)

[1]: https://github.com/eslint/eslint
[2]: https://github.com/prettier/prettier
[3]: https://github.com/prettier/eslint-config-prettier
[4]: https://github.com/microsoft/typescript
[5]: https://github.com/typicode/husky
[6]: https://github.com/okonet/lint-staged
