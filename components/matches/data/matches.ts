
interface Area {
  id: number;
  name: string;
  code: string;
  flag: string;
}

interface competition {
  id: number;
  name: string;
  code: string;
  type: string;
  emblem: string;
}
interface season {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number;
  winner: null | string;
}
interface homeTeam {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
}

interface score {
  winner: string;
  duration: string;
  fullTime: {
    home: number | null;
    away: number | null;
  };
  halfTime: {
    home: number | null;
    away: number | null;
  };
}
interface odds {
  msg: string;
}

interface referees {
  id: number;
  name: string;
  type: string;
  nationality: string;
}
export interface ApiResponse {
  area:Area
  competition:competition,
  season:season,
  id:number,
  utcDate: Date,
  status: string,
  matchday: number,
  stage: string,
  group: number | string | null,
  lastUpdated: Date,
  homeTeam: homeTeam,
  awayTeam: homeTeam
  score:score,
  odds: odds,
  referees: referees[]
}


export interface Match {
  id: string | number;
  league: string;
  leagueFlag: string;
  homeTeam: string;
  homeLogo: string;
  awayTeam: string;
  awayLogo: string;
  scoreHome: number | null;
  scoreAway: number | null;
  time: number | string; 
}
