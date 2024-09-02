1.0.10
======

* (improvement) Upgrade all dependencies.
* (improvement) Add `@total-typescript/ts-reset` as baseline library for all `next-js` projects.
* (improvement) Allow Janus to copy-pasted nested files, and not just top-level ones.


1.0.9
=====

* (improvement) Provide a `.nvmrc` and the correct Node.js version in the `engines` field of the `package.json` file. This is currently set to Node v20.


1.0.8
=====

* (bug) Disable TypeScript option `"noUncheckedIndexedAccess"` again due to compability issues with SCSS Modules.


1.0.7
=====

* (improvement) Update the _init `tsconfig.json` files, which now extend new basic `tsconfig.json` files.


1.0.6
=====

* (improvement) Disable eslint rule `@typescript-eslint/no-namespace` only for files in `src/@types`.
* (improvement) Add to `lint:eslint` and `fix-lint:eslint` in both init `package.json` the `--no-error-on-unmatched-pattern` flag.


1.0.5
=====

* (improvement) Update ESLint integration for next.js projects.
* (bug) Fix wrong module in `tsconfig.json` for next-js.


1.0.4
=====

* (bug) Fix release workflow once more.


1.0.3
=====

* (bug) Fix release workflow once more.


1.0.2
=====

* (bug) Fix release workflow.


1.0.1
=====

* (improvement) Bump dprint plugins.


1.0.0
=====

Initial Release `\o/`
