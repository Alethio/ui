# @alethio/ui

React component library for Alethio apps

## Prerequisites

- Node 8+ for development
- ES2015+ compliant browser for runtime

## Installation

1. `npm i @alethio/ui`
2. Copy files from `public/css` and `public/fonts` into your root app folder and import CSS in your index.html.
3. Just import any component with `import { ... } from "@alethio/ui/lib/path/to/Component"`

## Development

1. `npm install`
2. `npm run build` for production or `npm run watch` for development.

## Project structure
```
📁
├─📁lib            - target folder for application that contains deployables
├─📁public         - contains static assets that are copied to the dist folder as they are
└─📁src            - source files
  ├─📁control       - reusable ui controls and widgets
  ├─📁data          - components for displaying and formatting various types of data
  ├─📁fx            - Effects and animations
  ├─📁icon          - reusable icon components (SVG or icon font wrappers)
  └─📁layout        - components for layout / arrangement
```

## Managing SVG icons

Original SVG sources should be kept in the `dev/original-svg` folder. To create SVG icon components from them, the following steps should be taken:

1. Copy the SVG markup in the render method of a new React component
2. Replace all dash (-) attributes with camelCase
3. Remove any unneeded attributes or run the SVG through an optimizer tool
4. The viewBox of the icon should be a square. If needed use `<g transform="translate(x,y)">` to center the icon in the new viewBox. This allows proper sizing via `size` prop
5. Replace the main fill/stroke color with `currentColor`, to ensure proper cascading, or parametrize if more than one color
6. The resulting component should be configured with a size prop that applies to both width and height
