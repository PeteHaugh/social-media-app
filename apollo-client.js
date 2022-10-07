import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://puchheim.stepzen.net/api/lopsided-garfish/__graphql",
    headers: {
        Authorisation: `apikey ${process.env.NEXT_PUBLIC_STEPZEN_KEY}`,
        "Content-Type": "application/json",
        credentials: 'include'
    },

    cache: new InMemoryCache(),
    
});

export default client;

