import { StatusCodes } from "http-status-codes";

const ErrorsHandler = {
  NotFound: class extends Error {
    constructor(message) {
      super(message);
      this.status = StatusCodes.NOT_FOUND;
    }
  },
  BadRequest: class extends Error {
    constructor(message) {
      super(message);
      this.status = StatusCodes.BAD_REQUEST;
    }
  },
  Unauthenticated: class extends Error {
    constructor(message) {
      super(message);
      this.status = StatusCodes.UNAUTHORIZED;
    }
  },
  Unauthorized: class extends Error {
    constructor(message) {
      super(message);
      this.status = StatusCodes.UNAUTHORIZED;
    }
  },
};

export default ErrorsHandler;
