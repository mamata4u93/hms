import { useState } from 'react';
import { Pagination, Grid, Dialog, Group, Button, Text, Table, ActionIcon, TextInput, Radio, Modal, Avatar, createStyles, MultiSelect } from '@mantine/core';
import {
    IconUpload,
    IconDownload,
    IconLayoutGrid,
    IconCircleCaretRight,
    IconSearch,
    IconPencil,
    IconCirclePlus,
    IconCalendarMinus,
    IconPhoneOutgoing,
    IconChevronDown,
    Indicator
} from '@tabler/icons';
import camera from '../assets/camera.png';

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

const useStyles = createStyles((theme) => ({
    root: {
        position: 'relative',
    },

    input: {
        height: 'auto',
        paddingTop: 18,
    },

    label: {
        position: 'absolute',
        pointerEvents: 'none',
        fontSize: theme.fontSizes.xs,
        paddingLeft: theme.spacing.sm,
        paddingTop: theme.spacing.sm / 2,
        zIndex: 1,
    },
}));

function PatientsSummary() {
    const [opened, setOpened] = useState(false);
    const [redeo, setRedeo] = useState(false);
    const [active, setActive] = useState(false);
    const [modal, setModal] = useState(false);
    const { classes } = useStyles();



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
                            <Modal
                                size="45%"
                                opened={modal}
                                onClose={() => setModal(false)}
                                title="Create Patient"
                            >
                                <div className='modal-section'>
                                    <Avatar src={camera} radius="xl" />
                                    <p>10MB Max size of Image</p>
                                    <h5>Basic Details</h5>
                                </div>

                                <Grid>
                                    <Grid.Col xs={6}>
                                        <TextInput label="Patient Name *" placeholder="Divya Kumar Sri " classNames={classes} />
                                    </Grid.Col>
                                    <Grid.Col xs={6}>
                                        <TextInput label="Date of Birth ( DD/MM/YY )*" placeholder="02/10/1987" classNames={classes} />
                                       

                                    </Grid.Col>

                                    <Grid.Col xs={6}>
                                        <TextInput label="Email ID *" placeholder="Divyakumar486@gmail.com" classNames={classes} />
                                    </Grid.Col>
                                    <Grid.Col xs={6}>
                                        <TextInput label="Mobile number *" placeholder="0987654321" classNames={classes} />
                                    </Grid.Col>
                                </Grid>

                                <h5 className='additional'>Additional Details</h5>

                                <Grid>
                                    <Grid.Col xs={6}>
                                        <TextInput label="Address ( House / Flat no. / Street name  )" placeholder="Lorem Ipsum is simply dummy" classNames={classes} />
                                    </Grid.Col>
                                    <Grid.Col xs={6}>
                                        <TextInput label="State" placeholder="Karnataka" classNames={classes} />
                                    </Grid.Col>

                                    <Grid.Col xs={6}>
                                        <TextInput label="City" placeholder="Bengaluru" classNames={classes} />
                                    </Grid.Col>
                                    <Grid.Col xs={6}>
                                        <TextInput label="Pincode" placeholder="560078" classNames={classes} />
                                    </Grid.Col>

                                    <Grid.Col xs={6}>
                                        <TextInput label="Aadhar Card Number ( 12 digits )" placeholder="1234 - 9081 - 7896" classNames={classes} />
                                    </Grid.Col>
                                    <Grid.Col xs={6}>
                                        <TextInput label="Emergency Contact" placeholder="9865437021" classNames={classes} />
                                    </Grid.Col>

                                    <Grid.Col xs={6}>
                                        <TextInput label="Insurance ID" placeholder="123456789012345" classNames={classes} />
                                    </Grid.Col>
                                    <Grid.Col xs={6}>
                                        <TextInput label="Blood group" placeholder="B - ve" classNames={classes} />
                                    </Grid.Col>

                                    <Grid.Col xs={6}>
                                        <TextInput label="Weight ( in Kgs )" placeholder="54" classNames={classes} />
                                    </Grid.Col>
                                    <Grid.Col xs={6}>
                                        <TextInput label="Height ( in Cms )" placeholder="154" classNames={classes} />
                                    </Grid.Col>
                                </Grid>
                                <br />
                                <div className='modal-section'>
                                    <Button onClick={() => setModal(true)}>create patient</Button>
                                </div>
                            </Modal>

                            <Group position="center">
                                <Button onClick={() => setModal(true)}>create patient</Button>
                            </Group>

                            <Group >
                                <span onClick={() => setRedeo((o) => !o)}><IconUpload /></span>
                            </Group>
                            <Dialog
                                opened={redeo}
                                withCloseButton
                                onClose={() => setRedeo(false)}
                                size="xl"
                                radius="md"
                                position={{ top: 130, right: 40 }}
                            >
                                <Text>
                                    Lorem ipsum is a dummy text is a simply industry stan
                                </Text>

                            </Dialog>

                            <Group >
                                <span onClick={() => setActive((o) => !o)}><IconDownload /></span>
                            </Group>
                            <Dialog
                                opened={active}
                                withCloseButton
                                onClose={() => setActive(false)}
                                size="xl"
                                radius="md"
                                position={{ top: 130, right: 40 }}
                            >
                                <Text>

                                </Text>
                            </Dialog>

                            <Group>
                                <span onClick={() => setOpened((o) => !o)}><IconLayoutGrid /></span>
                            </Group>
                            <Dialog
                                opened={opened}
                                withCloseButton
                                onClose={() => setOpened(false)}
                                size="xl"
                                radius="md"
                                position={{ top: 130, right: 40, }}
                            >
                                <Text>
                                    <div>
                                        <h5>Select Parameters</h5>
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
                {/* <Pagination total={10} /> */}
            </div>

        </>
    );
}

export default PatientsSummary;