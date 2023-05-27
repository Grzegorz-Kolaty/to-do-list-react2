import styled from "styled-components";

export default styled.input`
  ${({ theme }) => theme.spacingElements};
  border: 2px solid ${({ theme }) => theme.background.color};
  min-height: 40px;
`;
