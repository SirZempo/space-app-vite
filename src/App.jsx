import styled from "styled-components"
import BarraLateral from "./components/BarraLateral/index.jsx";
import Cabecera from "./components/Cabecera/index.jsx";
import GlobalStyles from "./components/GlobalStyles/index.jsx"
import Banner from "./components/Banner/index.jsx";
import fotoEspacio from "../public/img/Foto destaque.png";
import Galeria from "./components/Galeria/index.jsx";

const FondoGradiente = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
  height: auto;
`;

const AppContainer = styled.div`
  width: 96%;
  max-width: 100%;
  margin: 0 auto;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const ContenidoGaleria = styled.section`
  display: flex; 
  flex-direction: column;
  flex-grow: 1;
`;

function App() {

  return (
    <>
      <FondoGradiente>
        <GlobalStyles></GlobalStyles>
        <AppContainer>
          <Cabecera></Cabecera>
          <MainContainer>
            <BarraLateral></BarraLateral>
            <ContenidoGaleria>
              <Banner texto="La galería más completa del espacio" backgroundImage={fotoEspacio}></Banner>
              <Galeria></Galeria>
            </ContenidoGaleria>
          </MainContainer>
        </AppContainer>
      </FondoGradiente>
    </>
  )
}

export default App
