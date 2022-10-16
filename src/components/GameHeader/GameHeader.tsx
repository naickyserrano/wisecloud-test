import { GameHeaderProps, RecapPeriods } from "./interfaces";
import { GameHeaderContainer, TextVs, SelectPeriod } from "./styles";

/**
 *
 * @returns {JSX.Element}
 */

const GameHeader = ({
  homeTeamId,
  awayTeamId,
  recapPeriodOptions,
  selectedRecapPeriod,
  handleSelectedRecapPeriod,
}: GameHeaderProps): JSX.Element => {
  const homeTeamLogo = require(`../../assets/${homeTeamId}-120.png`);
  const awayTeamLogo = require(`../../assets/${awayTeamId}-120.png`);

  return (
    <GameHeaderContainer>
      <img src={homeTeamLogo} alt="Home Team" width={120} />
      <TextVs>vs</TextVs>
      <img src={awayTeamLogo} alt="Away Team" width={120} />
      <SelectPeriod
        onChange={handleSelectedRecapPeriod}
        value={selectedRecapPeriod}
        name="periods"
      >
        {recapPeriodOptions.map((option: RecapPeriods) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </SelectPeriod>
    </GameHeaderContainer>
  );
};

export default GameHeader;
