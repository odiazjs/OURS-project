import { ApolloClient, InMemoryCache } from "@apollo/client";

const apiUrls = {
  dev: "http://localhost:4000/graphql",
  prod: "https://em40ts9ghi.execute-api.us-east-1.amazonaws.com/dev",
};

export const client = new ApolloClient({
  uri: process.env.NODE_ENV === "development" ? apiUrls.dev : apiUrls.prod,
  cache: new InMemoryCache(),
});
