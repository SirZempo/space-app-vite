import styled from "styled-components"
import BarraLateral from "./components/BarraLateral/index.jsx";
import Cabecera from "./components/Cabecera/index.jsx";
import GlobalStyles from "./components/GlobalStyles/index.jsx"
import TituloEstilizado from "./components/TituloEstilizado/index.jsx";

const FondoGradiente = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
  height: auto;
`;

function App() {

  return (
    <>
      <FondoGradiente>
        <GlobalStyles></GlobalStyles>
        <Cabecera></Cabecera>
        <BarraLateral></BarraLateral>
        <TituloEstilizado></TituloEstilizado>
      </FondoGradiente>
    </>
  )
}

export default App
