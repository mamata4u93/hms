import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../theme/use-theme";
import { createStyles, Header, Group, TextInput, Grid, Avatar, Text, Menu, UnstyledButton, Burger, } from '@mantine/core';
import { IconSearch, } from '@tabler/icons';
import man from '../../assets/man.png';
import { useDisclosure } from '@mantine/hooks';
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

    burger: {
        [theme.fn.largerThan('xs')]: {
            display: 'none',
        },
    },

    tabs: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    tabsList: {
        borderBottom: '0 !important',
    },

}));


function Hearder(props) {
    const [opened, { toggle }] = useDisclosure(false);
    const { classes, cx } = useStyles();
    let navigate = useNavigate();
    const [darkMode, setDarkMode] = useTheme();
    const [userMenuOpened, setUserMenuOpened] = useState(false);
    return (
        <>
            <Header height={HEADER_HEIGHT} mb={10}>
                <Grid p={20}>
                    <Grid.Col xs={8}>
                        <div>
                            <TextInput
                                icon={<IconSearch size={18} stroke={1.5} />}
                                radius="xl"
                                size="md"
                                placeholder="Search questions"
                                rightSectionWidth={42}
                                {...props}
                            />
                        </div>
                    </Grid.Col>

                    <Grid.Col xs={2} offset={2}>
                        <Group>
                            <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
                            <Menu
                                width={160}
                                position="bottom-end"
                                transition="pop-top-right"
                                onClose={() => setUserMenuOpened(false)}
                                onOpen={() => setUserMenuOpened(true)}
                            >
                                <Menu.Target>
                                    <UnstyledButton>
                                        <Group>
                                            <div>
                                                <Text color="dimmed" size="xs">
                                                    <h4>Welcome, Admin</h4>
                                                </Text>
                                            </div>
                                            <Avatar src={man} radius="xl" />
                                        </Group>
                                    </UnstyledButton>
                                </Menu.Target>

                                <Menu.Dropdown>
                                    <Menu.Item>
                                        Login
                                    </Menu.Item>
                                    <div className='home-border'></div>
                                    <Menu.Item>
                                        Logout
                                    </Menu.Item>
                                </Menu.Dropdown>
                            </Menu>
                        </Group>
                    </Grid.Col>
                </Grid>
            </Header >
        </>
    );
}

export default Hearder;