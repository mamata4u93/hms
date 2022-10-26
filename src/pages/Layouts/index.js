import React from "react";
import { Grid, } from '@mantine/core';
import Hearder from "./Hearder";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";


function Layouts(props) {
    return (
        <>
            <Grid>
                <Navbar />

                <Grid.Col xs={10}>
                    <Hearder />
                    <Outlet />
                    
                </Grid.Col>
            </Grid>
            <Footer />
        </>
    );
}

export default Layouts;