import { useState } from 'react';
import { Breadcrumbs, Anchor } from '@mantine/core';
import {
    IconArrowNarrowLeft,

} from '@tabler/icons';
import camera from '../assets/camera.png';


function PatientsDetails() {
    const items = [
        { title: 'Back', href: '#' },
    ].map((item, index) => (
        <Anchor href={item.href} key={index}>
            {item.title}
        </Anchor>
    ));




    return (
        <>
            <div className='back-page'>
                <Breadcrumbs separator=""><IconArrowNarrowLeft />{items}</Breadcrumbs>
            </div>

            {/* <div style={{ width: 500, marginLeft: 'auto', marginRight: 'auto', marginTop: "10%" }}>
                <Image
                    radius="md"
                    src={error}
                    alt="Random unsplash image"
                />
            </div> */}
















        </>
    );
}

export default PatientsDetails;