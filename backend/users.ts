export class User {
  constructor(
    public email: string,
    public name: string,
    private password: string
  ) {}

  Validate(another: User): boolean {
    return (
      another !== undefined &&
      another.email === this.email &&
      another.password === this.password
    );
  }
}

export const users: { [key: string]: User } = {
  "juliana@gmail.com": new User("juliana@gmail.com", "Juliana", "ju123"),
  "wagner@gmail.com": new User("wagner@gmail.com", "Wagner", "123")
};
