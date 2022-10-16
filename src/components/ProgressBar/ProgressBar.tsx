import {
  ProgressContainer,
  ProgressLabel,
  ProgressTitle,
  ProgressBarContainer,
  ProgressBarValue,
} from "./styles";
import { ProgressBarProps } from "./interfaces";

/**
 *
 * @returns {JSX.Element}
 */

const ProgressBar = ({
  homeStat,
  awayStat,
  title,
}: ProgressBarProps): JSX.Element => {
  return (
    <>
      <ProgressContainer>
        <ProgressLabel>{homeStat}%</ProgressLabel>
        <ProgressBarContainer homeTeam>
          <ProgressBarValue homeTeam stats={homeStat} />
        </ProgressBarContainer>
        <ProgressBarContainer>
          <ProgressBarValue stats={awayStat} />
        </ProgressBarContainer>
        <ProgressLabel>{awayStat}%</ProgressLabel>
      </ProgressContainer>
      <ProgressTitle>{title}</ProgressTitle>
    </>
  );
};

export default ProgressBar;
