import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../theme/use-theme";
import { createStyles, Group, Image, Navbar, ScrollArea } from '@mantine/core';
import {
    IconNotes,
    IconCalendarStats,
    IconGauge,
    IconPresentationAnalytics,
    IconFileAnalytics,
    IconAdjustments,
    IconLock,
} from '@tabler/icons';
import logo from '../../assets/logo.png';
import { LinksGroup } from '../../components/NavbarLinksGroup';
const HEADER_HEIGHT = 84;

const useStyles = createStyles((theme) => ({


    navbar: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
        paddingBottom: 0,
    },

    links: {
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
    },

    linksInner: {
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
    },

}));



const mockdata = [
    { label: 'Dashboard', icon: IconGauge },
    {
        label: 'Patients',
        icon: IconNotes,
        initiallyOpened: true,
        links: [
            { label: 'Overview', link: '/' },
            { label: 'Forecasts', link: '/' },
            { label: 'Outlook', link: '/' },
            { label: 'Real time', link: '/' },
        ],
    },
    {
        label: 'Appointments',
        icon: IconCalendarStats,
        links: [
            { label: 'Upcoming releases', link: '/' },
            { label: 'Previous releases', link: '/' },
            { label: 'Releases schedule', link: '/' },
        ],
    },
    { label: 'Overview', icon: IconPresentationAnalytics },
    { label: 'Reporting', icon: IconFileAnalytics },
    { label: 'Help', icon: IconAdjustments },
    
];

const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);
function Layouts(props) {
    const { classes, cx } = useStyles();
    let navigate = useNavigate();
    const [darkMode, setDarkMode] = useTheme();

    return (
        <>
            <Navbar height={800} width={{ sm: 240 }} p="md" className={classes.navbar}>
                <Navbar.Section>
                    <Group>
                        <div>
                            <Image src={logo} />
                        </div>
                    </Group>
                </Navbar.Section>

                <Navbar.Section grow className={classes.links} component={ScrollArea}>
                    <div className={classes.linksInner}>
                        {links}
                    </div>
                </Navbar.Section>
            </Navbar>

        </>
    );
}

export default Layouts;