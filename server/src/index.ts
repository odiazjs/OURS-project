import { ApolloServer } from "apollo-server-lambda";
import { readFileSync } from "fs";
import { gqlResolvers } from "./resolvers";

export const typeDefs = readFileSync("schema.graphql", "utf8");

export const resolvers = {
  Query: {
    getClients: gqlResolvers.queryClientList,
    getClient: gqlResolvers.findClientById,
    getEvents: gqlResolvers.queryEventList,
    getEvent: gqlResolvers.findEventById,
    getEventsByClient: gqlResolvers.findEventByClientId,
  },
};

export const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: process.env.NODE_ENV === "development",
});

export const handler = server.createHandler();
