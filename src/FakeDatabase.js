class FakeDatabase {
  constructor() {
    this.persons = [
      {
        id: "1",
        name: "Xavier Decuyper",
        email: "xavier@awesomeblog.com",
      },
      {
        id: "2",
        name: "Jessie Baker",
        email: "jessie@awesomeblog.com",
      },
      {
        id: "3",
        name: "Adam Richards",
        email: "adam@awesomeblog.com",
      },
    ];
  }

  // ------------------------------------------------------------
  //                      READ METHODS
  // ------------------------------------------------------------
  getPerson(id) {
    // Here you would make a db connection + query + return data
    return this.persons.filter((person) => {
      return person.id === id;
    })[0];
  }

  getAllPersons() {
    // Here you would make a db connection + query + return data
    return this.persons;
  }

  // ------------------------------------------------------------
  //                      WRITE METHODS
  // ------------------------------------------------------------
  registerPerson(person) {
    // Here you would make a db connection + query + return data
    person.id = this.persons.length + 1;
    this.persons.push(person);
    return person;
  }
}

export const fakeDatabase = new FakeDatabase();
