import { GraphQLNonNull, GraphQLInt } from "graphql";
import { fakeDatabase } from "../../FakeDatabase";
import { Person, PersonInputType } from "../types/Person";

export default {
  registerPerson: {
    type: Person,
    description: "Register a new person",
    args: {
      //   id: { type: new GraphQLNonNull(GraphQLInt) },
      person: { type: PersonInputType },
    },
    resolve: function (parent, { person }) {
      return fakeDatabase.registerPerson(person);
    },
  },
};
