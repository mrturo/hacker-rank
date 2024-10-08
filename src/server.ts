import App from './application/app';
import { Base as BaseController } from './application/controller/base.controller';
import { PlusMinus as PlusMinusController } from './application/controller/plusMinus.controller';
export class Server {
  public static init(): App {
    return new App([
      new BaseController(),
      new PlusMinusController()
    ]);
  }
}
Server.init().listen();
