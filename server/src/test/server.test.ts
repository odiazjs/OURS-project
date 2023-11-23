import { graphql } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import { resolvers, typeDefs } from "..";
import { Client } from "../types";

const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
describe("GQL Schema", () => {
  test("Test get all clients query", async () => {
    const query = `
    query GetClients {
        getClients {
          id,
          email
          firstName,
          lastName,
        }
      }
    `;
    const result = (await graphql({
      schema,
      source: query,
    })) as {
      data: {
        getClients: Client[];
      };
    };
    expect(result.data?.getClients.length).toBeGreaterThan(0);
  });
});
