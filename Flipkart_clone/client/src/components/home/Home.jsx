import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import { Box, styled } from '@mui/material';

const Component = styled(Box)`
    padding: 20px 10px;
    background: #F2F2F2;
`;
function Home() {
    return (
        <>
            <Navbar />
            <Component>
                <Banner />
            </Component>
        </>
    )
}

export default Home
