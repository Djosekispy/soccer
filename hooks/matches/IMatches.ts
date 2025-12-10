import { ApiResponse } from "@/components/matches/data/matches";

interface IMatche {
    matches: ApiResponse[];
    upcomingMatches: ApiResponse[];
    fetchUpcomingMatches(): void;
    isLoading: boolean;
    fetchMatchByDate(date: Date): void;
    fetchMatchLive(): void;
    fetchAllMatches(): void;
    setCompetitionId: (id : string | number)=>void;
}

export default IMatche;