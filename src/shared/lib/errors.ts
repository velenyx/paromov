export class AuthorizationError extends Error {
  constructor(message = "AuthorizationError") {
    super(message);
  }
}

export class NeedAuthError extends Error {
  constructor(message = "NeedAuthError") {
    super(message);
  }
}
