export class SimpleArraySum {
  public static exe(arr: number[] | undefined = undefined): number {
    return arr ? arr.reduce((partialSum, a) => partialSum + a, 0) : 0;
  }
}
