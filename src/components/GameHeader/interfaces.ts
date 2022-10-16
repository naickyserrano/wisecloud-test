export interface GameHeaderProps {
  homeTeamId: string;
  awayTeamId: string;
  recapPeriodOptions: RecapPeriods[];
  selectedRecapPeriod: string;
  handleSelectedRecapPeriod: (e: { target: { value: string } }) => void;
}

export interface RecapPeriods {
  name: string;
  value: number;
}
