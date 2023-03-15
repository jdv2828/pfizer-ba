export class Usuario {
  email: string;
  credentials: { type: string; value: string }[];
  enabled: boolean;
  emailVerified: boolean;
  firstName: string;
  lastName: string;

  constructor(
    email: string,
    credentials: { type: string; value: string }[],
    enabled: boolean,
    emailVerified: boolean,
    firstName: string,
    lastName: string,
  ) {
    this.email = email;
    this.credentials = credentials;
    this.enabled = enabled;
    this.emailVerified = emailVerified;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public static define(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ): Usuario {
    const credentials = [{ type: 'password', value: password }];
    return new Usuario(email, credentials, true, true, firstName, lastName);
  }

  public static register(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ): Usuario {
    const credentials = [{ type: 'password', value: password }];
    return new Usuario(email, credentials, true, true, firstName, lastName);
  }
}
