import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function FolderList() {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#353e46', color: 'white' }}>
            <ListItem>
                <ListItemText primary="Português" secondary="Jan 9, 2014" />
            </ListItem>
            <ListItem>
                <ListItemText primary="Inglês" secondary="English" />
            </ListItem>
        </List>
    );
}