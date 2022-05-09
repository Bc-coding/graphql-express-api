import { graphql, GraphQLObjectType, GraphQLSchema } from "graphql";

import getPersonQuery from "./queries/getPersonQuery";
import getAllPersonsQuery from "./queries/getAllPersonsQuery";

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Rootquery",
    fields: () => ({
      ...getPersonQuery,
      ...getAllPersonsQuery,
    }), // return an object
  }),
});

export default schema;
