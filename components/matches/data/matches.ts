export interface Match {
  id: string;
  league: string;
  leagueFlag: string;
  homeTeam: string;
  homeLogo: string;
  awayTeam: string;
  awayLogo: string;
  scoreHome: number;
  scoreAway: number;
  time: number; 
}

export const matches: Match[] = [
  {
    id: "1",
    league: "Premier League",
    leagueFlag: "../../../assets/flags/eng.png",
    homeTeam: "Nottingham Forest",
    homeLogo: "../../../assets/flags/forest.png",
    awayTeam: "Manchester United",
    awayLogo: "../../../assets/flags/manu.png",
    scoreHome: 0,
    scoreAway: 2,
    time: 78,
  },

  {
    id: "2",
    league: "Premier League",
    leagueFlag: "../../../assets/flags/eng.png",
    homeTeam: "Nottingham Forest",
    homeLogo: "../../../assets/flags/forest.png",
    awayTeam: "Manchester United",
    awayLogo: "../../../assets/flags/manu.png",
    scoreHome: 0,
    scoreAway: 2,
    time: 78,
  },
];
