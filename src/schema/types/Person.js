import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInputObjectType,
} from "graphql";

export const Person = new GraphQLObjectType({
  name: "getPerson",
  description: "details of a specific person",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    api_token: { type: GraphQLString },
  }),
});

// INPUT OBJECT TYPE
export const PersonInputType = new GraphQLInputObjectType({
  name: "personInput",
  fields: {
    name: { type: GraphQLString },
    email: { type: GraphQLString },
  },
});
