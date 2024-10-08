import { SimpleArraySum as SimpleArraySumService } from '../../../src/application/service/simpleArraySum.service';
describe('Class SimpleArraySum Service', () => {
  it('Happy Path 1', async () => {
    expect(SimpleArraySumService.exe()).toBe(0);
  });
  it('Happy Path 2', async () => {
    expect(SimpleArraySumService.exe([])).toBe(0);
  });
  it('Happy Path 3', async () => {
    expect(SimpleArraySumService.exe([0])).toBe(0);
  });
  it('Happy Path 4', async () => {
    expect(SimpleArraySumService.exe([0, 0])).toBe(0);
  });
  it('Happy Path 5', async () => {
    expect(SimpleArraySumService.exe([1, 0])).toBe(1);
  });
  it('Happy Path 6', async () => {
    expect(SimpleArraySumService.exe([1])).toBe(1);
  });
  it('Happy Path 7', async () => {
    expect(SimpleArraySumService.exe([1, 1])).toBe(2);
  });
  it('Happy Path 8', async () => {
    expect(SimpleArraySumService.exe([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe(45);
  });
});
