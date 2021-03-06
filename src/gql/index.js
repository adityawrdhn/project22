import ApolloClient from "apollo-boost";
import { Buffer } from "buffer";
const base64encoded = Buffer.from(
  process.env.REACT_APP_DB_SECRET + ":"
).toString("base64");
const headers = { Authorization: `Basic ${base64encoded}` };
const client = new ApolloClient({
  uri: "https://graphql.fauna.com/graphql",
  headers,
});
export default client;
