import styled from 'styled-components';
import { Item, Lista } from '../Styles/Lista';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';


const TopBar = styled.nav`
    width: calc(100vw - 17px);
    height: 96px;
    background-color: white;
    display: flex;
    justify-content: space-around;
`;

const listaDoMenu = [
    'Catálogo',
    'Recomendações',
    'Comunidade'
];

const NavBar =()=> {
    return (
        <TopBar>
            <img src='https://lirp.cdn-website.com/35665dd9/dms3rep/multi/opt/Favicon-xpe-1920w.png' />
            <Lista>
                {listaDoMenu.map(item => (
                    <Item>{item}</Item>
                ))}
            </Lista>
            <Lista>
                <FontAwesomeIcon icon={faShoppingCart} />
                <FontAwesomeIcon icon={faUser} />
            </Lista>
        </TopBar>
    );
}

export default NavBar;