import { useQuery } from "@tanstack/react-query";
import { getTeamInfo, getTeamSquad } from "../apis/football";

export const teamQueryKey = {
  useTeamInfoQuery: "teamInfoQuery",
  useTeamSquadQuery: "teamSquadQuery",
};

export const useTeamInfoQuery = (teamId: string) => {
  return useQuery({
    queryKey: [teamQueryKey.useTeamInfoQuery, teamId],
    queryFn: ({ queryKey }) => getTeamInfo(queryKey[1] as string),
    enabled: !!teamId,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export const useTeamSquadQuery = (teamId: string) => {
  return useQuery({
    queryKey: [teamQueryKey.useTeamSquadQuery, teamId],
    queryFn: ({ queryKey }) => getTeamSquad(queryKey[1]),
    enabled: !!teamId,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};