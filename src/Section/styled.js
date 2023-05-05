import styled from "styled-components";

export const Sections = styled.section`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 0px 39px 0px;
  background-color: white;
`;

export const Title = styled.h2`
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 0px;
  font-size: large;
  border-bottom: 3px solid #eee;

  @media (max-width: 767px) {
    justify-content: center;
  }
`;

export const Body = styled.div`
  padding: 20px;
`;