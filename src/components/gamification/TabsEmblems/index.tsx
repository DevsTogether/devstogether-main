import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import Respost from '@src/components/gamification/answear/index';
import Emblemas from '@src/components/gamification/Emblems/index';
import Avaliações from '@src/components/gamification/evaluation/index';
import Perguntas from '@src/components/gamification/Questions/index';
import * as React from 'react';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '50%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs indicatorColor={'primary'} value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Emblemas" {...a11yProps(0)} />
                    <Tab label="Respostas" {...a11yProps(1)} />
                    <Tab label="Perguntas" {...a11yProps(2)} />
                    <Tab label="Avaliações" {...a11yProps(3)} />
                </Tabs>
            </Box>

            <TabPanel value={value} index={0}>
                <Emblemas />
                <Emblemas />
                <Emblemas />
                <Emblemas />
                <Emblemas />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Respost />
                <Respost />
                <Respost />
                <Respost />
                <Respost />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Perguntas />
                <Perguntas />
                <Perguntas />
                <Perguntas />
            </TabPanel>

            <TabPanel value={value} index={3}>
                <Avaliações />
                <Avaliações />
                <Avaliações />
                <Avaliações />
            </TabPanel>

        </Box>
    );
}