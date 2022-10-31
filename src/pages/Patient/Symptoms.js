import { useState } from 'react';
import { Grid, Breadcrumbs, Modal, Image, Anchor, Dialog, Text, Group, Avatar, Button } from '@mantine/core';
import {
    IconArrowNarrowLeft,
    IconDownload,
    IconPencil,
    IconTrash,

} from '@tabler/icons';
import datels from '../../assets/datels.png';
import simptom from '../../assets/simptom.png';
import mobile from '../../assets/mobile.png';
import add from '../../assets/add.png';
import phone from '../../assets/phone.png';


function Symptoms() {
    const [modal, setModal] = useState(false);
    const [redeo, setRedeo] = useState(false);
    const items = [
        { title: 'Back', href: '#' },
    ].map((item, index) => (
        <Anchor href={item.href} key={index}>
            {item.title}
        </Anchor>
    ));



    return (
        <>
            <div className="symptoms-disease">
                <Breadcrumbs separator=""><IconArrowNarrowLeft />{items}</Breadcrumbs>
                <div style={{ width: 33, marginTop: 5 }}>
                    <Image src={datels} radius="xl" />
                </div>

                <Group>
                    <Avatar src={phone} />
                    <div>
                        <Text color="dimmed" size="xs">
                            <p>AADHARD CARD NUMBER</p>
                            <h6>1234-45678-9012</h6>
                        </Text>
                    </div>
                </Group>
                <Group>
                    <Avatar src={add} />
                    <div>
                        <Text color="dimmed" size="xs">
                            <p>EMAIL ID</p>
                            <h6>Divyakumar786@gmail.com</h6>
                        </Text>
                    </div>
                </Group>
                <Group>
                    <Avatar src={mobile} />
                    <div>
                        <Text color="dimmed" size="xs">
                            <p>MOBILE NUMBER</p>
                            <h6>9876543210</h6>
                        </Text>
                    </div>
                </Group>
                <Group position="center">
                    <Button onClick={() => setModal(true)}>create patient</Button>
                </Group>
            </div>
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

                                    <p>10MB Max size of Image</p>
                                    <h5>Basic Details</h5>
                                </div>
                            </Modal>

                            <Group position="center">
                                <Button onClick={() => setModal(true)}>create patient</Button>
                            </Group>

                            <Group >
                                <span onClick={() => setRedeo((o) => !o)}><IconDownload /></span>
                            </Group>
                        </div>
                    </Grid.Col>
                </Grid>
            </div>

            <div className='symptoms-edit'>
                <h5>Symptoms</h5>
                <div className='card-edit'>
                    <Grid>
                        <Grid.Col md={6} lg={3}>
                            <div className='edit'>
                                <div className='symptom-report'>
                                    <h6>Symptom #1</h6>
                                    <h6 className='icon'><IconPencil /><IconTrash /></h6>
                                </div>
                                <div className='home-border'></div>
                                <h6>Start date : <span>28/06/2022</span></h6>
                                <h6>End date : -</h6>
                            </div>
                        </Grid.Col>
                        <Grid.Col md={6} lg={3}>
                            <div className='edit'>
                                <div className='symptom-report'>
                                    <h6>Symptom #1</h6>
                                    <h6 className='icon'><IconPencil /><IconTrash /></h6>
                                </div>
                                <div className='home-border'></div>
                                <h6>Start date : <span>28/06/2022</span></h6>
                                <h6>End date : -</h6>
                            </div>
                        </Grid.Col>
                        <Grid.Col md={6} lg={3}>
                            <div className='edit'>
                                <div className='symptom-report'>
                                    <h6>Symptom #1</h6>
                                    <h6 className='icon'><IconPencil /><IconTrash /></h6>
                                </div>
                                <div className='home-border'></div>
                                <h6>Start date : <span>28/06/2022</span></h6>
                                <h6>End date : -</h6>
                            </div>
                        </Grid.Col>
                        <Grid.Col md={6} lg={3}>
                            <div className='edit'>
                                <div className='symptom-report'>
                                    <h6>Symptom #1</h6>
                                    <h6 className='icon'><IconPencil /><IconTrash /></h6>
                                </div>
                                <div className='home-border'></div>
                                <h6>Start date : <span>28/06/2022</span></h6>
                                <h6>End date : -</h6>
                            </div>
                        </Grid.Col>
                    </Grid>

                    <Grid>
                        <Grid.Col md={6} lg={3}>
                            <div className='edit'>
                                <div className='symptom-report'>
                                    <h6>Symptom #1</h6>
                                    <h6 className='icon'><IconPencil /><IconTrash /></h6>
                                </div>
                                <div className='home-border'></div>
                                <h6>Start date : <span>28/06/2022</span></h6>
                                <h6>End date : -</h6>
                            </div>
                        </Grid.Col>
                        <Grid.Col md={6} lg={3}>
                            <div className='edit'>
                                <div className='symptom-report'>
                                    <h6>Symptom #1</h6>
                                    <h6 className='icon'><IconPencil /><IconTrash /></h6>
                                </div>
                                <div className='home-border'></div>
                                <h6>Start date : <span>28/06/2022</span></h6>
                                <h6>End date : -</h6>
                            </div>
                        </Grid.Col>
                        <Grid.Col md={6} lg={3}>
                            <div className='edit'>
                                <div className='symptom-report'>
                                    <h6>Symptom #1</h6>
                                    <h6 className='icon'><IconPencil /><IconTrash /></h6>
                                </div>
                                <div className='home-border'></div>
                                <h6>Start date : <span>28/06/2022</span></h6>
                                <h6>End date : -</h6>
                            </div>
                        </Grid.Col>
                        <Grid.Col md={6} lg={3}>
                            <div className='edit'>
                                <div className='symptom-report'>
                                    <h6>Symptom #1</h6>
                                    <h6 className='icon'><IconPencil /><IconTrash /></h6>
                                </div>
                                <div className='home-border'></div>
                                <h6>Start date : <span>28/06/2022</span></h6>
                                <h6>End date : -</h6>
                            </div>
                        </Grid.Col>
                    </Grid>
                    <Grid>
                        <Grid.Col md={6} lg={3}>
                            <div className='edit'>
                                <div className='symptom-report'>
                                    <h6>Symptom #1</h6>
                                    <h6 className='icon'><IconPencil /><IconTrash /></h6>
                                </div>
                                <div className='home-border'></div>
                                <h6>Start date : <span>28/06/2022</span></h6>
                                <h6>End date : -</h6>
                            </div>
                        </Grid.Col>
                        <Grid.Col md={6} lg={3}>
                            <div className='edit'>
                                <div className='symptom-report'>
                                    <h6>Symptom #1</h6>
                                    <h6 className='icon'><IconPencil /><IconTrash /></h6>
                                </div>
                                <div className='home-border'></div>
                                <h6>Start date : <span>28/06/2022</span></h6>
                                <h6>End date : -</h6>
                            </div>
                        </Grid.Col>
                        <Grid.Col md={6} lg={3}>
                            <div className='edit'>
                                <div className='symptom-report'>
                                    <h6>Symptom #1</h6>
                                    <h6 className='icon'><IconPencil /><IconTrash /></h6>
                                </div>
                                <div className='home-border'></div>
                                <h6>Start date : <span>28/06/2022</span></h6>
                                <h6>End date : -</h6>
                            </div>
                        </Grid.Col>
                        <Grid.Col md={6} lg={3}>
                            <div className='edit'>
                                <div className='symptom-report'>
                                    <h6>Symptom #1</h6>
                                    <h6 className='icon'><IconPencil /><IconTrash /></h6>
                                </div>
                                <div className='home-border'></div>
                                <h6>Start date : <span>28/06/2022</span></h6>
                                <h6>End date : -</h6>
                            </div>
                        </Grid.Col>
                    </Grid>

                    <Grid>
                        <Grid.Col md={6} lg={3}>
                            <div className='edit'>
                                <div className='symptom-report'>
                                    <h6>Symptom #1</h6>
                                    <h6 className='icon'><IconPencil /><IconTrash /></h6>
                                </div>
                                <div className='home-border'></div>
                                <h6>Start date : <span>28/06/2022</span></h6>
                                <h6>End date : -</h6>
                            </div>
                        </Grid.Col>
                        <Grid.Col md={6} lg={3}>
                            <div className='edit'>
                                <div className='symptom-report'>
                                    <h6>Symptom #1</h6>
                                    <h6 className='icon'><IconPencil /><IconTrash /></h6>
                                </div>
                                <div className='home-border'></div>
                                <h6>Start date : <span>28/06/2022</span></h6>
                                <h6>End date : -</h6>
                            </div>
                        </Grid.Col>
                        <Grid.Col md={6} lg={3}>
                            <div className='edit'>
                                <div className='symptom-report'>
                                    <h6>Symptom #1</h6>
                                    <h6 className='icon'><IconPencil /><IconTrash /></h6>
                                </div>
                                <div className='home-border'></div>
                                <h6>Start date : <span>28/06/2022</span></h6>
                                <h6>End date : -</h6>
                            </div>
                        </Grid.Col>
                        <Grid.Col md={6} lg={3}>
                            <div className='edit'>
                                <div className='symptom-report'>
                                    <h6>Symptom #1</h6>
                                    <h6 className='icon'><IconPencil /><IconTrash /></h6>
                                </div>
                                <div className='home-border'></div>
                                <h6>Start date : <span>28/06/2022</span></h6>
                                <h6>End date : -</h6>
                            </div>
                        </Grid.Col>
                    </Grid>
                </div>
            </div>

        </>
    );
}

export default Symptoms;