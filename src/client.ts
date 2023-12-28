import {ApolloClient, HttpLink, InMemoryCache, split} from '@apollo/client';
import {getMainDefinition} from '@apollo/client/utilities';
import {GraphQLWsLink} from "@apollo/client/link/subscriptions";
import {createClient} from "graphql-ws";

const wsLink = new GraphQLWsLink(createClient({url: `${process.env.REACT_APP_BACKEND_WS_URL}/sub`}))


const httpLink = new HttpLink({
    uri: `${process.env.REACT_APP_BACKEND_HTTP_URL}/graphql`
});

const splitLink = split(
    ({query}) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
);

export const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache()
});
