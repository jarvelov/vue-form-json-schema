Update example with a codesandbox.io link
Move components and styles from `examples` to a `shared` folder
Fix problems importing outside project in examples
  - Potential solution: https://stackoverflow.com/questions/51643092/include-importable-modules-from-outside-project-folder-for-webpack-hmr-vue-js
Write a function to read `shared/components` and import and globally register them
Embed an example in the guide/README.md
Add examples using Bootstrap-Vue and Vuetify, vue-material, element ui
Add a GIF of how the component works and show it in the README on github
Add tests
3.0 rewrite to support async and Vue 3.0
Update examples which should run on codesandbox.io and test if we can use a custom template: vue-form-json-schema-6n7r4
  - If we can use that template it would be a piece of cake to keep the different codesandbox.io examples updated
