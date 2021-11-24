import { HttpRequest, HttResponse } from '../http/http';

export class SignUpController {
  handle(httpRequest: HttpRequest): HttResponse {
    if (!httpRequest?.body.name) {
      return {
        statusCode: 400,
        body: new Error('Missing param: name'),
      };
    }
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new Error('Missing param: email'),
      };
    }
  }
}