import { MissingParamError } from '../../errors';
import { badRequest } from '../../helpers';
import { HttpRequest, HttpResponse } from '../../protocols';
import { LoginController } from './login';

describe('Login Controller', () => {
  test('Should return 400 if no email is provided', async () => {
    const sut = new LoginController();
    const httpRequest: HttpRequest = {
      body: {
        password: 'any_password',
      },
    };
    const httpResponse: HttpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual(badRequest(new MissingParamError('email')));
  });
});