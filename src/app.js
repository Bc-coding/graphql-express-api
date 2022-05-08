import express from "express";
import { graphqlHTTP } from "express-graphql";
import { graphql } from "graphql";
import schema from "./schema/schema.js";

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

// Listening to our server
app.listen(8000, () =>
  console.log("GraphQL server is running on localhost:8000/graghql")
);
