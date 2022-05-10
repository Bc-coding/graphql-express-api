import { GraphQLObjectType, GraphQLString, GraphQLList } from "graphql";

export const AllPersons = new GraphQLObjectType({
  name: "allPersons",
  description: "a list of all people in the database",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    api_token: { type: GraphQLString },
  }),
});
