import { graphql, GraphQLObjectType, GraphQLSchema } from "graphql";

import getCurrentPersonQuery from "./queries/getCurrentPersonQuery";

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Rootquery",
    fields: () => ({
      ...getCurrentPersonQuery,
    }), // return an object
  }),
});

export default schema;
