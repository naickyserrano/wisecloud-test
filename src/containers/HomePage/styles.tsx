import styled from "styled-components";

const HomeContainer = styled.div`
  height: 100%;
  padding: 0 1rem;
`;
const SelectContainer = styled.div`
  padding-top: 3rem;
  text-align: center;
`;
const Select = styled.select`
  border-color: ${({ theme }) => theme.colors.lightPurple};
  color: ${({ theme }) => theme.colors.lightPurple};
  font-size: 1.125rem;
  outline: none;
`;

export { HomeContainer, SelectContainer, Select };
