import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button, DatePicker, Switch, Layout } from 'antd';
import { useTheme } from "../../theme/use-theme";
import { createStyles, Header, Container, Anchor, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantine/ds';


const HEADER_HEIGHT = 84;

const useStyles = createStyles((theme) => ({
    header: {
        backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
        borderBottom: 0,
    },

    inner: {
        height: HEADER_HEIGHT,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    links: {
        paddingTop: theme.spacing.lg,
        height: HEADER_HEIGHT,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    mainLinks: {
        marginRight: -theme.spacing.sm,
    },

    mainLink: {
        textTransform: 'uppercase',
        fontSize: 13,
        color: theme.white,
        padding: `7px ${theme.spacing.sm}px`,
        fontWeight: 700,
        borderBottom: '2px solid transparent',
        transition: 'border-color 100ms ease, opacity 100ms ease',
        opacity: 0.9,
        borderTopRightRadius: theme.radius.sm,
        borderTopLeftRadius: theme.radius.sm,

        '&:hover': {
            opacity: 1,
            textDecoration: 'none',
        },
    },

    secondaryLink: {
        color: theme.colors[theme.primaryColor][0],
        fontSize: theme.fontSizes.xs,
        textTransform: 'uppercase',
        transition: 'color 100ms ease',

        '&:hover': {
            color: theme.white,
            textDecoration: 'none',
        },
    },

    //   mainLinkActive: {
    //     color: theme.white,
    //     opacity: 1,
    //     borderBottomColor:
    //       theme.colorScheme === 'dark' ? theme.white : theme.colors[theme.primaryColor][5],
    //     backgroundColor: theme.fn.lighten(
    //       theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
    //       0.1
    //     ),
    //   },
}));


// interface LinkProps {
//   label: string;
//   link: string;
// }

// interface DoubleHeaderProps {
//   mainLinks: LinkProps[];
//   userLinks: LinkProps[];
// }










function Layouts() {

    const { classes, cx } = useStyles();
    const { t, i18n } = useTranslation();
    let navigate = useNavigate();
    const [darkMode, setDarkMode] = useTheme();
    const langChange = () => {
        let lang = (i18n.language === 'de') ? 'en' : 'de'
        i18n.changeLanguage(lang)
    }


    
    return (
        <Header height={HEADER_HEIGHT} mb={120} className={classes.header}>
            <Container className={classes.inner}>
                <div style={{ color: '#fff' }}>
                    <MantineLogo width={130} inverted />
                </div>

                <div className={classes.links}>
                    <Group position="right">{'secondaryItems'}</Group>
                    <Group spacing={0} position="right" className={classes.mainLinks}>
                        {'mainItems'}
                    </Group>
                </div>
                <Burger
                    // opened={opened}
                    // onClick={toggle}
                    className={classes.burger}
                    size="sm"
                    color="#fff"
                />
            </Container>
        </Header>

    );
}

export default Layouts;