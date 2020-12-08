import {loginData} from './config';
import {login} from "../utils/utils";

describe('Login to MTV - first try', () => {
  it('Login to MTV', () => {
    login(loginData);
  });
});
