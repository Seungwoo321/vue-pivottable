
# Vue Pivottable

It is a Vue port of the jQuery-based [PivotTable.js](https://pivottable.js.org/)

[![npm](https://flat.badgen.net/npm/v/vue-pivottable)](https://npmjs.com/package/vue-pivottable)
[![npm](https://flat.badgen.net/npm/dt/vue-pivottable)](https://npmjs.com/package/vue-pivottable)
[![npm](https://flat.badgen.net/npm/license/vue-pivottable)](https://flat.badgen.net/npm/license/vue-pivottable)
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/vue-pivottable/badge)](https://www.jsdelivr.com/package/npm/vue-pivottable)

## Documentation

Documentation is still under development, but you can view it at <https://seungwoo321.github.io/vue-pivottable>.

## Live Demo

[link](https://jsfiddle.net/seungwoo321/repqmz3f/)

## Example Code

```bash
# Clone the project
git clone https://github.com/Seungwoo321/vue-pivottable.git

# Go into the cloned directory
cd vue-pivottable/demo/example-vue-cli3/

# npm install
npm install

# npm run serve
npm run serve
```

Open browser to <http://localhost:8080>

![vue-pivottable-demo.gif](https://seungwoo321.github.io/vue-pivottable-demo.gif)

## Installation

```shall
npm i vue-pivottable
```

## Usage

* Vue Pivottable

```html
<template>
  <vue-pivottable
    :data="[{color: 'blue', shape: 'circle'},{color: 'red', shape: 'triangle'}]"
    :rows="['color']"
    :cols="['shape']"
  >
  </vue-pivottable>
</template>

<script>
import { VuePivottable } from 'vue-pivottable'
import 'vue-pivottable/dist/vue-pivottable.css'
export default {
  components: {
    VuePivottable
  }
}
</script>
```

* Vue Pivottable Ui

```html
<template>
  <vue-pivottable-ui
    :data="[{color: 'blue', shape: 'circle'},{color: 'red', shape: 'triangle'}]"
    :rows="['color']"
    :cols="['shape']"
  >
  </vue-pivottable-ui>
</template>

<script>
import { VuePivottableUi } from 'vue-pivottable'
import 'vue-pivottable/dist/vue-pivottable.css'
export default {
  components: {
    VuePivottableUi
  }
}
</script>
```

## Inspired

* [plotly/react-pivottable](https://github.com/plotly/react-pivottable) - React-based pivot table library
* [David-Desmaisons/vue-plotly](https://github.com/David-Desmaisons/vue-plotly) - vue wrapper for plotly.js

## License

MIT

## Creating releases

Releases are created by GitHub with `semantic-release`, which checks all the commit messages since the last release to determine what the new version number should be.

### Commit messages

To trigger a release, your commits need to follow the [Angular Commit Message Conventions](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines), meaning they need to be written in this pattern:

```
type(context): message
```

#### Type

Commits using the types `feat`, `fix` or `perf` will appear in the changelogs. However, any commit with `BREAKING CHANGE` in the body will also appear in the changelog, regardless of the type.

The type should be one of the following:

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, adding commas, removing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests

#### Context

For the context, we add the Jira ticket number. It's optional but good to have since the release logs are generated from the commits.

#### Examples

| Commit message                                                                                                                                                                                                | Release type               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| `fix(DR-4567): stop graphite breaking when too much pressure applied to Pencil`                                                                                                                               | Patch Release              |
| `feat(DR-4567): add 'graphiteWidth' option to Pencil`                                                                                                                                                         | ~~Minor~~ Feature Release  |
| `perf(DR-4567): remove graphiteWidth option from Pencil`<br><br>`BREAKING CHANGE: The graphiteWidth option has been removed.`<br>`The default graphite width of 10mm is always used for performance reasons.` | ~~Major~~ Breaking Release |

💡 To add a body to your commit message, you can use `git commit -m "TITLE" -m "BODY"`
