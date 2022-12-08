import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
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
        <Card sx={{ maxWidth: 645, background: '#2d3237;', color: 'white', width: '100%' }}>
            <CardMedia
                component="img"
                height="10vw"
                image="/banner.png"
                alt="Paella dish"
            />
            <CardHeader
                avatar={
                    <>
                        <div>
                            <Avatar alt="Travis Howard" src="/avatar.png" />
                        </div>
                        <h2>Marcos Alves</h2>
                    </>
                }
            />
            <CardContent>
                <Estilo>
                    <div className="informations_user">
                        <div>
                            <h3>NOME DE USUÁRIO</h3>
                            <h4>Marcos Alves</h4>
                        </div>
                        <Button sx={{ height: '25%' }} variant="contained" href="#contained-buttons">
                            Link
                        </Button>
                    </div>

                    <div className="informations_user">
                        <div>
                            <h3>E-MAIL</h3>
                            <h4>**********@gmail.com</h4>
                        </div>
                        <Button sx={{ height: '25%' }} variant="contained" href="#contained-buttons">
                            Link
                        </Button>
                    </div>

                    <div className="informations_user">
                        <div>
                            <h3>TELEFONE</h3>
                            <h4>******2547</h4>
                        </div>
                        <Button sx={{ height: '25%' }} variant="contained" href="#contained-buttons">
                            Link
                        </Button>
                    </div>
                </Estilo>
            </CardContent>
        </Card>
    );
}