import path from 'path';
import swaggerUi from 'swagger-ui-express';
import yaml from 'yamljs';
export class Swagger {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _apiSpecData!: any;
  private _ymlFile!: string;
  private _urlPath = '/api-docs';
  constructor() {
    this.ymlFile = 'API-SPEC.yml';
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public get serve(): any {
    return swaggerUi.serve;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public get setup(): any {
    return swaggerUi.setup(this._apiSpecData);
  }
  public get urlPath(): string {
    return this._urlPath;
  }
  private set ymlFile(value: string) {
    this._ymlFile = path
      .join(__dirname, value)
      .replace('dist\\', '')
      .replace('dist/', '');
    this._apiSpecData = yaml.load(this._ymlFile);
  }
}
