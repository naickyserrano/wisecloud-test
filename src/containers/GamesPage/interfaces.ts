export interface DataResults {
  playersByTeam: PlayersByTeam;
  recaps: Recaps;
  gameState: string;
}

export interface AccProps {
  home: number | unknown;
  away: number | unknown;
}

export interface PlayersByTeam {
  BIF: Bif;
  FHC: Fhc;
}

export interface Bif {
  GK: Gk[];
  players: Player[];
}

export interface Gk {
  player: number;
  game: number;
  team: string;
  jersey: number;
  line: number;
  position: string;
  firstName: string;
  familyName: string;
  pim: number;
  actiontype: string;
  teamId: string;
  tot_ga: number;
  tot_soga: number;
  tot_spga: number;
  tot_svs: number;
  tot_svs_perc: number;
  tot_nonso_svs_perc: number;
}

export interface Player {
  player: number;
  game: number;
  team: string;
  jersey: number;
  line: number;
  position: string;
  firstName: string;
  familyName: string;
  pim: number;
  actiontype: string;
  teamId: string;
  hits: number;
  g: number;
  a: number;
  toi: string;
  shg: number;
  ppg: number;
  fo_perc: number;
  sw: number;
  sog: number;
  ppsog: number;
  nep: number;
  pop: number;
  netPlusMinus: number;
  tp: number;
  fo_tot: number;
  fow: number;
  fol: number;
}

export interface Fhc {
  GK: Gk2[];
  players: Player2[];
}

export interface Gk2 {
  player: number;
  game: number;
  team: string;
  jersey: number;
  line: number;
  position: string;
  firstName: string;
  familyName: string;
  pim: number;
  actiontype: string;
  teamId: string;
  tot_ga: number;
  tot_soga: number;
  tot_spga: number;
  tot_svs: number;
  tot_svs_perc: number;
  tot_nonso_svs_perc: number;
}

export interface Player2 {
  player: number;
  game: number;
  team: string;
  jersey: number;
  line: number;
  position: string;
  firstName: string;
  familyName: string;
  pim: number;
  actiontype: string;
  teamId: string;
  hits: number;
  g: number;
  a: number;
  toi: string;
  shg: number;
  ppg: number;
  fo_perc: number;
  sw: number;
  sog: number;
  ppsog: number;
  nep: number;
  pop: number;
  netPlusMinus: number;
  tp: number;
  fo_tot: number;
  fow: number;
  fol: number;
}

export interface Recaps {
  gameRecap: GameRecap;
  "0": N0;
  "1": N1;
  "2": N2;
}

export interface GameRecap {
  periodNumber: number;
  gameStatsId: number;
  status: string;
  awayTeamId: string;
  awayTeamName: string;
  awayG: number;
  awayPIM: number;
  awayFOW: number;
  awaySOG: number;
  awaySPG: number;
  awaySaves: number;
  awayGA: number;
  awaySavesPerShot: number;
  awayPP_perc: number;
  awaySH_perc: number;
  awayPPG: number;
  awaySHG: number;
  awayPPGA: number;
  awaySHGA: number;
  awayNumPP: number;
  awayNumSH: number;
  awayHits: number;
  awayPPSOG: number;
  awayactiontype: string;
  awayteamId: string;
  startDateTime: string;
  endDateTime: string;
  statusString: string;
  statsId: number;
  homeTeamId: string;
  homeTeamName: string;
  homeG: number;
  homePIM: number;
  homeFOW: number;
  homeSOG: number;
  homeSPG: number;
  homeSaves: number;
  homeGA: number;
  homeSavesPerShot: number;
  homePP_perc: number;
  homeSH_perc: number;
  homePPG: number;
  homeSHG: number;
  homePPGA: number;
  homeSHGA: number;
  homeNumPP: number;
  homeNumSH: number;
  homeHits: number;
  homePPSOG: number;
  homeactiontype: string;
  hometeamId: string;
}

export interface N0 {
  periodNumber: number;
  gameStatsId: number;
  status: string;
  awayTeamId: string;
  awayTeamName: string;
  awayG: number;
  awayPIM: number;
  awayFOW: number;
  awaySOG: number;
  awaySPG: number;
  awaySaves: number;
  awayGA: number;
  awaySavesPerShot: number;
  awayPP_perc: number;
  awaySH_perc: number;
  awayPPG: number;
  awaySHG: number;
  awayPPGA: number;
  awaySHGA: number;
  awayNumPP: number;
  awayNumSH: number;
  awayHits: number;
  awayPPSOG: number;
  awayactiontype: string;
  awayteamId: string;
  startDateTime: string;
  endDateTime: string;
  statusString: string;
  homeTeamId: string;
  homeTeamName: string;
  homeG: number;
  homePIM: number;
  homeFOW: number;
  homeSOG: number;
  homeSPG: number;
  homeSaves: number;
  homeGA: number;
  homeSavesPerShot: number;
  homePP_perc: number;
  homeSH_perc: number;
  homePPG: number;
  homeSHG: number;
  homePPGA: number;
  homeSHGA: number;
  homeNumPP: number;
  homeNumSH: number;
  homeHits: number;
  homePPSOG: number;
  homeactiontype: string;
  hometeamId: string;
}

export interface N1 {
  periodNumber: number;
  gameStatsId: number;
  status: string;
  awayTeamId: string;
  awayTeamName: string;
  awayG: number;
  awayPIM: number;
  awayFOW: number;
  awaySOG: number;
  awaySPG: number;
  awaySaves: number;
  awayGA: number;
  awaySavesPerShot: number;
  awayPP_perc: number;
  awaySH_perc: number;
  awayPPG: number;
  awaySHG: number;
  awayPPGA: number;
  awaySHGA: number;
  awayNumPP: number;
  awayNumSH: number;
  awayHits: number;
  awayPPSOG: number;
  awayactiontype: string;
  awayteamId: string;
  startDateTime: string;
  endDateTime: string;
  statusString: string;
  homeTeamId: string;
  homeTeamName: string;
  homeG: number;
  homePIM: number;
  homeFOW: number;
  homeSOG: number;
  homeSPG: number;
  homeSaves: number;
  homeGA: number;
  homeSavesPerShot: number;
  homePP_perc: number;
  homeSH_perc: number;
  homePPG: number;
  homeSHG: number;
  homePPGA: number;
  homeSHGA: number;
  homeNumPP: number;
  homeNumSH: number;
  homeHits: number;
  homePPSOG: number;
  homeactiontype: string;
  hometeamId: string;
}

export interface N2 {
  periodNumber: number;
  gameStatsId: number;
  status: string;
  awayTeamId: string;
  awayTeamName: string;
  awayG: number;
  awayPIM: number;
  awayFOW: number;
  awaySOG: number;
  awaySPG: number;
  awaySaves: number;
  awayGA: number;
  awaySavesPerShot: number;
  awayPP_perc: number;
  awaySH_perc: number;
  awayPPG: number;
  awaySHG: number;
  awayPPGA: number;
  awaySHGA: number;
  awayNumPP: number;
  awayNumSH: number;
  awayHits: number;
  awayPPSOG: number;
  awayactiontype: string;
  awayteamId: string;
  startDateTime: string;
  endDateTime: string;
  statusString: string;
  homeTeamId: string;
  homeTeamName: string;
  homeG: number;
  homePIM: number;
  homeFOW: number;
  homeSOG: number;
  homeSPG: number;
  homeSaves: number;
  homeGA: number;
  homeSavesPerShot: number;
  homePP_perc: number;
  homeSH_perc: number;
  homePPG: number;
  homeSHG: number;
  homePPGA: number;
  homeSHGA: number;
  homeNumPP: number;
  homeNumSH: number;
  homeHits: number;
  homePPSOG: number;
  homeactiontype: string;
  hometeamId: string;
}
