import { GraphQLNonNull, GraphQLString } from "graphql";
import { CurrentPerson } from "../types/CurrentPerson";
import { fakeDatabase } from "../../FakeDatabase";

export default {
  currentPerson: {
    type: CurrentPerson,
    description: "Get details of the current person",
    args: {
      id: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: function (parent, { id }) {
      return fakeDatabase.getCurrentPerson(id);
    },
  },
};
