import * as express from 'express';
import { Controller as ControllerInterface } from './controller.interface';
import { Logger as LoggerUtil } from '../../domain/util/logger.util';
import { Random as RandomUtil } from '../../domain/util/random.util';
import { Application as ApplicationError } from '../error/application.error';
import { CompareTheTriplets as CompareTheTripletsService } from '../service/compareTheTriplets.service';
export class CompareTheTriplets implements ControllerInterface {
  private _path!: string;
  private _router!: express.Router;
  constructor() {
    this.path = '/compare-the-triplets';
    this.initializeRoutes();
  }
  public getMain(
    request: express.Request,
    response: express.Response
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): express.Response<unknown, Record<string, any>> {
    const exePreLog = `compare-the-triplets-${RandomUtil.get()}`;
    let sInput: string = '';
    let result: number[] | undefined = undefined;
    try {
      const input = request.body;
      if (!input) {
        throw new ApplicationError('The entry must not be empty');
      } else {
        const aScore = input.a;
        const bScore = input.b;
        sInput = JSON.stringify(input);
        if (
          input &&
          aScore &&
          bScore &&
          aScore.length > 0 &&
          aScore.length === bScore.length
        ) {
          result = CompareTheTripletsService.exe(aScore, bScore);
        } else if (
          (!aScore || aScore.length <= 0) &&
          (!bScore || bScore.length <= 0)
        ) {
          throw new ApplicationError('The A and B score must not be empty');
        } else if (!aScore || aScore.length <= 0) {
          throw new ApplicationError('The A score must not be empty');
        } else if (!bScore || bScore.length <= 0) {
          throw new ApplicationError('The B score must not be empty');
        } else if (aScore.length !== bScore.length) {
          throw new ApplicationError('The A and B score length must be same');
        }
      }
      LoggerUtil.info([exePreLog, sInput, JSON.stringify(result)]);
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
