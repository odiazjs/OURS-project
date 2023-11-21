import { useLocation, useParams } from "react-router-dom";
import { Client, Event } from "../types";
import React from "react";
import useClientEvents from "../api/useClientEvents";
import { ClientCard } from "./ClientCard";

export type ClientDetailProps = {
  client?: Client;
};

export const ClientDetails: React.FC<ClientDetailProps> = ({ client }) => {
  const { id } = useParams();
  const location = useLocation();

  const navigationState = location.state as { client: Client };

  const [clientDetail, setClientDetail] = React.useState<Client | undefined>();
  const [clientEvents, setClientEvents] = React.useState<Event[]>([]);

  const { loading, error, events } = useClientEvents(id as string);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (clientEvents.length === 0) {
    setClientEvents(events);
  }

  if (!clientDetail) {
    setClientDetail(navigationState.client);
  }

  return (
    <div>
      <h2>Client Details</h2>
      <ClientCard client={clientDetail} events={events}></ClientCard>
    </div>
  );
};
