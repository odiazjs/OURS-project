import gql from "graphql-tag";

export const GET_CLIENTS_QUERY = gql`
  query GetClients {
    getClients {
      id
      email
      firstName
      lastName
    }
  }
`;

export const GET_CLIENT_EVENTS_QUERY = gql`
  query GetEventsByClient($clientId: ID!) {
    getEventsByClient(clientId: $clientId) {
      id
      title
      startDateTime
    }
  }
`;
