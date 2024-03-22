export class SecUser {

  public id: number;
  public email: String;
  public pwd: String;
  public role: String;
  public fullName: String;


  constructor(id: number,
              email: String,
              pwd: String,
              role: String,
              fullName: String) {
    this.id = id;
    this.email = email;
    this.pwd = pwd;
    this.role = role;
    this.fullName = fullName;
  }

}
