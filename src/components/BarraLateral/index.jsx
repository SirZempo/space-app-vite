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
                        {/*<ItemNavegacion><a href="">Más Me gusta</a></ItemNavegacion>
                        <ItemNavegacion><a href="">Nuevas</a></ItemNavegacion>
                        <ItemNavegacion><a href="">Sorpréndeme</a></ItemNavegacion>*/}
                    </ListaEstilizada>
                </nav>
            </aside>
        </>
    );
}

export default BarraLateral;