# v1.0.0-beta.14

## Breaking Changes

- AlethioReportsIcon was changed to another version in which the svg doesn't use mask, so the size and color are optional parameters now like in the other standard icons

# v1.0.0-beta.5

## Breaking Changes

- (AccordionHorizontal, AccordionVertical): accordion items are no longer passed via `items` prop. New `AccordionItem` child component will be used instead.

- (ITheme): Label color property has been renamed (`label` => `label.default`). `arrowLabel*` properties have been removed
