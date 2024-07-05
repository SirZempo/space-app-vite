import { styled } from "styled-components";
import ItemNavegacion from "./ItemNavegacion";

const  ListaEstilizada = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

const BarraLateral = () =>{
    return (
        <>
            <aside>
                <nav>
                    <ListaEstilizada>
                        <ItemNavegacion iconoActivo="icon/home-activo.png" iconoInactivo="icon/home-inactivo.png" activo>Inicio</ItemNavegacion>
                        <ItemNavegacion iconoActivo="icon/mas-vistas-activo.png" iconoInactivo="icon/mas-vistas-inactivo.png">Más Vistas</ItemNavegacion>
                        <ItemNavegacion iconoActivo="icon/me-gusta-activo.png" iconoInactivo="icon/me-gusta-inactivo.png">Más Me Gusta</ItemNavegacion>
                        <ItemNavegacion iconoActivo="icon/nuevas-activo.png" iconoInactivo="icon/nuevas-inactivo.png">Nuevas</ItemNavegacion>
                        <ItemNavegacion iconoActivo="icon/sorprendeme-activo.png" iconoInactivo="icon/sorprendeme-inactivo.png">Sorpréndame</ItemNavegacion>
                    </ListaEstilizada>
                </nav>
            </aside>
        </>
    );
}

export default BarraLateral;