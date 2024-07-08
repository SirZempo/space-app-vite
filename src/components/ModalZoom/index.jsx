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
`;

const ModalZoom = ({foto}) =>{
    return (
        <>
            {
                foto && <>
                    <Overlay></Overlay>
                    <DialogoEstilizado open={!!foto}>
                        <Imagen expandida={true} foto={foto}></Imagen>
                        <form action="" method="dialog">
                            <button>OK</button>
                        </form>
                    </DialogoEstilizado>
                </>
            }
        </>
    );
}

export default ModalZoom;