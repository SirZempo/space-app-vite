import { styled } from "styled-components";
import BotonIcono from "../../BotonIcono"

const Figure = styled.figure`
    width: ${props => props.$expandida ? "90%" : "370px"};
    max-width: 100%;
    margin: 0; 
    display: flex; 
    flex-direction: column;
    
    & > img {
        max-width: 100%; 
        border-radius: 20px 20px 0 0;
    }

    figcaption {
        background-color: #001634;
        border-radius: 0 0 20px 20px;
        color: #FFFFFF;
        box-sizing: border-box;
        padding: 12px;

        h3{
            font-family: "GrandhiSansBold";
        }

        h4 {
            flex-grow: 1;
        }

        h3, h4 {
            margin: 0;
            font-size: 16px;
        }
    }
`;

const Pie = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Imagen = ({foto, expandida=false, solicitarZoom, alternarFavorito}) =>{

    const iconoFavorito = foto.favorita ? "/icon/favorito-activo.png" : "/icon/favorito.png";

    return (
        <>
            <Figure $expandida={expandida} id={`foto-${foto.id}`}>
                <img src={foto.path} alt={foto.alt} />
                <figcaption>
                    <h3>{foto.titulo}</h3>
                    <Pie>
                        <h4>{foto.fuente}</h4>
                        <BotonIcono onClick={()=> alternarFavorito(foto)}>
                            <img src={iconoFavorito} alt="Icono de Favorito" />
                        </BotonIcono>
                        {
                            !expandida && <BotonIcono aria-hidden={expandida} onClick={()=>solicitarZoom(foto)}>
                                <img src="/icon/expandir.png" alt="Icono de Expandir" />
                            </BotonIcono>
                        }
                    </Pie>
                </figcaption>
            </Figure>
        </>
    );
}

export default Imagen;