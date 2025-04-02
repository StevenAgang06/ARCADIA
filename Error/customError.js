import { StatusCodes } from "http-status-codes";

export class NotFound extends Error {
  constructor(message) {
    super(message);
    this.status = StatusCodes.NOT_FOUND;
  }
}

export class BadRequest extends Error {
  constructor(message) {
    super(message);
    this.status = StatusCodes.BAD_REQUEST;
  }
}

export class Unauthenticated extends Error {
  constructor(message) {
    super(message);
    this.status = StatusCodes.UNAUTHORIZED;
  }
}

export class Unauthorized extends Error {
  constructor(message) {
    super(message);
    this.status = StatusCodes.UNAUTHORIZED;
  }
}

export class Conflict extends Error {
  constructor(message) {
    super(message);
    this.status = StatusCodes.CONFLICT;
  }
}
