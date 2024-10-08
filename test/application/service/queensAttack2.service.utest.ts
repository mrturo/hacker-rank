import { QueensAttack2 as QueensAttack2Service } from '../../../src/application/service/queensAttack2.service';
describe('Class QueensAttack2 Service', () => {
  it('Happy Path - OK 1', async () => {
    let errorMsg = '';
    let result: number | undefined;
    try {
      result = QueensAttack2Service.exe();
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(result).toBe(0);
    expect(errorMsg).toBe('');
  });
  it('Happy Path - OK 2', async () => {
    let errorMsg = '';
    let result: number | undefined;
    try {
      result = QueensAttack2Service.exe(1, 0, 1, 1);
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(result).toBe(0);
    expect(errorMsg).toBe('');
  });
  it('Happy Path - OK 3', async () => {
    let errorMsg = '';
    let result: number | undefined;
    try {
      result = QueensAttack2Service.exe(2, 0, 1, 1);
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(result).toBe(3);
    expect(errorMsg).toBe('');
  });
  // 1, 1
  it('Happy Path - OK 4', async () => {
    let errorMsg = '';
    let result: number | undefined;
    try {
      result = QueensAttack2Service.exe(2, 1, 1, 1, [[2, 2]]);
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(result).toBe(2);
    expect(errorMsg).toBe('');
  });
  it('Happy Path - OK 5', async () => {
    let errorMsg = '';
    let result: number | undefined;
    try {
      result = QueensAttack2Service.exe(2, 1, 1, 1, [[1, 2]]);
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(result).toBe(2);
    expect(errorMsg).toBe('');
  });
  it('Happy Path - OK 6', async () => {
    let errorMsg = '';
    let result: number | undefined;
    try {
      result = QueensAttack2Service.exe(2, 1, 1, 1, [[2, 1]]);
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(result).toBe(2);
    expect(errorMsg).toBe('');
  });
  // 1, 2
  it('Happy Path - OK 7', async () => {
    let errorMsg = '';
    let result: number | undefined;
    try {
      result = QueensAttack2Service.exe(2, 1, 1, 2, [[2, 2]]);
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(result).toBe(2);
    expect(errorMsg).toBe('');
  });
  it('Happy Path - OK 8', async () => {
    let errorMsg = '';
    let result: number | undefined;
    try {
      result = QueensAttack2Service.exe(2, 1, 1, 2, [[2, 1]]);
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(result).toBe(2);
    expect(errorMsg).toBe('');
  });
  it('Happy Path - OK 9', async () => {
    let errorMsg = '';
    let result: number | undefined;
    try {
      result = QueensAttack2Service.exe(2, 1, 1, 2, [[1, 1]]);
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(result).toBe(2);
    expect(errorMsg).toBe('');
  });
  // 2, 1
  it('Happy Path - OK 10', async () => {
    let errorMsg = '';
    let result: number | undefined;
    try {
      result = QueensAttack2Service.exe(2, 1, 2, 1, [[2, 2]]);
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(result).toBe(2);
    expect(errorMsg).toBe('');
  });
  it('Happy Path - OK 11', async () => {
    let errorMsg = '';
    let result: number | undefined;
    try {
      result = QueensAttack2Service.exe(2, 1, 2, 1, [[1, 2]]);
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(result).toBe(2);
    expect(errorMsg).toBe('');
  });
  it('Happy Path - OK 12', async () => {
    let errorMsg = '';
    let result: number | undefined;
    try {
      result = QueensAttack2Service.exe(2, 1, 2, 1, [[1, 1]]);
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(result).toBe(2);
    expect(errorMsg).toBe('');
  });
  // 2, 2
  it('Happy Path - OK 13', async () => {
    let errorMsg = '';
    let result: number | undefined;
    try {
      result = QueensAttack2Service.exe(2, 1, 2, 2, [[1, 1]]);
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(result).toBe(2);
    expect(errorMsg).toBe('');
  });
  it('Happy Path - OK 14', async () => {
    let errorMsg = '';
    let result: number | undefined;
    try {
      result = QueensAttack2Service.exe(2, 1, 2, 2, [[1, 2]]);
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(result).toBe(2);
    expect(errorMsg).toBe('');
  });
  it('Happy Path - OK 15', async () => {
    let errorMsg = '';
    let result: number | undefined;
    try {
      result = QueensAttack2Service.exe(2, 1, 2, 2, [[2, 1]]);
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(result).toBe(2);
    expect(errorMsg).toBe('');
  });
  ///
  it('Happy Path - OK 16', async () => {
    let errorMsg = '';
    let result: number | undefined;
    try {
      result = QueensAttack2Service.exe(2, 2, 2, 2, [
        [1, 1],
        [1, 2]
      ]);
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(result).toBe(1);
    expect(errorMsg).toBe('');
  });
  it('Happy Path - OK 17', async () => {
    let errorMsg = '';
    let result: number | undefined;
    try {
      result = QueensAttack2Service.exe(2, 2, 2, 2, [
        [2, 1],
        [1, 2]
      ]);
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(result).toBe(1);
    expect(errorMsg).toBe('');
  });
  it('Happy Path - OK 18', async () => {
    let errorMsg = '';
    let result: number | undefined;
    try {
      result = QueensAttack2Service.exe(2, 2, 2, 2, [
        [1, 1],
        [2, 1]
      ]);
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(result).toBe(1);
    expect(errorMsg).toBe('');
  });
  it('Happy Path - OK 19', async () => {
    let errorMsg = '';
    let result: number | undefined;
    try {
      result = QueensAttack2Service.exe(2, 3, 2, 2, [
        [1, 1],
        [1, 2],
        [2, 1]
      ]);
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(errorMsg).toBe('');
    expect(result).toBe(0);
  });
});
