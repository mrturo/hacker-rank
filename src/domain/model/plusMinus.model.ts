export class PlusMinus {
  private _positives: number | undefined;
  private _negatives: number | undefined;
  private _zeros: number | undefined;
  constructor(
    positives: number | undefined = undefined,
    negatives: number | undefined = undefined,
    zeros: number | undefined = undefined
  ) {
    this.positives = positives;
    this.negatives = negatives;
    this.zeros = zeros;
  }
  public get positives(): number {
    return this._positives || 0;
  }
  public set positives(value: number | undefined) {
    this._positives = value;
  }
  public get negatives(): number {
    return this._negatives || 0;
  }
  public set negatives(value: number | undefined) {
    this._negatives = value;
  }
  public get zeros(): number {
    return this._zeros || 0;
  }
  public set zeros(value: number | undefined) {
    this._zeros = value;
  }
  public get total(): number {
    return this.positives + this.negatives + this.zeros;
  }
  public getJson(): {
    positives: number;
    negatives: number;
    zeros: number;
  } {
    return {
      positives: this.positives,
      negatives: this.negatives,
      zeros: this.zeros
    };
  }
  public getString(): string {
    return JSON.stringify(this.getJson());
  }
  public getResult(): PlusMinus {
    return new PlusMinus(
      this.total === 0 ? 0 : this.positives / this.total,
      this.total === 0 ? 0 : this.negatives / this.total,
      this.total === 0 ? 0 : this.zeros / this.total
    );
  }
}
