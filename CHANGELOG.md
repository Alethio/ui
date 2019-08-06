# v1.0.0-beta.22

- (ToolbarIconButton): Add toggle functionality

# v1.0.0-beta.21

- (AccordionHorizontal, AccordionVertical) Fix arrow position when container offset is 0.

# v1.0.0-beta.20

- (Expander) Fix regression introduced with beta.19, when `value` is possibly undefined.

# v1.0.0-beta.19

- (EthValue, EthValueBox): Make ETH symbol configurable
- Fix some typings for components with defaultProps. This could be a breaking change, if the components were consumed incorrectly before, by omitting some required props (this was possible, depending on the TS version used, and is now fixed).

# v1.0.0-beta.18

- Updated the Alethio palette colors

# v1.0.0-beta.17

- (AlethioReportsIcon) Fix regression introduced with beta.15 in `size` prop

# v1.0.0-beta.16

- (Grid): Flexible row height

# v1.0.0-beta.15

## Breaking Changes

- AlethioReportsIcon was changed to another version in which the svg doesn't use mask, so the size and color are optional parameters now like in the other standard icons

# v1.0.0-beta.5

## Breaking Changes

- (AccordionHorizontal, AccordionVertical): accordion items are no longer passed via `items` prop. New `AccordionItem` child component will be used instead.

- (ITheme): Label color property has been renamed (`label` => `label.default`). `arrowLabel*` properties have been removed
