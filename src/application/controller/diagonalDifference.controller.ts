import * as express from 'express';
import { Controller as ControllerInterface } from './controller.interface';
import { Logger as LoggerUtil } from '../../domain/util/logger.util';
import { Random as RandomUtil } from '../../domain/util/random.util';
import { Application as ApplicationError } from '../error/application.error';
import { DiagonalDifference as DiagonalDifferenceService } from '../service/diagonalDifference.service';
export class DiagonalDifference implements ControllerInterface {
  private _path!: string;
  private _router!: express.Router;
  constructor() {
    this.path = '/diagonal-difference';
    this.initializeRoutes();
  }
  public getMain(
    request: express.Request,
    response: express.Response
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): express.Response<unknown, Record<string, any>> {
    const exePreLog = `diagonal-difference-${RandomUtil.get()}`;
    let sInput: string = '';
    let result: number;
    try {
      const arr = request.body;
      if (arr === undefined) {
        throw new ApplicationError('Entry must not be empty');
      } else {
        sInput = JSON.stringify(arr);
        if (
          Array.isArray(arr) === false ||
          arr.filter((a) => Array.isArray(a) !== true).length > 0
        ) {
          throw new ApplicationError('Entry must be an matrix');
        } else if (arr.length <= 0) {
          throw new ApplicationError('Entry must not be an empty matrix');
        } else if (
          arr.filter((a) => a.length === arr.length).length !== arr.length
        ) {
          throw new ApplicationError('Entry must be a square matrix');
        } else {
          for (const row of arr) {
            for (const e of row) {
              if (typeof e !== 'number') {
                throw new ApplicationError(
                  'Entry must be a square matrix of numbers'
                );
              } else if (Math.abs(e) > 100) {
                throw new ApplicationError(
                  'Entry must be a square matrix of numbers: -100 <= arr[i][j] <= 100'
                );
              }
            }
          }
          result = DiagonalDifferenceService.exe(arr);
          LoggerUtil.info([exePreLog, sInput, JSON.stringify(result)]);
        }
      }
      response.status(200);
      response.send({
        result: result
      });
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
