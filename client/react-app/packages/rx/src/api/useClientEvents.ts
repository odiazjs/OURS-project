import { useQuery } from "@apollo/client";
import { GET_CLIENT_EVENTS_QUERY } from "../api/clients";

const useClientEvents = (clientId: string) => {
  const { loading, error, data } = useQuery(GET_CLIENT_EVENTS_QUERY, {
    variables: {
      clientId,
    },
  });

  return {
    loading,
    error,
    events: data?.getEventsByClient || [],
  };
};

export default useClientEvents;
