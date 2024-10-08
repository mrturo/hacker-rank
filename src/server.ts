import App from './application/app';
import { Base as BaseController } from './application/controller/base.controller';
import { PlusMinus as PlusMinusController } from './application/controller/plusMinus.controller';
import { SimpleArraySum as SimpleArraySumController } from './application/controller/simpleArraySum.controller';
import { CompareTheTriplets as CompareTheTripletsController } from './application/controller/compareTheTriplets.controller';
import { QueensAttack2 as QueensAttack2Controller } from './application/controller/queensAttack2.controller';
export class Server {
  public static init(): App {
    return new App([
      new BaseController(),
      new PlusMinusController(),
      new SimpleArraySumController(),
      new CompareTheTripletsController(),
      new QueensAttack2Controller()
    ]);
  }
}
Server.init().listen();
