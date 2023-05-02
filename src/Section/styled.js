import styled from "styled-components";

export const Sections = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 0px 39px 0px;
`;

export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  border-bottom: 3px solid #eee;
  padding: 20px;
`;

export const Title = styled.h1`
  margin: 0px;
  font-size: 20px;
  flex-grow: 1;
`;

export const Subtitle = styled.h2`
  font-weight: 400;
  font-size: medium;
  margin: 0px;
`;

export const Body = styled.div`
  padding: 20px;
`;