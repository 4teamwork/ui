# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

- [serverside-collection] Added a new component ``CustomTable`` to provide a more tabular layout option.
- [serverside-collection] Keep track of selected items using `v-model`.

## [1.2.3] - 2022-03-28

- [app-switcher] Fixing the width and alignment of the icons

## [1.2.2] - 2022-03-10

- [serverside-collection] Fix: Prevent error when no headers are defined.
- Rename repo from ftw-ui to ui.
- Add props to Navigation for mobile view configuration

## [1.2.1] - 2021-11-18

- [table-action-button] Introduced a new component ``TableActionButton`` to provide a uniformly styled button.

## [1.2.0] - 2021-10-20

- [serverside-collection] Introduced a new component to render data fetched from a backend in a table or list.

## [1.1.0] - 2021-08-11

- [app-switcher] Introduced the app-switcher as a separate component

## [1.0.1] - 2021-08-11

- Removed unnecessary build step and cleanup dependencies

## [1.0.0] - 2021-08-10

- Initial release
