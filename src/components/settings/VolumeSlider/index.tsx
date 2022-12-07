import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import * as React from 'react';

export default function ContinuousSlider() {
    const [value, setValue] = React.useState<number>(30);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number);
    };

    return (
        <Stack spacing={2} direction="row" sx={{ mb: 1, width: '40%' }} alignItems="center">
            <VolumeDown />
            <Slider aria-label="Volume" value={value} onChange={handleChange} />
            <VolumeUp />
        </Stack>
    );
}