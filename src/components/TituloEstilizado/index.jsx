import styled from "styled-components";

const Contenedor = styled.div`
    width: 100%;
    position: relative;
    display: flex; 
    align-items: center;

    img{
        width: 100%;
    }

    h1{
        color: #D9D9D9;
        font-family: "GandhiSansRegular";
        font-weight: 500;
        width: 300px;
        text-wrap: wrap;
        position: absolute;
        margin-left: 4rem;
    }
`;

const TituloEstilizado = () => {
    return (
        <>
            <Contenedor>
                <img src="../../../public/img/Foto destaque.png" alt="Cielo hermoso" />
                <h1>La galería más completa del espacio</h1>
            </Contenedor>
        </>
    );
}

export default TituloEstilizado;