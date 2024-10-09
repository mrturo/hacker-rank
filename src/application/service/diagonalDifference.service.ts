export class DiagonalDifference {
  public static exe(arr: number[][]): number {
    let sumPrimaryDiagonal: number = 0;
    let sumSecondaryDiagonal: number = 0;
    for (let i = 0; i < arr.length; i++) {
      sumPrimaryDiagonal = sumPrimaryDiagonal + arr[i][i];
      sumSecondaryDiagonal += sumSecondaryDiagonal + arr[arr.length - 1 - i][i];
    }
    return Math.abs(sumPrimaryDiagonal - sumSecondaryDiagonal);
  }
}
