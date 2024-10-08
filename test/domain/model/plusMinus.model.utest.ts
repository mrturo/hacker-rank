import { PlusMinus as PlusMinusModel } from '../../../src/domain/model/plusMinus.model';
describe('Class PlusMinus Model', () => {
  it('Happy Path 1', async () => {
    const plusMinus: PlusMinusModel = new PlusMinusModel();
    expect(plusMinus.getJson()).toEqual({
      positives: 0,
      negatives: 0,
      zeros: 0
    });
    expect(plusMinus.getString()).toEqual(
      JSON.stringify({
        positives: 0,
        negatives: 0,
        zeros: 0
      })
    );
    expect(plusMinus.getResult().getJson()).toEqual({
      positives: 0,
      negatives: 0,
      zeros: 0
    });
  });
  it('Happy Path 2', async () => {
    const plusMinus: PlusMinusModel = new PlusMinusModel(1, 2, 3);
    expect(plusMinus.getJson()).toEqual({
      positives: 1,
      negatives: 2,
      zeros: 3
    });
    expect(plusMinus.getString()).toEqual(
      JSON.stringify({
        positives: 1,
        negatives: 2,
        zeros: 3
      })
    );
    expect(plusMinus.getResult().getJson()).toEqual({
      positives: 1 / 6,
      negatives: 2 / 6,
      zeros: 3 / 6
    });
  });
});
