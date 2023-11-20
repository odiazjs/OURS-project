import { ApolloServer } from "apollo-server-lambda";
import { config } from "dotenv";
import { readFileSync } from "fs";
import { gqlResolvers } from "./resolvers";

config();

const typeDefs = readFileSync("schema.graphql", "utf8");

const resolvers = {
  Query: {
    hello: async () => {
      return "Hello, world!";
    },
    getClients: gqlResolvers.queryClientList,
    getClient: gqlResolvers.findClientById,
    getEvents: gqlResolvers.queryEventList,
    getEvent: gqlResolvers.findEventById,
    getEventsByClient: gqlResolvers.findEventByClientId,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: process.env.NODE_ENV === "development",
  context: ({ event, context }) => {
    // Debugging
    return {
      headers: event.headers,
      functionName: context.functionName,
      event,
      context,
    };
  },
});

export const handler = server.createHandler();
