import { useQuery } from "@apollo/client";
import { GET_CLIENTS_QUERY } from "../api/clients";

const useClients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS_QUERY);

  return {
    loading,
    error,
    clients: data?.getClients || [],
  };
};

export default useClients;
