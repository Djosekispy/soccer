import ApiRequest from "@/config/axiosConfig";
import { useEffect, useState } from "react";
import { Competition, ICompetition, IScoreResponse } from "./ICompetition";


function useCompetition() : ICompetition {
        const isLoading: boolean = false;
        const [ score, setScore ] = useState<IScoreResponse[]>([]);
        const [competitions, setCompetition ] = useState<Competition[]>([])
        const [competitionId, setCompetionId ] = useState<string | number>(2021)
        const [standing, setStanding ] = useState<any>([])
        

    const fetchAllCompetitions = async () => {
        try {
            const response = await ApiRequest.get('/competitions');
            await fetchScoreCompetitionById();
            setCompetition(response.data.competitions);
        } catch (error) {
        console.log("Error fetching competitions:", error);
        }
    }
    const fetchScoreCompetitionById = async () => {
        try {
            const response = await ApiRequest.get(`/competitions/${competitionId}/scorers`);
            setScore(response.data.scorers);
        } catch (error) {
            console.log("Error fetching score competition by ID:", error);
        }
    }
    const fetchCompetitionById = async (id: number) => {
         try {
            const response = await ApiRequest.get(`/competitions/${competitionId}`);
            setScore(response.data.scorers);
        } catch (error) {
            console.log("Error fetching score competition by ID:", error);
        }
    }

    useEffect(() => {
        fetchScoreCompetitionById();
    }, [competitionId]);

    useEffect(() => {
        fetchAllCompetitions();
    }, []);
    

    return {
        fetchAllCompetitions,
        competitions,
        fetchCompetitionById,
        isLoading,
        score,
        standing,
        competitionId,
        setCompetionId,
        fetchScoreCompetitionById
    };
}

export default useCompetition;