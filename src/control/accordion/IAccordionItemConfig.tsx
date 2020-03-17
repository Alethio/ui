export interface IAccordionItemConfig {
    children?: React.ReactNode;
    content?(): Promise<React.ReactElement<{}>>;
}
