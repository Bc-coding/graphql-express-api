import { GraphQLObjectType, GraphQLString, GraphQLList } from "graphql";

export const CurrentPerson = new GraphQLObjectType({
  name: "getCurrentPerson",
  description: "details of the person who has currently logged in",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone_number: { type: GraphQLString },
    api_token: { type: GraphQLString },
  }),
});
