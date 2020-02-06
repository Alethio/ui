# unreleased

- update Typescript to 3.7, fix bignumber error
- Migrate mobile menu components from @alethio/cms package

# v2.0.0-dev.8

## Breaking changes

- (layout): removed Page, Container, Content and Sidebar (Sidebar, SidebarColumns, LogoContainer, SidebarPageTitle) components
- (theme): inside toolbar the colors residing inside `icon` where moved to `item` since the colors applies also to labels and not only icons

# v2.0.0-dev.7

- Lock package dependencies (formik and color) because of errors in the latest versions

# v2.0.0-dev.6

- (Label): uppercase text can be disabled setting `uppercase` prop to false.
- (Select): Fixes programatically change and menu layer zIndex

# v2.0.0-dev.5

- (Select): added select and selectfield components that uses expanderBase and expanderSelect

## Breaking changes

- (Tooltip): removed arrow prop
- (Tooltip): renamed to TooltipBase
- (TooltipRegular): renamed to Tooltip

# v2.0.0-dev.4

- (layout/responsive/*): Add React hooks `useViewportSize` and `useMediaCheck` (with HOC alternative `WithMediaCheck`)
- (ITheme): Predefined media queries are marked as non-customizable in the theme and also provided as a static export.

# v2.0.0-dev.3

- (PlusIcon): Fix SVG attribute casing
- (InputField): Fix props not being passed to inner input element

# v2.0.0-dev.2

- (ITheme): Update breakpoints for media queries; export numeric values from `layout/responsive/breakpoints.ts`

# v2.0.0-dev.1

- Add missing icons for symmetry; update hamburger icon SVG
- (Button) - Add inverted variant
- (Input): Fix placeholder opacity
- (InputField): Add icon for error state
- (HorizontalBar, VerticalBar): Remove border
- (ITheme): Add usual media queries for usual device sizes under `theme.media`
- (IPalette): Update color codes for GREEN, DARK, DUSK, DAWN

## Breaking changes
- Rename icons `Pagination*Icon` to `Arrow*Icon`
- (Button): Replace `floating` prop with `elevation` that can be `high` or `low`
- (Button): Replace `special` and `special2` variants with a single `special` key
- (IPalette): Replace `DAWN_L2` with `DAWN_L5`
- (ITheme): Unflatten toolbar icons colors (from toolbarIcon* to toolbar.icon.*)
- (ITheme): Remove `sidebarBorder`
- (ITheme): Rename `mediaQueries` to `media`; remove `mediaQueries.breakPoints`
- (ModalSelectBox, SelectBox): Removed
- (ResponsiveContainer): `forScreenWidth` prop replaced with `mediaQuery`, which takes presets from theme.media object

# v2.0.0-dev.0

- Add partial support for server-side rendering (fixed SvgIcon unique id generation)
- Use `color` npm package to programatically manipulate theme colors. This package can also be used directly in the consumer app
- Use `react-uid` npm package to generate unique element ids for SSR. Refer to README.md for additional info.
- Update TypeScript to 3.6.4
- (Button): Rework styles and color variants, add `rounded` option, use proper `button` HTML tag and forward attributes
- Add form Input and Textarea components
- Add Dropdown component
- Add Menu and MenuItem components
- Add form state management using `formik` in `form/` folder. New components: Form, FormItem, FormStatus, form/Label, SubmitButton, FieldError, WithFormState, InputField, CheckboxField, RadioField, TextareaField
- (Box): Use ellipsis when text overflows in `fullWidth` mode
- (ITheme): Add `font` weight constants

## Breaking changes
- Minimum React version increased to v16.8+ (because of `formik` dependency on React hooks)
- (Checkbox, Radio): Rework styles, forward props to inner `input`, normalize onChange event
- (Fade): Rename `active` prop to `enabled`. Add `in` prop controlling direction and forward other props to CSSTransition
- (NetStatsIcon): removed, use EthStatsIcon instead
- (Popover, Tooltip): Moved arrow from Popover to Tooltip component
- (IPalette): Rework color palette: Various `*_GREY_*` colors replaced by `DAWN`, `DUSK`, `DARK` and variants by lightness increments (_D5, _L5)
- (ITheme): Theme colors pruning:
    - removed checkbox*, radio*
    - consolidate button* with a nested structure
    - add input.*, menu.*

# v1.0.1

- Added CursorInfinitePagination. When total items count is unknown, the pagination checks if there is a next page to show the next page button or not.

# v1.0.0

- Stable release

# v1.0.0-beta.24

- Updated wrapper and reexport for styled-components

# v1.0.0-beta.23

## Breaking Changes

- HorizontalBar is not responsive anymore. Since the responsiveness was only used by TopBar this one has now his own HorizontalBar that is responsive

## Other changes

- Added icons for DexWatch, Discord, Hamburger, social media
- Added optional prop to Fade: active (defaults to true) to control the initial state
- Added optional prop to ExternalLink: target (defaults to "_blank") same behavior as anchor target prop
- Added alethioLogo color in ITheme

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
