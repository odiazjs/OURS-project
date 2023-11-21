import { ApolloServer } from "apollo-server-lambda";
import { config } from "dotenv";
import { readFileSync } from "fs";
import { gqlResolvers } from "./resolvers";

config();

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
  context: ({ event, context }) => {
    // Debugging
    return {
      headers: {
        ...event.headers,
        ...{
          "Access-Control-Allow-Origin": "*",
        },
      },
      functionName: context.functionName,
      event,
      context,
    };
  },
});

export const handler = server.createHandler();
