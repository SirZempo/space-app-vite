import { styled } from "styled-components";
import Titulo from "../Titulo";
import Tag from "./Tags/index.jsx";
import Populares from "./Populares";
import Imagen from "./Imagen";

const GaleriaContainer = styled.div`
    display: flex;
    gap: 24px;
`;

const SeccionFluida = styled.section`
    flex-grow: 1;
`;

const ImagenesContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`;

const Galeria = ({fotos = []}) =>{

    return (
        <>
            <Tag></Tag>
            <GaleriaContainer>
                <SeccionFluida>
                    <Titulo>Navegue por la galería</Titulo>
                    <ImagenesContainer>
                        {
                            fotos.map(foto => <Imagen key={foto.id} foto={foto}></Imagen>)
                        }
                    </ImagenesContainer>
                </SeccionFluida>
                <Populares></Populares>
            </GaleriaContainer>
        </>
    );
}

export default Galeria;