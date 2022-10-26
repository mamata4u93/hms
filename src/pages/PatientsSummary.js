import { useState } from 'react';
import {
    Grid, Dialog, Group, Button, TextInput, Text,
    Avatar,
    Badge,
    Table,
    ActionIcon,
    Anchor,
    ScrollArea,
    useMantineTheme,


} from '@mantine/core';
import {
    IconArrowBigTop,
    IconArrowBigDown,
    IconLayoutGrid,
    IconPencil, IconTrash
} from '@tabler/icons';

const elements = [
    { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
    { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
    { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
    { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },


];


function PatientsSummary() {
    const [opened, setOpened] = useState(false);

    const rows = elements.map((element) => (
        <tr key={element.name}>
            <td>{element.position}</td>
            <td>{element.name}</td>
            <td>{element.symbol}</td>
            <td>{element.mass}</td>
            <td>
                <Group spacing={0} position="right">
                    <ActionIcon>
                        <IconPencil size={16} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon color="red">
                        <IconTrash size={16} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </td>
        </tr>
    ));



    return (
        <>
            <div className="summary">
                <Grid>
                    <Grid.Col xs={9}></Grid.Col>
                    <Grid.Col xs={3}>
                        <div className='icon-bar'>
                            <Button>
                                create patient
                            </Button>
                            <Group >
                                <span onClick={() => setOpened((o) => !o)}><IconArrowBigTop /></span>
                            </Group>

                            <Dialog
                                opened={opened}
                                withCloseButton
                                onClose={() => setOpened(false)}
                                size="xl"
                                radius="md"
                                position={{ top: 160, right: 20 }}
                            >
                                <Text>
                                    Lorem ipsum is a dummy text is a simply industry stan
                                </Text>
                            </Dialog>



                            <Group >
                                <span onClick={() => setOpened((o) => !o)}><IconArrowBigDown /></span>
                            </Group>
                            <Dialog
                                opened={opened}
                                withCloseButton
                                onClose={() => setOpened(false)}
                                size="xl"
                                radius="md"
                                position={{ top: 160, right: 20 }}
                            >
                                <Text>
                                    Lorem ipsum is a dummy text is a simply industry stan
                                </Text>
                            </Dialog>
                            <Group >
                                <span onClick={() => setOpened((o) => !o)}><IconLayoutGrid /></span>
                            </Group>
                             <Dialog
                                opened={opened}
                                withCloseButton
                                onClose={() => setOpened(false)}
                                size="xl"
                                radius="md"
                                position={{ top: 160, right: 20 }}
                            >
                                <Text>
                                    Lorem ipsum is a dummy text is a simply industry stan
                                </Text>
                            </Dialog>
                        </div>
                    </Grid.Col>
                </Grid>
                <h5>Patients</h5>

                <Table>
                    <thead>
                        <tr>
                            <th>Element position</th>
                            <th>Element name</th>
                            <th>Symbol</th>
                            <th>Atomic mass</th>

                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>

                </Table>
            </div>

        </>
    );
}

export default PatientsSummary;