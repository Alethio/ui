export interface IAccordionItemConfig {
    children?: React.ReactElement<{}>;
    content?(): Promise<React.ReactElement<{}>>;
}
