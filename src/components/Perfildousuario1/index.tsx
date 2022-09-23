import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';
import { Container } from './style';

function Layout(): JSX.Element {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (

        <Container>
                <Box sx={{ width: '40%', bgcolor: '#353E46', height: '70%', ml: '40%' }}>
                    <Tabs value={value} onChange={handleChange} centered textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="secondary tabs example">
                        <Tab label="Item One" />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" />
                        <Tab label="Item Three" />
                    </Tabs>
                </Box>
          
        </Container>

    );
}

export default Layout;
