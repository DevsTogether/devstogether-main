import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { red } from '@mui/material/colors';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { Estilo } from './styles';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 645, background: 'black', color: 'white', width: '80vw' }}>
            <CardMedia
                component="img"
                height="60"
                image="/static/images/cards/paella.jpg"
                alt="Paella dish"
            />
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <CardContent>
                <Estilo>
                    <div className="informations_user">
                        <div>
                            <h3>Nome de usuário</h3>
                            <h4>Marcos Alves</h4>
                        </div>
                        <Button variant="contained" href="#contained-buttons">
                            Link
                        </Button>
                    </div>

                    <div className="informations_user">
                        <div>
                            <h3>Nome de usuário</h3>
                            <h4>Marcos Alves</h4>
                        </div>
                        <Button variant="contained" href="#contained-buttons">
                            Link
                        </Button>
                    </div>

                    <div className="informations_user">
                        <div>
                            <h3>Nome de usuário</h3>
                            <h4>Marcos Alves</h4>
                        </div>
                        <Button variant="contained" href="#contained-buttons">
                            Link
                        </Button>
                    </div>
                </Estilo>
            </CardContent>
        </Card>
    );
}