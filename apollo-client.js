import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://puchheim.stepzen.net/api/lopsided-garfish/__graphql",
    cache: new InMemoryCache(),
    headers: {
        Authorization: `Apikey ${process.env.NEXT_PUBLIC_STEPZEN_KEY}`,
        "Content-Type": "application/json",
    },

});

export default client;

