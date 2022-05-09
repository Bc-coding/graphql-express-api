import { GraphQLObjectType, GraphQLString, GraphQLList } from "graphql";

export const Person = new GraphQLObjectType({
  name: "getPerson",
  description: "details of a specific person",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone_number: { type: GraphQLString },
    api_token: { type: GraphQLString },
  }),
});
