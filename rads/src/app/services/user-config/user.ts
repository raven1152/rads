export class User {
  constructor(
    public userId: string,
    public isAuthenticated: boolean,
    public impersonateUser: string,
    public effectiveUser: string,
    public groupMembership: string[],
    public authenticationMessage: string,
    public lastName: string,
    public firstName: string,
    public emailAddress: string,
    public organization: string,
    public department: string
  ) {}
}
