import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://Puchheim.stepzen.net/api/lopsided-garfish/__graphql",
    header: {
        Authorisation: `Apikey ${process.env.NEXT_PUBLIC_STEPZEN_KEY}`,
    },
    cache: new InMemoryCache(),
});

export default client;