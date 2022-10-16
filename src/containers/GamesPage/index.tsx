import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import GameHeader from "../../components/GameHeader/GameHeader";
import { DataResults, AccProps } from "./interfaces";
import { MainContainer } from "./styles";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { progressTitles } from "../../constants/constants";

/**
 *
 * @returns {JSX.Element}
 */

const GamesPage = (): JSX.Element => {
  const data = useLoaderData();
  const [selectedRecapPeriod, setselectedRecapPeriod] = useState("0");
  const results: DataResults = data as DataResults;
  const recaps = Object.values(results?.recaps);
  const recapPeriod = recaps.filter(
    (r) => r.periodNumber === parseInt(selectedRecapPeriod)
  )[0];
  const recapPerPeriod = Object.entries(recapPeriod).map((entry) => {
    return {
      [entry[0]]: entry[1],
    };
  });
  const recapPerPeriodHome = recapPerPeriod.filter(
    (rpp: any) =>
      rpp.homeHits |
      rpp.homeSOG |
      rpp.homeNumPP |
      rpp.homeNumSH |
      rpp.homePPSOG |
      rpp.homePIM |
      rpp.homeFOW |
      rpp.homeSPG |
      rpp.homeG |
      rpp.homeSaves
  );
  const recapPerPeriodAway = recapPerPeriod.filter(
    (rpp: any) =>
      rpp.awayHits |
      rpp.awaySOG |
      rpp.awayNumPP |
      rpp.awayNumSH |
      rpp.awayPPSOG |
      rpp.awayPIM |
      rpp.awayFOW |
      rpp.awaySPG |
      rpp.awayG |
      rpp.awaySaves
  );

  const recapPerPeriodFinal = progressTitles.reduce(
    (acc: Array<AccProps>, curr) => {
      if (curr === "Possession") {
        acc.push({
          home: recapPerPeriodHome[8].homeHits,
          away: recapPerPeriodAway[8].awayHits,
        });
      } else if (curr === "Shots") {
        acc.push({
          home: recapPerPeriodHome[3].homeSOG,
          away: recapPerPeriodAway[3].awaySOG,
        });
      } else if (curr === "Passes") {
        acc.push({
          home: recapPerPeriodHome[6].homeNumPP,
          away: recapPerPeriodAway[6].awayNumPP,
        });
      } else if (curr === "Corner") {
        acc.push({
          home: recapPerPeriodHome[7].homeNumSH,
          away: recapPerPeriodAway[7].awayNumSH,
        });
      } else if (curr === "Crosses") {
        acc.push({
          home: recapPerPeriodHome[9].homePPSOG,
          away: recapPerPeriodAway[9].awayPPSOG,
        });
      } else if (curr === "Tackles") {
        acc.push({
          home: recapPerPeriodHome[1].homePIM,
          away: recapPerPeriodAway[1].awayPIM,
        });
      } else if (curr === "Blocks") {
        acc.push({
          home: recapPerPeriodHome[2].homeFOW,
          away: recapPerPeriodAway[2].awayFOW,
        });
      } else if (curr === "Clearance") {
        acc.push({
          home: recapPerPeriodHome[4].homeSPG,
          away: recapPerPeriodAway[4].awaySPG,
        });
      } else if (curr === "Fouls") {
        acc.push({
          home: recapPerPeriodHome[0].homeG,
          away: recapPerPeriodAway[0].awayG,
        });
      } else if (curr === "Offsides") {
        acc.push({
          home: recapPerPeriodHome[5].homeSaves,
          away: recapPerPeriodAway[5].awaySaves,
        });
      }
      return acc;
    },
    []
  );

  const awayTeamId = results?.recaps?.gameRecap?.awayTeamId;
  const homeTeamId = results?.recaps?.gameRecap?.homeTeamId;
  const recapPeriodOptions = recaps.map((recap) => {
    if (recap.periodNumber === 0)
      return {
        name: "Total",
        value: recap.periodNumber,
      };
    return {
      name: `Period ${recap.periodNumber}`,
      value: recap.periodNumber,
    };
  });

  const handleSelectedRecapPeriod = (e: { target: { value: string } }) => {
    setselectedRecapPeriod(e.target.value);
  };

  return (
    <MainContainer>
      <GameHeader
        homeTeamId={homeTeamId}
        awayTeamId={awayTeamId}
        recapPeriodOptions={recapPeriodOptions}
        selectedRecapPeriod={selectedRecapPeriod}
        handleSelectedRecapPeriod={handleSelectedRecapPeriod}
      />
      {recapPerPeriodFinal.map((rppf, i: number) => (
        <ProgressBar
          key={i}
          homeStat={rppf.home}
          awayStat={rppf.away}
          title={progressTitles[i]}
        />
      ))}
    </MainContainer>
  );
};

export default GamesPage;
