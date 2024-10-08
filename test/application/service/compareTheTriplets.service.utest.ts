import { CompareTheTriplets as CompareTheTripletsService } from '../../../src/application/service/compareTheTriplets.service';
describe('Class CompareTheTriplets Service', () => {
  it('Happy Path 1', async () => {
    expect(CompareTheTripletsService.exe()).toEqual([0, 0]);
  });
  it('Happy Path 2', async () => {
    expect(CompareTheTripletsService.exe([])).toEqual([0, 0]);
  });
  it('Happy Path 3', async () => {
    expect(CompareTheTripletsService.exe([], [])).toEqual([0, 0]);
  });
  it('Happy Path 4', async () => {
    expect(CompareTheTripletsService.exe([0, 1, 1], [1, 1, 0])).toEqual([1, 1]);
  });
});
