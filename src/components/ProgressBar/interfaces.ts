export interface ProgressBarContainerProps {
  homeTeam?: boolean;
}

export interface ProgressBarValueProps extends ProgressBarContainerProps {
  stats: number;
}

export interface ProgressBarProps {
  homeStat: number | any;
  awayStat: number | any;
  title: string;
}
