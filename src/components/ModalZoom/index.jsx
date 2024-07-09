import Imagen from "../Galeria/Imagen";
import { styled } from "styled-components";

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0, 0.7);
`;

const DialogoEstilizado = styled.dialog`
    position: absolute;
    top: 24px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex; 
    justify-content: center;
    form{
        button{
            position: relative;
            top: 20px;
            right: 60px;
            cursor: pointer;
            background: transparent;
            border: none;
        }
    }
`;

const ModalZoom = ({foto, cerrar, alternarFavorito}) =>{
    return (
        <>
            {
                foto && <>
                    <Overlay></Overlay>
                    <DialogoEstilizado open={!!foto} onClose={cerrar}>
                        <Imagen expandida={true} foto={foto} alternarFavorito={alternarFavorito}></Imagen>
                        <form action="" method="dialog">
                            <button>
                                <img src="/icon/cerrar.png" alt="Cerrar" />
                            </button>
                        </form>
                    </DialogoEstilizado>
                </>
            }
        </>
    );
}

export default ModalZoom;