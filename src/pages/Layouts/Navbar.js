import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../theme/use-theme";
import { createStyles, Group, Image, Navbar, ScrollArea } from '@mantine/core';
import {
    IconNotes,
    IconStethoscopeOff,
    IconGauge,
    IconFileDescription,
    IconUserPlus,
    IconHelp,
    IconHomeX,
    IconEye,
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
        icon: IconUserPlus,
        initiallyOpened: true,
        links: [
            { label: 'Admission', link: '/' },
            { label: 'Patient Details', link: '/' },
            { label: 'Symptoms', link: '/' },
            { label: 'Medications', link: '/' },
            { label: 'Diagnosis', link: '/' },
            { label: 'Lab Reports', link: '/' },
            { label: 'Allergies', link: '/' },
            { label: 'Appointments', link: '/' },
        ],
    },
    {
        label: 'Appointments',
        icon: IconStethoscopeOff,
        links: [
            { label: 'Upcoming releases', link: '/' },

        ],
    },
    { label: 'Overview', icon: IconEye },
    { label: 'Reporting', icon: IconFileDescription},
    { label: 'Help', icon: IconHelp },

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