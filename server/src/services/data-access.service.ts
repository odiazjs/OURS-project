import dataJson from "../static/data.json";
import { omit } from "lodash";
import { Client } from "../types";

export default class DataAccessService {
  private static instance: DataAccessService;

  private constructor() {}

  public static getInstance(): DataAccessService {
    if (!DataAccessService.instance) {
      DataAccessService.instance = new DataAccessService();
    }
    return DataAccessService.instance;
  }

  public async getClients(): Promise<Client[]> {
    const clientsWithEvents = [...dataJson];
    const clients = clientsWithEvents.map((client: any) => {
      return {
        ...omit(client, ["events"]),
      };
    });
    return Promise.resolve(clients as Client[]);
  }

  public async getClientById(id: string): Promise<Client | undefined> {
    const clientsWithEvents = [...dataJson];
    const client = clientsWithEvents.find((client: any) => client.id === id);
    return Promise.resolve(client as Client);
  }

  public async getEvents(): Promise<any[]> {
    const clientsWithEvents = [...dataJson];
    const allFlatEvents = clientsWithEvents.reduce(
      (acc: any[], client: any) => {
        const clientEvents = client.events.map((event: any) => {
          return {
            ...event,
          };
        });
        return [...acc, ...clientEvents];
      },
      []
    );
    return Promise.resolve(allFlatEvents);
  }

  public async getEventById(id: string): Promise<any | undefined> {
    const clientsWithEvents = [...dataJson];
    const event = clientsWithEvents.find((client: any) => client.id === id);
    return Promise.resolve(event);
  }

  public async getEventsByClientId(clientId: string): Promise<any[]> {
    const clientsWithEvents = [...dataJson];
    const client = clientsWithEvents.find(
      (client: any) => client.id === clientId
    );
    if (!client) {
      return Promise.resolve([]);
    }
    return Promise.resolve(client.events);
  }
}
