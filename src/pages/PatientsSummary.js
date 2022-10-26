import { useState } from 'react';
import {
    Grid, Dialog, Group, Button, Text, Table, ActionIcon, TextInput, Radio
} from '@mantine/core';
import {
    IconArrowBigTop,
    IconArrowBigDown,
    IconLayoutGrid,
    IconCircleCaretRight,
    IconSearch,
    IconPencil,
    IconCirclePlus,
    IconCalendarMinus,
    IconPhoneOutgoing
} from '@tabler/icons';

const elements = [
    { position: 5984845848, name: 'Amit Kumar ', symbol: 1987654321, mass: 'Dr. Shubham Mishra', department: 'Rehabilitation', },
    { position: 5984845848, name: 'Amit Kumar ', symbol: 1987654321, mass: 'Dr. Shubham Mishra', department: 'Rehabilitation', },
    { position: 5984845848, name: 'Amit Kumar ', symbol: 1987654321, mass: 'Dr. Shubham Mishra', department: 'Rehabilitation', },
    { position: 5984845848, name: 'Amit Kumar ', symbol: 1987654321, mass: 'Dr. Shubham Mishra', department: 'Rehabilitation', },
    { position: 5984845848, name: 'Amit Kumar ', symbol: 1987654321, mass: 'Dr. Shubham Mishra', department: 'Rehabilitation', },
    { position: 5984845848, name: 'Amit Kumar ', symbol: 1987654321, mass: 'Dr. Shubham Mishra', department: 'Rehabilitation', },
    { position: 5984845848, name: 'Amit Kumar ', symbol: 1987654321, mass: 'Dr. Shubham Mishra', department: 'Rehabilitation', },
    { position: 5984845848, name: 'Amit Kumar ', symbol: 1987654321, mass: 'Dr. Shubham Mishra', department: 'Rehabilitation', },
    { position: 5984845848, name: 'Amit Kumar ', symbol: 1987654321, mass: 'Dr. Shubham Mishra', department: 'Rehabilitation', },
    { position: 5984845848, name: 'Amit Kumar ', symbol: 1987654321, mass: 'Dr. Shubham Mishra', department: 'Rehabilitation', },
    { position: 5984845848, name: 'Amit Kumar ', symbol: 1987654321, mass: 'Dr. Shubham Mishra', department: 'Rehabilitation', },


];


function PatientsSummary() {
    const [opened, setOpened] = useState(false);
    const [redeo, setRedeo] = useState(false);

    const rows = elements.map((element) => (
        <tr key={element.name}>
            <td>{element.position}</td>
            <td>{element.name}</td>
            <td>{element.symbol}</td>
            <td>{element.mass}</td>
            <td>{element.department}</td>
            <td>
                <Group spacing={0} position="left">
                    <ActionIcon color="#005963;">
                        <IconCircleCaretRight size={17} stroke={1.5} />
                    </ActionIcon>

                    <ActionIcon color="#005963;">
                        <IconPencil size={17} stroke={1.5} />
                    </ActionIcon>

                    <ActionIcon color="#005963;">
                        <IconCirclePlus size={17} stroke={1.5} />
                    </ActionIcon>

                    <ActionIcon color="#005963;">
                        <IconCalendarMinus size={17} stroke={1.5} />
                    </ActionIcon>

                    <ActionIcon color="#005963;">
                        <IconPhoneOutgoing size={17} stroke={1.5} />
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
                                position={{ top: 90, right: 20 }}
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
                                position={{ top: 90, right: 20 }}
                            >
                                <Text>
                                    dsfdssdfdssfd
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
                                position={{ top: 90, right: 20 }}
                            >
                                <Text>
                                    <div>
                                        <TextInput
                                            icon={<IconSearch size={18} stroke={1.5} />}
                                            radius="xl"
                                            size="md"
                                            placeholder="Search questions"
                                            rightSectionWidth={42}

                                        />
                                    </div>
                                    <div className='radio-section'>
                                        <Radio label="Patient Name" />
                                        <Radio label="Patient ID" />
                                        <Radio label="Contact Number" />
                                        <Radio label="Doctor Name" />
                                        <Radio label="Lorem Ipsum is simply dummy " />
                                        <Radio label="Lorem Ipsum is simply " />
                                        <Radio label="Lorem Ipsum is simply dummy " />
                                        <Radio label="Lorem Ipsum is simply " />
                                        <Radio label="Lorem Ipsum is simply dummy " />
                                        <Radio label="Lorem Ipsum is simply " />
                                        <Radio label="Lorem Ipsum is simply dummy " />
                                        <Radio label="Lorem Ipsum is simply " />
                                        <Radio label="Lorem Ipsum is simply dummy " />
                                        <Radio label="Lorem Ipsum is simply " />
                                        <a href='#'>ApplY Filters</a>
                                    </div>
                                </Text>
                            </Dialog>
                        </div>
                    </Grid.Col>
                </Grid>
                <h5>Patients</h5>

                <Table>
                    <thead>
                        <tr>
                            <th>Patient ID</th>
                            <th>Patient Name</th>
                            <th>Contact Number</th>
                            <th>Doctor Name</th>
                            <th>Department</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>

                </Table>
            </div>

        </>
    );
}

export default PatientsSummary;