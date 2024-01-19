import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import WebSocket from "ws";

const wsLink = new GraphQLWsLink(
  createClient({
    url: `ws://${process.env.REACT_APP_HOST}/sub`,
    connectionParams: async () => {
      return {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      };
    },
  })
);

const httpLink = new HttpLink({
  uri: `http://${process.env.REACT_APP_HOST}/graphql`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

export const client = new ApolloClient({
  link: splitLink,

  cache: new InMemoryCache(),
});
