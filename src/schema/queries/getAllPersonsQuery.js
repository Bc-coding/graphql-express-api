import { GraphQLNonNull, GraphQLString, GraphQLList } from "graphql";
import { AllPersons } from "../types/AllPersons";
import { Person } from "../types/Person";
import { fakeDatabase } from "../../FakeDatabase";

export default {
  allPersons: {
    type: new GraphQLList(Person),
    description: "Get details of the current person",
    args: {},
    resolve: function (parent) {
      return fakeDatabase.getAllPersons();
    },
  },
};
