import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: " http://localhost:5001/api/lopsided-garfish",
    headers: {
        Authorisation: `apikey ${process.env.NEXT_PUBLIC_STEPZEN_KEY}`,
        "Content-Type": "application/json",
    },

    cache: new InMemoryCache(),
    
});

export default client;