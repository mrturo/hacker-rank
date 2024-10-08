export class PositionsByCardinalPoints {
  private _n: number = 0;
  private _s: number = 0;
  private _e: number = 0;
  private _w: number = 0;
  constructor(
    n: number | undefined = undefined,
    s: number | undefined = undefined,
    e: number | undefined = undefined,
    w: number | undefined = undefined
  ) {
    this.n = n;
    this.s = s;
    this.e = e;
    this.w = w;
  }
  public get n(): number {
    return this._n;
  }
  public set n(value: number | undefined) {
    this._n = value ? value : 0;
  }
  public get s(): number {
    return this._s;
  }
  public set s(value: number | undefined) {
    this._s = value ? value : 0;
  }
  public get e(): number {
    return this._e;
  }
  public set e(value: number | undefined) {
    this._e = value ? value : 0;
  }
  public get w(): number {
    return this._w;
  }
  public set w(value: number | undefined) {
    this._w = value ? value : 0;
  }
  public get ne(): number {
    if (this.n === 0 || this.e === 0) return 0;
    else return Math.min(this.n, this.e);
  }
  public get nw(): number {
    if (this.n === 0 || this.w === 0) return 0;
    else return Math.min(this.n, this.w);
  }
  public get se(): number {
    if (this.s === 0 || this.e === 0) return 0;
    else return Math.min(this.s, this.e);
  }
  public get sw(): number {
    if (this.s === 0 || this.w === 0) return 0;
    else return Math.min(this.s, this.w);
  }
  public getJson(): {
    n: number;
    s: number;
    e: number;
    w: number;
    ne: number;
    nw: number;
    se: number;
    sw: number;
  } {
    return {
      n: this.n,
      s: this.s,
      e: this.e,
      w: this.w,
      ne: this.ne,
      nw: this.nw,
      se: this.se,
      sw: this.sw
    };
  }
}
