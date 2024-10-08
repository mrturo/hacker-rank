import * as express from 'express';
import { Controller as ControllerInterface } from './controller.interface';
import { Logger as LoggerUtil } from '../../domain/util/logger.util';
import { Random as RandomUtil } from '../../domain/util/random.util';
import { QueensAttack2 as QueensAttack2Service } from '../service/queensAttack2.service';
import { Application as ApplicationError } from '../error/application.error';
export class QueensAttack2 implements ControllerInterface {
  private _path!: string;
  private _router!: express.Router;
  constructor() {
    this.path = '/queens-attack-2';
    this.initializeRoutes();
  }
  public getMain(
    request: express.Request,
    response: express.Response
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): express.Response<any, Record<string, any>> {
    const exePreLog = `queens-attack-2-${RandomUtil.get()}`;
    let sInput: string = '';
    let result: number | undefined = undefined;
    try {
      const input = request.body;
      sInput = JSON.stringify(input);
      if (
        typeof input.n !== 'number' ||
        input.n === undefined ||
        input.n <= 0
      ) {
        throw new ApplicationError(
          'Size board has to be a number greater than zero'
        );
      } else if (
        typeof input.k !== 'number' ||
        input.k === undefined ||
        input.k < 0
      ) {
        throw new ApplicationError(
          'Obstacles number has to be greater or equal than zero'
        );
      } else if (
        (input.k > 0 && input.obstacles === undefined) ||
        (input.obstacles !== undefined && input.k !== input.obstacles.length)
      ) {
        throw new ApplicationError(
          'Obstacles number has to be equal to obstacles array length'
        );
      } else if (
        input.r_q === undefined ||
        input.c_q === undefined ||
        input.r_q < 1 ||
        input.r_q > input.n ||
        input.c_q < 1 ||
        input.c_q > input.n
      ) {
        throw new ApplicationError(
          'Queen position has to be valid: 1 <= r_q, c_q <= n (size board)'
        );
      }
      if (input.obstacles && input.obstacles.length > 0) {
        const invalidObstacles: number[][] = input.obstacles.filter(
          (obs: number[]) =>
            obs.length !== 2 ||
            obs[0] < 1 ||
            obs[0] > input.n ||
            obs[1] < 1 ||
            obs[1] > input.n
        );
        if (invalidObstacles.length === 1) {
          throw new ApplicationError(
            `An obstacle position is invalid:  1 <= x, y <= n`
          );
        } else if (invalidObstacles.length > 1) {
          throw new ApplicationError(
            `${invalidObstacles.length} obstacle positions are invalid:  1 <= x, y <= n`
          );
        }
      }
      result = QueensAttack2Service.exe(
        input.n,
        input.k,
        input.r_q,
        input.c_q,
        input.obstacles
      );
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
