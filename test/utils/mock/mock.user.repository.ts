class MockUserRepository {
  private users = [];

  create(user) {
    const newUser = {
      ...user,
      id: this.users.length + 1,
    };
    return newUser;
  }

  find() {
    return this.users.map((user) => {
      return {
        id: user.id,
        email: user.email,
      };
    });
  }

  findOne() {
    return this.users[0];
  }

  save(user) {
    this.users.push(user);
  }
}

export default MockUserRepository;
