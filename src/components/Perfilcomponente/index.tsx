import FaceIcon from '@mui/icons-material/Face';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { Menu } from './style';



function Perfil(): JSX.Element {
    return (
        <Menu>

            <div className="Avatar">
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <h2>Matheus Alves</h2>
            </div>
            <div className='chips_usuario'>
                <Chip icon={<FaceIcon />} label="With Icon" />
                <Chip icon={<FaceIcon />} label="With Icon" />
            </div>
            <div className="letras">
                <p>Perguntas</p>
                <p>Respostas</p>
                <p>Agradeceram</p>
            </div>

            <div className="numeros">
                <p>1</p>
                <p>2</p>
                <p>3</p>
            </div>

           <div className='sobremim'>
            <h3>Sobre Mim</h3><br />
            <p>ajhwfoiwnaoigfnawoeingoinewaoingoieanogineaoingoieang<br />
                akwnfgoiwanoigfnowianegomeaogmoieamoigfeaoimfoimeaoimfie
            </p>
            </div>

            <div className="links">
                <p><img src="/boloicon.png" />Perguntas</p>
                <p><img src="/boloicon.png" />Perguntas</p>
                <p><img src="/boloicon.png" />Perguntas</p>
                <p><img src="/boloicon.png" />Perguntas</p>
            </div>

            <div className="icones">
                <Chip icon={<FaceIcon />} label="With Icon" /><br/>
                <Chip icon={<FaceIcon />} label="With Icon" /><br/>
                <Chip icon={<FaceIcon />} label="With Icon" /><br/>
                <Chip icon={<FaceIcon />} label="With Icon" /><br/>
            </div>
        </Menu >
    );
}

export default Perfil;