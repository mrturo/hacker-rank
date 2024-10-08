import * as express from 'express';
import { Controller as ControllerInterface } from './controller.interface';
import { Logger as LoggerUtil } from '../../domain/util/logger.util';
import { Random as RandomUtil } from '../../domain/util/random.util';
import { Application as ApplicationError } from '../error/application.error';
import { SimpleArraySum as SimpleArraySumService } from '../service/simpleArraySum.service';
export class SimpleArraySum implements ControllerInterface {
  private _path!: string;
  private _router!: express.Router;
  constructor() {
    this.path = '/simple-array-sum';
    this.initializeRoutes();
  }
  public getMain(
    request: express.Request,
    response: express.Response
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): express.Response<any, Record<string, any>> {
    const exePreLog = `simple-array-sum-${RandomUtil.get()}`;
    let sInput: string = '';
    let result: number | undefined = undefined;
    try {
      const input = request.body;
      sInput = JSON.stringify(input);
      if (
        input &&
        Array.isArray(input) === true &&
        input.length > 0 &&
        input.filter((a) => typeof a === 'number').length === input.length
      ) {
        result = SimpleArraySumService.exe(input);
      } else {
        throw new ApplicationError('Input must be a numbers array not empty');
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
