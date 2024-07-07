import styled from "styled-components";

const Titulo = styled.h2`
    font-size: 32px;
    color: #7B78E5;
    font-weight: 400;
    text-align: ${props => props.$align ? props.$align : "left"};
`;

export default Titulo;