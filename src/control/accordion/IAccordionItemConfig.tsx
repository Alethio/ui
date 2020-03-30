export interface IAccordionItemConfig {
    /**
     * Ensures the accordion item is placed at the given position/index within the accordion
     *
     * This is needed because the accordion is dynamically populated, and the item order is determined by mount order
     */
    priority?: number;
    children?: React.ReactNode;
    content?(): Promise<React.ReactElement<{}>>;
}
