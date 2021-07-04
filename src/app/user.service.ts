export class UserService {

  users = [
    { id: 1, name: 'Mike', isActive: true },
    { id: 2, name: 'Tom', isActive: false },
    { id: 3, name: 'Nick', isActive: true },
    { id: 4, name: 'Bill', isActive: false },
    { id: 5, name: 'Will', isActive: true },
  ];

  setUserInactive(params: { id: number }) {

    if (this.users.find(user => user.id === params.id)) {
      const index = this.users.findIndex(user => user.id === params.id);
      this.users[index].isActive = false;
    }
  }

  setUserActive(params: { id: number }) {

    if (this.users.find(user => user.id === params.id)) {
      const index = this.users.findIndex(user => user.id === params.id);
      this.users[index].isActive = true;
    }
  }

  getUsers() {
    return this.users;
  }
}
