import TextField from '@mui/material/TextField';
import * as React from 'react';

export default function MultilineTextFields() {
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                defaultValue="Default Value"
                sx={{ width: '70%' }}
            />
        </div>
    );
}