import React from "react";
import { Button, Table } from "semantic-ui-react";
import { Client } from "../types";
import useClients from "../api/useClients";
import { useNavigate } from "react-router-dom";

export type ClientsTableProps = {};

export const ClientsTable: React.FC<ClientsTableProps> = () => {
  const [clientList, setClientList] = React.useState<Client[]>([]);

  const { loading, error, clients } = useClients();

  const navigate = useNavigate();

  const handleClientDetails = (client: Client) => {
    navigate(`/clients/${client.id}`, {
      state: { client },
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (clientList.length === 0) {
    setClientList(clients);
  }

  return (
    <div>
      <h2>Clients</h2>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>E-mail</Table.HeaderCell>
            <Table.HeaderCell>View Details</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {clientList.map((client) => {
            return (
              <Table.Row key={client.id}>
                <Table.Cell>{client.firstName}</Table.Cell>
                <Table.Cell>{client.lastName}</Table.Cell>
                <Table.Cell>{client.email}</Table.Cell>
                <Table.Cell>
                  <Button
                    color="blue"
                    onClick={() => {
                      handleClientDetails(client);
                    }}
                  >
                    Details
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};
