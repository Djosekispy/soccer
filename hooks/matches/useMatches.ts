import { ApiResponse } from "@/components/matches/data/matches";
import ApiRequest from "@/config/axiosConfig";
import { useEffect, useState } from "react";
import IMatche from "./IMatches";


function useMatches() : IMatche {
      const [matches, setMatches] = useState<ApiResponse[]>([]); 
      const [upcomingMatches, setUpcomingMatches] = useState<ApiResponse[]>([]);
      const [isLoading, setIsLoading] = useState<boolean>(false);
      const [competitionId, setCompetitionId ] = useState<string | number>(2021)
    
     const fetchMatchByDate = async (date = new Date)=> {
      setIsLoading(true)
      try {
        const getMatches = await ApiRequest.get(`/competitions/${competitionId}/matches?dateFrom=${date.toISOString().split("T")[0]}&dateTo=${date.toISOString().split("T")[0]}`);
        await fetchUpcomingMatches(date);  
        setMatches(getMatches.data.matches);
      } catch (error) {
        console.log(JSON.stringify(error));
      }finally{
        setIsLoading(false)
      }
     }

      const fetchUpcomingMatches = async (date = new Date)=> {
      setIsLoading(true)
      try {
        const dateFrom = date.toISOString().split("T")[0];
         const endDate = new Date(date);
         endDate.setDate(endDate.getDate() + 7);
         const dateTo = endDate.toISOString().split("T")[0];

        const getMatches = await ApiRequest.get(`/competitions/${competitionId}/matches?dateFrom=${dateFrom}&dateTo=${dateTo}`);
          setUpcomingMatches(getMatches.data.matches);
      } catch (error) {
        console.log(JSON.stringify(error));
      }finally{
        setIsLoading(false)
      }
     }

        const fetchMatchLive = async ()=> {
      setIsLoading(true)
      try {
        const getMatches = await ApiRequest.get(`/matches?status=IN_PLAY`);
          setMatches(getMatches.data.matches);
      } catch (error) {
        console.log(JSON.stringify(error));
      }finally{
        setIsLoading(false)
      }
     }

       const fetchAllMatches = async ()=> {
      setIsLoading(true)
      try {
        const getMatches = await ApiRequest.get(`/matches`);
          setMatches(getMatches.data.matches);
      } catch (error) {
        console.log(JSON.stringify(error));
      }finally{
        setIsLoading(false)
      }
     }
    
     useEffect(()=>{
      fetchMatchByDate();
     },[])

       useEffect(()=>{
      fetchUpcomingMatches();
      fetchMatchByDate();
     },[competitionId])

     return {
        fetchMatchByDate,
        isLoading,
        matches,
        upcomingMatches,
        fetchMatchLive,
        fetchAllMatches,
        fetchUpcomingMatches,
        setCompetitionId
     }
}

export default useMatches;