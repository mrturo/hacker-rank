import { PlusMinus as PlusMinusModel } from '../../domain/model/plusMinus.model';
export class PlusMinus {
  public static exe(arr: number[] | undefined = undefined): PlusMinusModel {
    let positives: number | undefined = undefined;
    let negatives: number | undefined = undefined;
    let zeros: number | undefined = undefined;
    if (arr) {
      positives = arr.filter((a: number) => a > 0).length;
      negatives = arr.filter((a: number) => a < 0).length;
      zeros = arr.filter((a: number) => a === 0).length;
    }
    return new PlusMinusModel(positives, negatives, zeros);
  }
}
