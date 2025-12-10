
interface IPlayer {
    id: number;
    name: string;
    firstName: string;
    lastName: string; 
    dateOfBirth: string;
    nationality: string;
    position: string;
    shirtNumber: number | null;
    lastUpdated: Date; 
}
interface ITeam {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
    address: string;
    website: string;
    founded: number;
    clubColors: string;
    venue: string;
    lastUpdated: Date;
}

interface IScoreResponse {
    player: IPlayer;
    team: ITeam;
    goals: number;
    assists: number;
    penalties: number;
        
}


 interface Area {
  id: number;
  name: string;
  code: string;
  flag: string | null;
}


 interface Winner {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
  address: string;
  website: string;
  founded: number;
  clubColors: string;
  venue: string;
  lastUpdated: string;
}


 interface CurrentSeason {
  id: number;
  startDate: string;      
  endDate: string;        
  currentMatchday: number;
  winner: Winner | null;
}


 interface Competition {
  id: number;
  area: Area;
  name: string;
  code: string;
  type: "LEAGUE" | "CUP";
  emblem: string;
  plan: "TIER_ONE" | "TIER_FOUR";
  currentSeason: CurrentSeason;
  numberOfAvailableSeasons: number;
  lastUpdated: string; 
}



interface ICompetition {
    fetchAllCompetitions(): void;
    competitions: Competition[];
    competitionId : number | string;
    setCompetionId : (id : number | string)=>void;
    fetchScoreCompetitionById(id: number): void;
    fetchCompetitionById(id: number): void;
    isLoading: boolean;
    score: IScoreResponse[];
    standing: any;
}
export { Competition, ICompetition, IPlayer, IScoreResponse, ITeam };

