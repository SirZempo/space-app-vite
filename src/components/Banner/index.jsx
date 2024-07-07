import styled from "styled-components";

const FiguraEstilizada = styled.div`
    background-image: ${props => `url(${props.$backgroundImage})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 328px;
    margin 0;
    border-radius: 20px;
    max-width: 100%;
    background-size: cover;
`;

const TituloEstilizado = styled.h1`
    color: #D9D9D9;
    font-family: "GandhiSansRegular";
    font-weight: 500;
    font-size: 40px;
    width: 300px;
    margin-left: 4rem;
`;

const Banner = ({texto, backgroundImage}) => {
    return (
        <>
            <FiguraEstilizada $backgroundImage={backgroundImage}>
                <TituloEstilizado>{texto}</TituloEstilizado>
            </FiguraEstilizada>
        </>
    );
}

export default Banner;