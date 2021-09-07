import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../constants/constants';

@Injectable()
export class AuthService {
  constructor() {}
  public verifyToken(token) {
    return new Promise((resolve, error) => {
      jwt.verify(token, JWT_SECRET, function (err, decoded) {
        if (err) {
          error(false);
        }

        resolve(decoded);
        return true;
      });
    });
  }
}
