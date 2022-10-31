import { useState } from 'react';
import { Breadcrumbs, Image, Anchor, Text, Group, Avatar, Button } from '@mantine/core';
import {
    IconArrowNarrowLeft,
} from '@tabler/icons';
import datels from '../assets/datels.png';
import simptom from '../assets/simptom.png';
import mobile from '../assets/mobile.png';
import add from '../assets/add.png';
import phone from '../assets/phone.png';


function Symptoms() {
    const [modal, setModal] = useState(false);
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
                <div style={{ width: 33,marginTop: 5  }}>
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

        </>
    );
}

export default Symptoms;