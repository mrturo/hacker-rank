import { DiagonalDifference as DiagonalDifferenceService } from '../../../src/application/service/diagonalDifference.service';
describe('Class DiagonalDifference Service', () => {
  it('Happy Path 1', async () => {
    const diagonalDifference = DiagonalDifferenceService.exe([[0]]);
    expect(diagonalDifference).toBe(0);
  });
});
