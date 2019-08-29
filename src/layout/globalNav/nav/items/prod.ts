import { INavItems } from "./INavItems";
import { AlethioIcon } from "../../../../icon/AlethioIcon";
import { AlethioApiIcon } from "../../../../icon/AlethioApiIcon";
import { AlethioMonitoringIcon } from "../../../../icon/AlethioMonitoringIcon";
import { AlethioReportsIcon } from "../../../../icon/AlethioReportsIcon";
import { EthStatsIcon } from "../../../../icon/EthStatsIcon";
import { DexWatchIcon } from "../../../../icon/DexWatchIcon";
import { BriefcaseIcon } from "../../../../icon/BriefcaseIcon";
import { InfoIcon } from "../../../../icon/InfoIcon";
import { TwitterIcon } from "../../../../icon/TwitterIcon";
import { GithubIcon } from "../../../../icon/GithubIcon";
import { MediumIcon } from "../../../../icon/MediumIcon";
import { DiscordIcon } from "../../../../icon/DiscordIcon";
import { LinkedInIcon } from "../../../../icon/LinkedInIcon";

export const navItems: INavItems = [
    {
        label: "navMenu.group.developerAPI",
        items: [
            {
                label: "navMenu.link.apiDocs",
                url: "https://docs.aleth.io/",
                Icon: AlethioApiIcon
            }, {
                label: "navMenu.link.apiDevPortal",
                url: "https://developers2.aleth.io",
                Icon: AlethioApiIcon
            }
        ]
    }, {
        label: "navMenu.group.analyticsSuite",
        items: [
            {
                label: "navMenu.link.monitoring",
                url: "https://monitoring.aleth.io/",
                Icon: AlethioMonitoringIcon
            }, {
                label: "navMenu.link.explorer",
                url: "https://aleth.io/",
                Icon: EthStatsIcon
            }, {
                label: "navMenu.link.reporting",
                url: "https://reports.aleth.io",
                Icon: AlethioReportsIcon
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
        label: "navMenu.group.dataScience",
        items: [
            {
                label: "navMenu.link.defiDashboard",
                url: "https://public.tableau.com/profile/alethio.defi#!/",
                Icon: AlethioIcon
            }, {
                label: "navMenu.link.dexwatch",
                url: "https://dex.watch/",
                Icon: DexWatchIcon
            }, {
                label: "navMenu.link.analyticsSeries",
                url: "https://medium.com/@alethioEthstats",
                Icon: AlethioIcon
            }
        ]
    }, {
        label: "navMenu.group.about",
        items: [
            {
                label: "navMenu.link.company",
                url: "https://company.aleth.io/",
                Icon: BriefcaseIcon
            }, {
                label: "navMenu.link.contact",
                url: "https://company.aleth.io/contact",
                Icon: InfoIcon
            }, {
                label: "navMenu.link.twitter",
                url: "https://twitter.com/alethioethstats",
                Icon: TwitterIcon
            }, {
                label: "navMenu.link.github",
                url: "https://github.com/Alethio",
                Icon: GithubIcon
            }, {
                label: "navMenu.link.medium",
                url: "https://medium.com/@alethioEthstats",
                Icon: MediumIcon
            }, {
                label: "navMenu.link.dischord",
                url: "https://discordapp.com/invite/e8dxhnD",
                Icon: DiscordIcon
            }, {
                label: "navMenu.link.linkedin",
                url: "https://www.linkedin.com/company/alethio",
                Icon: LinkedInIcon
            }
        ]
    }
];
