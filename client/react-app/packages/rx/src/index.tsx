import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const apiUrls = {
  dev: "http://localhost:3000/dev/graphql",
  prod: "https://y9jrg36qi8.execute-api.us-east-1.amazonaws.com/dev/graphql",
};

export const client = new ApolloClient({
  uri: process.env.NODE_ENV === "development" ? apiUrls.dev : apiUrls.prod,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
