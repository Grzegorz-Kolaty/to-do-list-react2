import styled from "styled-components";

export const Sections = styled.section`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 0px 39px 0px;
  background-color: ${({ theme }) => theme.background.colorWhite};
`;

export const Title = styled.h2`
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.font.sizeLarge};
  ${({ theme }) => theme.spacingBoxes};
  border-bottom: 3px solid ${({ theme }) => theme.background.color};

  @media (max-width: 767px) {
    justify-content: center;
  }
`;

export const Body = styled.div`
  ${({ theme }) => theme.spacingBoxes}
`;