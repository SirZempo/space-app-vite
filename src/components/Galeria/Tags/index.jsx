import tags from "./tags.json";
import { styled } from "styled-components";

const ContenedorBotones = styled.section`
    display: flex;
    align-items: center;
    gap: 64px;
    margin-top: 56px;
`;

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`;

const TagBoton = styled.button`
    font-size: 24px;
    border-radius: 10px;
    border: 2px solid transparent;
    background-color: #D9D9D94D;
    color: #FFFFFF;
    cursor: pointer;
    display: block;
    padding: 12px;
    box-sizing: border-box;
    &:hover{
        border-color: #C98CF1;
    }
`;

const Div = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;
`;

const Tag = () =>{
    return (
        <>
            <ContenedorBotones>
                <TagTitulo>Buscar por Tags:</TagTitulo>
                <Div>
                    {
                        tags.map(tag =>{
                            return <TagBoton key={tag.id}>{tag.titulo}</TagBoton>
                        })
                    }
                </Div>
            </ContenedorBotones>
        </>
    );
}

export default Tag;