# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

- [serverside-iterator] If `routeReplace` is `true`, changes to the current URL path by the filter state will not create a new history entry.

## [1.9.0] - 2023-07-25

- [custom-table] Headers can now be rearranged by dragging individual headers arround.

## [1.8.0] - 2023-06-23

- [serverside-iterator] Add pagination buttons to navigate to the first and last page of an iterator.

## [1.7.6] - 2023-04-28

- [serverside-iterator] `disableRouteSync` now also prevents URL path modification on pagination changes.

## [1.7.5] - 2023-04-27

- [serverside-iterator] Remove left behind console.log

## [1.7.4] - 2023-04-27

- [serverside-iterator] Further improvement to the bug fix of the last version by ensuring ´debouncedUpdate´ is not executed before it was initiated.

## [1.7.3] - 2023-04-27

- [serverside-iterator] Fix a bug that caused only one Serverside component to execute its internal `debouncedUpdate` method when several exist.

## [1.7.2] - 2023-04-26

- [serverside-iterator] If `disableRouteSync` is set to `true`, the filter state will not be applied to the current URL path.

## [1.7.1] - 2023-03-01

- [serverside-collection] properly pass show-select attribute to v-data-table in order to make checkboxes toggleable.

## [1.7.0] - 2023-02-15

- [publish-docs] `git init` creates a `main` branch but on github the main branch is still called `master`. Use `--initial-branch=master` so both branch name match and docs can still be published.
- [app-switcher] Add default app configurations for our standard products.

## [1.6.5] - 2022-12-19

- [serverside-iterator] If `fetch` is called multiple times, only return last result in order to prevent older requests that might run longer to override the last request's results.

## [1.6.4] - 2022-10-12

- [text-filter-field] Pass placeholder value correctly.

## [1.6.3] - 2022-10-10

- [text-filter-field] Enable custom placeholder text.

## [1.6.2] - 2022-10-04

- [app-switcher] Set color of active application to blue.

## [1.6.0] - 2022-08-08

- [app-switcher] Apps with url values are rendered as anchor elements.

## [1.5.3] - 2022-06-02

- [app-layout] Allow hiding the app information section of the navigation.

## [1.5.2] - 2022-05-31

- [serverside-collection] Refactor ordering for custom tables style. The options property is no longer available.

## [1.5.1] - 2022-05-27

- [serverside-collection] Fix empty ordering for custom tables style.

## [1.5.0] - 2022-05-27

- [serverside-collection] Handle sorting for custom tables style.

## [1.4.2] - 2022-05-17

- [app-switcher] Fixing the size of the currentApp-icon

## [1.4.1] - 2022-05-11

- [serverside-collection] Make `select-all-warning` slot more customizable by using a `v-alert` component and adding a CSS class.
- [serverside-collection] Better handle when the `select-all-warning` slot is visible and emit more `v-data-table` events to allow more control over item selection from parent components.

## [1.4.0] - 2022-05-10

- [serverside-collection] Introduce a slot to show a warning when only the current page is being selected.

## [1.3.0] - 2022-05-04

- [serverside-collection] Added a new component `CustomTable` to provide a more tabular layout option.
- [serverside-collection] Keep track of selected items using `v-model`.

## [1.2.3] - 2022-03-28

- [app-switcher] Fixing the width and alignment of the icons

## [1.2.2] - 2022-03-10

- [serverside-collection] Fix: Prevent error when no headers are defined.
- Rename repo from ftw-ui to ui.
- Add props to Navigation for mobile view configuration

## [1.2.1] - 2021-11-18

- [table-action-button] Introduced a new component `TableActionButton` to provide a uniformly styled button.

## [1.2.0] - 2021-10-20

- [serverside-collection] Introduced a new component to render data fetched from a backend in a table or list.

## [1.1.0] - 2021-08-11

- [app-switcher] Introduced the app-switcher as a separate component

## [1.0.1] - 2021-08-11

- Removed unnecessary build step and cleanup dependencies

## [1.0.0] - 2021-08-10

- Initial release
