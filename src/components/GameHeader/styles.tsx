import styled from "styled-components";

const GameHeaderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  max-width: 50rem;
  padding-bottom: 3rem;
  position: relative;
  width: 100%;

  @media (max-width: 37.5em) {
    align-items: center;
    flex-direction: column;
  }
`;
const TextVs = styled.p`
  align-self: center;
  font-size: 1.125rem;
  font-weight: 500;
`;
const SelectPeriod = styled.select`
  border: 0;
  color: ${({ theme }) => theme.colors.lightPurple};
  font-size: 1rem;
  outline: none;
  font-size: 1.125rem;

  @media (max-width: 37.5em) {
    margin: 1rem 0;
  }

  @media (min-width: 37.5em) {
    position: absolute;
    right: 0;
  }
`;

export { GameHeaderContainer, TextVs, SelectPeriod };
