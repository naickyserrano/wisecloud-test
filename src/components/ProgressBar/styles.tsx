import styled from "styled-components";
import { ProgressBarContainerProps, ProgressBarValueProps } from "./interfaces";

const ProgressContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;
const ProgressLabel = styled.p`
  color: ${({ theme }) => theme.colors.darkPurple};
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;
const ProgressTitle = styled.p`
  font-weight: 500;
  margin: 0 0 1.5rem;
  text-align: center;
`;
const ProgressBarContainer = styled.div<ProgressBarContainerProps>`
  height: 0.5rem;
  background: ${({ theme, homeTeam }) =>
    homeTeam ? theme.colors.lightPurple : theme.colors.gray};
  margin: ${({ homeTeam }) => (homeTeam ? "0 0 0 1.250rem" : "0 1.250rem 0 0")};

  @media (max-width: 37.5em) {
    width: 9.375rem;
  }

  @media (min-width: 37.5em) {
    width: 16.875rem;
  }

  @media (min-width: 62em) {
    width: 21.875rem;
  }
`;
const ProgressBarValue = styled.div<ProgressBarValueProps>`
  background: ${({ theme, homeTeam }) =>
    homeTeam ? theme.colors.gray : theme.colors.darkPurple};
  height: 0.5rem;
  width: ${({ stats }) => stats}%;
  -webkit-animation: slideIn 2s;
  -moz-animation: slideIn 2s;
  -o-animation: slideIn 2s;
  animation: slideIn 2s;

  @-webkit-keyframes slideIn {
    0% {
      width: 0;
    }
    25% {
      width: 100%;
    }
    100% {
      width: normal;
    }
  }
  @-moz-keyframes slideIn {
    0% {
      width: 0;
    }
    25% {
      width: 100%;
    }
    100% {
      width: normal;
    }
  }
  @-ms-keyframes slideIn {
    0% {
      width: 0;
    }
    25% {
      width: 100%;
    }
    100% {
      width: normal;
    }
  }
  @-o-keyframes slideIn {
    0% {
      width: 0;
    }
    25% {
      width: 100%;
    }
    100% {
      width: normal;
    }
  }
  @keyframes slideIn {
    0% {
      width: 0;
    }
    25% {
      width: 100%;
    }
    100% {
      width: normal;
    }
  }
`;

export {
  ProgressContainer,
  ProgressLabel,
  ProgressTitle,
  ProgressBarContainer,
  ProgressBarValue,
};
