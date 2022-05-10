import { graphql, GraphQLObjectType, GraphQLSchema } from "graphql";

import getPersonQuery from "./queries/getPersonQuery";
import getAllPersonsQuery from "./queries/getAllPersonsQuery";
import registerPersonMutation from "./mutation/registerPersonMutation";

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Rootquery",
    fields: () => ({
      ...getPersonQuery,
      ...getAllPersonsQuery,
    }), // return an object
  }),
  mutation: new GraphQLObjectType({
    name: "Rootmutation",
    fields: () => ({
      ...registerPersonMutation,
    }),
  }),
});

export default schema;
