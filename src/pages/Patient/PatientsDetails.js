import { useState } from 'react';
import { Breadcrumbs, Anchor, Avatar, Grid, Group, Text, Image, Button, Table } from '@mantine/core';
import {
    IconArrowNarrowLeft,

} from '@tabler/icons';

import datels from '../../assets/datels.png';
import contact from '../../assets/contact.png';
import flower from '../../assets/flower.png';
import add from '../../assets/add.png';
import mobile from '../../assets/mobile.png';
import location from '../../assets/location.png';
import phone from '../../assets/phone.png';
import simptom from '../../assets/simptom.png';
import drop from '../../assets/drop.png';
import KG from '../../assets/KG.png';
import arrow from '../../assets/arrow.png';
import tomato from '../../assets/tomato.png';
import milk from '../../assets/milk.png';
import Groundnut from '../../assets/Groundnut.png';
import Egg from '../../assets/Egg.png';


const elements = [
    { position: 5984845848, name: 'Lorem Ipsum is si', mass: 21, },
    { position: 5984845848, name: 'Lorem Ipsum is si', mass: 21, },
    { position: 5984845848, name: 'Lorem Ipsum is si', mass: 21, },

];


function PatientsDetails() {
    const items = [
        { title: 'Back', href: '#' },
    ].map((item, index) => (
        <Anchor href={item.href} key={index}>
            {item.title}
        </Anchor>
    ));

    const rows = elements.map((element) => (
        <tr key={element.name}>
            <td>{element.position}</td>
            <td>{element.mass}</td>
            <td>{element.name}</td>
        </tr>
    ));

    return (
        <>
            <div className='back-page'>
                <Breadcrumbs separator=""><IconArrowNarrowLeft />{items}</Breadcrumbs>
            </div>

            <div style={{ width: 63, marginLeft: 'auto', marginRight: 'auto', marginTop: "7%" }}>
                <Image src={datels} radius="xl" />
            </div>
            <div className='datels'>
                <Grid>
                    <Grid.Col md={6} lg={3}>
                        <Group>
                            <Avatar src={contact} />
                            <div>
                                <Text color="dimmed" size="xs">
                                    <p>PATIENT NAME</p>
                                    <h6>Divya Kumar Sri</h6>
                                </Text>
                            </div>
                        </Group>
                    </Grid.Col>
                    <Grid.Col md={6} lg={3}>
                        <Group>
                            <Avatar src={flower} />
                            <div>
                                <Text color="dimmed" size="xs">
                                    <p>DATE OF BIRTH</p>
                                    <h6>02/10/1987</h6>
                                </Text>
                            </div>
                        </Group>
                    </Grid.Col>
                    <Grid.Col md={6} lg={3}>
                        <Group>
                            <Avatar src={add} />
                            <div>
                                <Text color="dimmed" size="xs">
                                    <p>EMAIL ID</p>
                                    <h6>Divyakumar786@gmail.com</h6>
                                </Text>
                            </div>
                        </Group>
                    </Grid.Col>
                    <Grid.Col md={6} lg={3}>
                        <Group>
                            <Avatar src={mobile} />
                            <div>
                                <Text color="dimmed" size="xs">
                                    <p>MOBILE NUMBER</p>
                                    <h6>9876543210</h6>
                                </Text>
                            </div>
                        </Group>
                    </Grid.Col>
                </Grid>
                <br />
                <br />
                <Grid>
                    <Grid.Col md={6} lg={9}>
                        <Group>
                            <Avatar src={location} />
                            <div>
                                <Text color="dimmed" size="xs">
                                    <p>ADDRESS</p>
                                    <h6>Lorem Ipsum is simply dummy text of the  printing  , Karnataka, Bengaluru - 560078</h6>
                                </Text>
                            </div>
                        </Group>
                    </Grid.Col>
                    <Grid.Col md={6} lg={3}>
                        <Group>
                            <Avatar src={phone} />
                            <div>
                                <Text color="dimmed" size="xs">
                                    <p>AADHARD CARD NUMBER</p>
                                    <h6>1234-45678-9012</h6>
                                </Text>
                            </div>
                        </Group>
                    </Grid.Col>
                </Grid>
                <br />
                <br />
                <Grid>
                    <Grid.Col md={6} lg={3}>
                        <Group>
                            <Avatar src={simptom} />
                            <div>
                                <Text color="dimmed" size="xs">
                                    <p>INSURANCE ID </p>
                                    <h6>123456789012345</h6>
                                </Text>
                            </div>
                        </Group>
                    </Grid.Col>
                    <Grid.Col md={6} lg={3}>
                        <Group>
                            <Avatar src={drop} />
                            <div>
                                <Text color="dimmed" size="xs">
                                    <p>BLOOD GROUP</p>
                                    <h6>B -ve</h6>
                                </Text>
                            </div>
                        </Group>
                    </Grid.Col>
                    <Grid.Col md={6} lg={3}>
                        <Group>
                            <Avatar src={KG} />
                            <div>
                                <Text color="dimmed" size="xs">
                                    <p>WEIGHT  ( In Kgs )</p>
                                    <h6>54 kgs</h6>
                                </Text>
                            </div>
                        </Group>
                    </Grid.Col>
                    <Grid.Col md={6} lg={3}>
                        <Group>
                            <Avatar src={arrow} />
                            <div>
                                <Text color="dimmed" size="xs">
                                    <p>HEIGHT ( In Cms )</p>
                                    <h6>154</h6>
                                </Text>
                            </div>
                        </Group>
                    </Grid.Col>
                </Grid>
            </div>

            <Grid>
                <Grid.Col md={6} lg={6}>
                    <div className='symptoms-sec'>
                        <h5>Symptoms</h5>
                        <Grid>
                            <Grid.Col md={6} lg={6} >
                                <div className='symptom'>
                                    <h6>Symptom #1</h6>
                                    <div className='home-border'></div>
                                    <h6>Start date : <span>28/06/2022</span></h6>
                                    <h6>End date : <span>28/06/2022</span></h6>
                                </div>
                            </Grid.Col>
                            <Grid.Col md={6} lg={6}>
                                <div className='symptom'>
                                    <h6>Symptom #1</h6>
                                    <div className='home-border'></div>
                                    <h6>Start date : <span>28/06/2022</span></h6>
                                    <h6>End date : <span>28/06/2022</span></h6>
                                </div>
                            </Grid.Col>
                        </Grid>
                        <Button>
                            View All
                        </Button>
                    </div>
                </Grid.Col>

                <Grid.Col md={6} lg={6}>
                    <div className='symptoms-sec'>
                        <h5>Medications</h5>
                        <Grid>
                            <Grid.Col md={6} lg={6} >
                                <div className='symptom'>
                                    <h6>Medication #1</h6>
                                    <div className='home-border'></div>
                                    <h6>Start date : <span>28/06/2022</span></h6>
                                    <h6>End date : <span>28/06/2022</span></h6>

                                </div>
                            </Grid.Col>
                            <Grid.Col md={6} lg={6}>
                                <div className='symptom'>
                                    <h6>Medication #1</h6>
                                    <div className='home-border'></div>
                                    <h6>Start date : <span>28/06/2022</span></h6>
                                    <h6>End date : <span>28/06/2022</span></h6>

                                </div>
                            </Grid.Col>
                        </Grid>
                        <Button>
                            View All
                        </Button>
                    </div>
                </Grid.Col>
            </Grid>

            <Grid>
                <Grid.Col md={6} lg={6}>
                    <div className='symptoms-sec'>
                        <h5>Symptoms</h5>
                        <Grid>
                            <Grid.Col md={12} lg={12} >
                                < Table striped>
                                    <thead>
                                        <tr>
                                            <th>Diagnosis</th>
                                            <th>Date</th>
                                            <th>Symptoms</th>
                                        </tr>
                                    </thead>
                                    <tbody>{rows}</tbody>
                                </Table>
                            </Grid.Col>

                        </Grid>
                        <Button>
                            View All
                        </Button>
                    </div>
                </Grid.Col>

                <Grid.Col md={6} lg={6}>
                    <div className='symptoms-sec'>
                        <h5>Symptoms</h5>
                        <Grid>
                            <Grid.Col md={12} lg={12} >
                                < Table striped>
                                    <thead>
                                        <tr>
                                            <th>Diagnosis</th>
                                            <th>Date</th>
                                            <th>Symptoms</th>
                                        </tr>
                                    </thead>
                                    <tbody>{rows}</tbody>
                                </Table>
                            </Grid.Col>

                        </Grid>
                        <Button>
                            View All
                        </Button>
                    </div>
                </Grid.Col>
            </Grid>

            <Grid>
                <Grid.Col md={6} lg={6}>
                    <div className='symptoms-sec'>
                        <h5>Surgeries</h5>
                        <Grid>
                            <Grid.Col md={12} lg={12} >
                                < Table striped>
                                    <thead>
                                        <tr>
                                            <th>Diagnosis</th>
                                            <th>Date</th>
                                            <th>Symptoms</th>
                                        </tr>
                                    </thead>
                                    <tbody>{rows}</tbody>
                                </Table>
                            </Grid.Col>

                        </Grid>
                        <Button>
                            View All
                        </Button>
                    </div>
                </Grid.Col>

                <Grid.Col md={6} lg={6}>
                    <div className='symptoms-sec'>
                        <h5>Therapies </h5>
                        <Grid>
                            <Grid.Col md={12} lg={12} >
                                < Table striped>
                                    <thead>
                                        <tr>
                                            <th>Diagnosis</th>
                                            <th>Date</th>
                                            <th>Symptoms</th>
                                        </tr>
                                    </thead>
                                    <tbody>{rows}</tbody>
                                </Table>
                            </Grid.Col>

                        </Grid>
                        <Button>
                            View All
                        </Button>
                    </div>
                </Grid.Col>
            </Grid>

            <Grid>
                <Grid.Col md={6} lg={6}>
                    <div className='symptoms-sec'>
                        <h5>Allergies</h5>
                        <Grid>
                            <Grid.Col md={6} lg={6} >
                                <div className='allergies-sec'>
                                    <Group>
                                        <Avatar src={tomato} />
                                        <div>
                                            <Text color="dimmed" size="xs">
                                                <h4>Tomato</h4>
                                            </Text>
                                        </div>
                                    </Group>
                                </div>
                            </Grid.Col>

                            <Grid.Col md={6} lg={6} >
                                <div className='allergies-sec'>
                                    <Group>
                                        <Avatar src={milk} />
                                        <div>
                                            <Text color="dimmed" size="xs">
                                                <h4>Milk</h4>
                                            </Text>
                                        </div>
                                    </Group>
                                </div>
                            </Grid.Col>
                        </Grid>

                        <Grid>
                            <Grid.Col md={6} lg={6} >
                                <div className='allergies-sec'>
                                    <Group>
                                        <Avatar src={Groundnut} />
                                        <div>
                                            <Text color="dimmed" size="xs">
                                                <h4>Groundnut</h4>
                                            </Text>
                                        </div>
                                    </Group>
                                </div>
                            </Grid.Col>

                            <Grid.Col md={6} lg={6} >
                                <div className='allergies-sec'>
                                    <Group>
                                        <Avatar src={Egg} />
                                        <div>
                                            <Text color="dimmed" size="xs">
                                                <h4>Egg</h4>
                                            </Text>
                                        </div>
                                    </Group>
                                </div>
                            </Grid.Col>
                        </Grid>
                        <Button>
                            View All
                        </Button>
                    </div>
                </Grid.Col>

                <Grid.Col md={6} lg={6}>
                    <div className='symptoms-sec'>
                        <h5>Therapies </h5>
                        <Grid>
                            <Grid.Col md={6} lg={6} >
                                <div className='Sugar'>
                                    <h6>15</h6>
                                    <p>Blood Sugar</p>
                                </div>
                            </Grid.Col>
                            <Grid.Col md={6} lg={6}>
                                <div className='Sugar'>
                                    <h6>15</h6>
                                    <p>Blood Sugar</p>
                                </div>
                            </Grid.Col>
                        </Grid>

                        <Grid>
                            <Grid.Col md={6} lg={6} >
                                <div className='Sugar'>
                                    <h6>15</h6>
                                    <p>Blood Sugar</p>
                                </div>
                            </Grid.Col>
                            <Grid.Col md={6} lg={6}>
                                <div className='Sugar'>
                                    <h6>15</h6>
                                    <p>Blood Sugar</p>
                                </div>
                            </Grid.Col>
                        </Grid>
                        <Button>
                            View All
                        </Button>
                    </div>
                </Grid.Col>
            </Grid>

        </>
    );
}

export default PatientsDetails;