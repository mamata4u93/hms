import { useState } from 'react';
import { Image } from '@mantine/core';
import error from '../../assets/error.png';




function Error() {

    return (
        <>
            <div className='error-sec'>
                <div style={{ width: 500, marginLeft: 'auto', marginRight: 'auto', marginTop: "10%" }}>
                    <Image
                        radius="md"
                        src={error}
                        alt="Random unsplash image"
                    />
                </div>
                <h5>No Record Found</h5>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text e ver since the 1500s, when an unknown printer took a galley</p>
            </div>

        </>
    );
}

export default Error;