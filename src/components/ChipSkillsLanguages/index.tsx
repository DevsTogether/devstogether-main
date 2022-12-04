import Chip from '@mui/material/Chip';

export default function ClickableAndDeletableChips() {
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    return (

        <Chip
            label="Javascript"
            variant="outlined"
            onClick={handleClick}
            onDelete={handleDelete}
        />
    );
}