import { PositionsByCardinalPoints as PositionsByCardinalPointsModel } from '../../domain/model/positionsByCardinalPoints.model';
export class QueensAttack2 {
  public static exe(
    n: number = 0,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    k: number = 0,
    r_q: number = 0,
    c_q: number = 0,
    obstacles: number[][] = []
  ): number {
    if (n <= 1) return 0;
    const points = new PositionsByCardinalPointsModel(
      n - c_q,
      c_q - 1,
      n - r_q,
      r_q - 1
    ).getJson();
    for (const [obsRow, obsCol] of obstacles) {
      const obsX = obsRow - r_q;
      const obsY = obsCol - c_q;
      if (obsX === 0 && obsY > 0) {
        points.n = Math.min(points.n, obsY - 1); // N
      } else if (obsX === 0 && obsY < 0) {
        points.s = Math.min(points.s, -obsY - 1); // S
      } else if (obsX > 0 && obsY === 0) {
        points.e = Math.min(points.e, obsX - 1); // E
      } else if (obsX < 0 && obsY === 0) {
        points.w = Math.min(points.w, -obsX - 1); // W
      } else if (obsX > 0 && obsY > 0 && obsX === obsY) {
        points.ne = Math.min(points.ne, obsX - 1); // NE
      } else if (obsX < 0 && obsY > 0 && obsX === -obsY) {
        points.nw = Math.min(points.nw, -obsX - 1); //NW
      } else if (obsX > 0 && obsY < 0 && obsX === -obsY) {
        points.se = Math.min(points.se, obsX - 1); // SE
      } else if (obsX < 0 && obsY < 0 && obsX === obsY) {
        points.sw = Math.min(points.sw, -obsX - 1); // SW
      }
    }
    return (
      points.n +
      points.s +
      points.e +
      points.w +
      points.ne +
      points.nw +
      points.se +
      points.sw
    );
  }
}
