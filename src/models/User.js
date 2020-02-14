export default class User {
  constructor({
    id, email, firstName, lastName, avatar,
  }) {
    this.id = id;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
