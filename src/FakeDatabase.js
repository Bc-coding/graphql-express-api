class FakeDatabase {
  constructor() {
    this.persons = [
      {
        id: "1",
        name: "Xavier Decuyper",
        email: "xavier@awesomeblog.com",
        phone_number: "07703123123",
        api_token: "tHTRWERW",
      },
      {
        id: "2",
        name: "Jessie Baker",
        email: "jessie@awesomeblog.com",
        phone_number: "07703123456",
        api_token: "tHTRWERW",
      },
      {
        id: "3",
        name: "Adam Richards",
        email: "adam@awesomeblog.com",
        phone_number: "07703456456",
        api_token: "tHTRWERW",
      },
    ];
  }

  // ------------------------------------------------------------
  //                      READ METHODS
  // ------------------------------------------------------------
  getCurrentPerson(id) {
    // Here you would make a db connection + query + return data
    return this.persons.filter((person) => {
      return person.id === id;
    })[0];
  }

  // ------------------------------------------------------------
  //                      WRITE METHODS
  // ------------------------------------------------------------
}

export const fakeDatabase = new FakeDatabase();
