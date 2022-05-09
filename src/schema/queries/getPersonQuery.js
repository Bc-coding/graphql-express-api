import { GraphQLNonNull, GraphQLString } from "graphql";
import { Person } from "../types/Person";
import { fakeDatabase } from "../../FakeDatabase";

export default {
  person: {
    type: Person,
    description: "Get details of the current person",
    args: {
      id: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: function (parent, { id }) {
      return fakeDatabase.getPerson(id);
    },
  },
};
