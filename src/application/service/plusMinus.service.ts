import { PlusMinus as PlusMinusModel } from '../../domain/model/plusMinus.model';
export class PlusMinus {
  public static exe(arr: number[] = []): PlusMinusModel {
    const positives = arr.filter((a: number) => a > 0).length;
    const negatives = arr.filter((a: number) => a < 0).length;
    const zeros = arr.filter((a: number) => a === 0).length;
    return new PlusMinusModel(positives, negatives, zeros);
  }
}
