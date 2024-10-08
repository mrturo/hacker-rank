import * as express from 'express';
import { Controller as ControllerInterface } from './controller.interface';
import { Logger as LoggerUtil } from '../../domain/util/logger.util';
import { Random as RandomUtil } from '../../domain/util/random.util';
import { MagicSquareForming as MagicSquareFormingService } from '../service/magicSquareForming.service';
import { Application as ApplicationError } from '../error/application.error';
export class MagicSquareForming implements ControllerInterface {
  private _path!: string;
  private _router!: express.Router;
  constructor() {
    this.path = '/magic-square-forming';
    this.initializeRoutes();
  }
  public getMain(
    request: express.Request,
    response: express.Response
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): express.Response<any, Record<string, any>> {
    const exePreLog = `magic-square-forming-${RandomUtil.get()}`;
    let sInput: string = '';
    try {
      const input = request.body;
      sInput = JSON.stringify(input);
      if (input.s === undefined) {
        throw new ApplicationError('Must to indicate a matrix');
      } else if (Array.isArray(input.s) === false) {
        throw new ApplicationError("'s' has to be a matrix");
      } else {
        for (const row of input.s) {
          if (Array.isArray(row) === false) {
            throw new ApplicationError("'s' has to be a matrix");
          }
          if (input.s.length !== row.length) {
            throw new ApplicationError("'s' has to be a square matrix");
          }
          for (const item of row) {
            if (
              item === undefined ||
              typeof item !== 'number' ||
              item < 1 ||
              item > row.length * row.length
            ) {
              throw new ApplicationError(
                `Matrix elements have to be numbers in the inclusive range [${1},${row.length * row.length}]`
              );
            }
          }
        }
      }
      const result = { cost: MagicSquareFormingService.exe(input.s) };
      LoggerUtil.info([exePreLog, sInput, JSON.stringify(result)]);
      response.status(200);
      response.send(result);
    } catch (error) {
      let errorMsg = 'Internal Server Error';
      if (error && error instanceof Error && error.message.trim().length > 0) {
        errorMsg = error.message.trim();
      }
      LoggerUtil.error([exePreLog, sInput, errorMsg]);
      response.status(500);
      response.send({
        message: errorMsg
      });
    }
    return response;
  }
  public get path(): string {
    return this._path;
  }
  public set path(value: string) {
    this._path = value;
  }
  public get router(): express.Router {
    return this._router;
  }
  public set router(value: express.Router) {
    this._router = value;
  }
  public initializeRoutes(): void {
    this.router = express.Router();
    this.router.get('/', this.getMain);
  }
}
