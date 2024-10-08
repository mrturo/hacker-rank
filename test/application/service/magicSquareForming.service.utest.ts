import { MagicSquareForming as MagicSquareFormingService } from '../../../src/application/service/magicSquareForming.service';
describe('Class PlusMinus Service', () => {
  it('Happy Path 1', async () => {
    const result = MagicSquareFormingService.exe([
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 5]
    ]);
    expect(result).toBe(1);
  });
});
