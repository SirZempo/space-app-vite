import { styled } from "styled-components";
import Titulo from "../Titulo";
import Tag from "./Tags/index.jsx";
import Populares from "./Populares";

const GaleriaContainer = styled.div`
    display: flex;
`;

const SeccionFluida = styled.section`
    flex-grow: 1;
`;

const Galeria = () =>{
    return (
        <>
            <Tag></Tag>
            <GaleriaContainer>
                <SeccionFluida>
                    <Titulo>Navegue por la galería</Titulo>
                </SeccionFluida>
                <Populares></Populares>
            </GaleriaContainer>
        </>
    );
}

export default Galeria;