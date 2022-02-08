import styled from "styled-components";

const BodyContainer = styled.div<{flex:number}>`
  display: flex;
  flex:${props=>props.flex};
  width:100%;
  flex-direction: column;
  align-items: center;
`;

export default BodyContainer;