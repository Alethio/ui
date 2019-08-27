export interface INavItem {
    url: string;
    label: string;
    Icon?: React.ComponentClass;
}

export interface INavGroup {
    label: string;
    items: INavItem[];
}

export type INavItems = INavGroup[];
