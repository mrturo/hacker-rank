import { PlusMinus as PlusMinusService } from '../../../src/application/service/plusMinus.service';
describe('Class PlusMinus Service', () => {
  it('Happy Path 1', async () => {
    const plusMinus = PlusMinusService.exe();
    expect(plusMinus.getResult().getJson()).toEqual({
      negatives: 0,
      positives: 0,
      zeros: 0
    });
  });
  it('Happy Path 2', async () => {
    const plusMinus = PlusMinusService.exe([]);
    expect(plusMinus.getResult().getJson()).toEqual({
      negatives: 0,
      positives: 0,
      zeros: 0
    });
  });
  it('Happy Path 3', async () => {
    const plusMinus = PlusMinusService.exe([-1, 0, 1]);
    expect(plusMinus.getResult().getJson()).toEqual({
      negatives: 1 / 3,
      positives: 1 / 3,
      zeros: 1 / 3
    });
  });
  it('Happy Path 4', async () => {
    const plusMinus = PlusMinusService.exe([-1, 0]);
    expect(plusMinus.getResult().getJson()).toEqual({
      negatives: 1 / 2,
      positives: 0,
      zeros: 1 / 2
    });
  });
  it('Happy Path 5', async () => {
    const plusMinus = PlusMinusService.exe([-1, 1]);
    expect(plusMinus.getResult().getJson()).toEqual({
      negatives: 1 / 2,
      positives: 1 / 2,
      zeros: 0
    });
  });
  it('Happy Path 6', async () => {
    const plusMinus = PlusMinusService.exe([0, 1]);
    expect(plusMinus.getResult().getJson()).toEqual({
      negatives: 0,
      positives: 1 / 2,
      zeros: 1 / 2
    });
  });
  it('Happy Path 7', async () => {
    const plusMinus = PlusMinusService.exe([-1]);
    expect(plusMinus.getResult().getJson()).toEqual({
      negatives: 1,
      positives: 0,
      zeros: 0
    });
  });
  it('Happy Path 8', async () => {
    const plusMinus = PlusMinusService.exe([1]);
    expect(plusMinus.getResult().getJson()).toEqual({
      negatives: 0,
      positives: 1,
      zeros: 0
    });
  });
  it('Happy Path 9', async () => {
    const plusMinus = PlusMinusService.exe([0]);
    expect(plusMinus.getResult().getJson()).toEqual({
      negatives: 0,
      positives: 0,
      zeros: 1
    });
  });
});
