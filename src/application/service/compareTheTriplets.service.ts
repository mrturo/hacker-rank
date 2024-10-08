export class CompareTheTriplets {
  public static exe(a: number[] = [], b: number[] = []): number[] {
    let resultA: number = 0;
    let resultB: number = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] > b[i]) {
        resultA++;
      } else if (a[i] < b[i]) {
        resultB++;
      }
    }
    return [resultA, resultB];
  }
}
