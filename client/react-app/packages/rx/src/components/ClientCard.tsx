import { Button, Card, Grid, Icon, Image, Table } from "semantic-ui-react";
import { Client, Event } from "../types";
import { useNavigate } from "react-router-dom";

export type ClientCardProps = {
  client?: Client;
  events?: Event[];
};

export const ClientCard: React.FC<ClientCardProps> = ({ client, events }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          paddingBottom: "2em",
        }}
      >
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          Go Back
        </Button>
      </div>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <Card>
              <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
              <Card.Content>
                <Card.Header>{client?.firstName}</Card.Header>
                <Card.Meta>{client?.lastName}</Card.Meta>
                <Card.Description>{client?.email}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  {events?.length} Events
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <h3>Events</h3>
            <Table singleLine>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Event Title</Table.HeaderCell>
                  <Table.HeaderCell>Event Date</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {events?.map((event) => {
                  return (
                    <Table.Row key={event.id}>
                      <Table.Cell>{event.title}</Table.Cell>
                      <Table.Cell>
                        {new Date(
                          event.startDateTime as any
                        ).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};
