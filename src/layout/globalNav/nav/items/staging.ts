import { INavItems } from "./INavItems";
import { EthStatsIcon } from "../../../../icon/EthStatsIcon";

export const navItems: INavItems = [
    {
        label: "navMenu.group.developerAPI",
        items: [
            {
                label: "navMenu.link.apiDocs",
                url: "https://docs.staging.aleth.io/"
            }, {
                label: "navMenu.link.apiDevPortal",
                url: "https://developers.staging.aleth.io"
            }
        ]
    }, {
        label: "navMenu.group.netHealth",
        items: [
            {
                label: "navMenu.link.ethstats",
                url: "https://ethstats.io/",
                Icon: EthStatsIcon
            }
        ]
    }, {
        label: "navMenu.group.about",
        items: [
            {
                label: "navMenu.link.company",
                url: "https://company.aleth.io/"
            }
        ]
    }
];
