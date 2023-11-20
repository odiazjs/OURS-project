export type Client = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  events?: Event[];
};

export type Event = {
  id: string;
  title: string;
  startDateTime: string;
  client: Client;
};
