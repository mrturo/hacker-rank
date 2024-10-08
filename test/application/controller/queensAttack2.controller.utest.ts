import express from 'express';
import { QueensAttack2 as QueensAttack2Controller } from '../../../src/application/controller/queensAttack2.controller';
describe('Class QueensAttack2 Controller', () => {
  it('Happy Path 1', async () => {
    const mReq = {
      body: {}
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: QueensAttack2Controller = new QueensAttack2Controller();
    base.getMain(mReq, mRes);
    expect(base.path).toBe('/queens-attack-2');
  });
  it('Happy Path 2', async () => {
    const mReq = {
      body: {
        n: 0
      }
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: QueensAttack2Controller = new QueensAttack2Controller();
    base.getMain(mReq, mRes);
  });
  it('Happy Path 3', async () => {
    const mReq = {
      body: {
        n: -1
      }
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: QueensAttack2Controller = new QueensAttack2Controller();
    base.getMain(mReq, mRes);
  });
  it('Happy Path 4', async () => {
    const mReq = {
      body: {
        n: 1
      }
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: QueensAttack2Controller = new QueensAttack2Controller();
    base.getMain(mReq, mRes);
  });
  it('Happy Path 5', async () => {
    const mReq = {
      body: {
        n: 1,
        k: -1
      }
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: QueensAttack2Controller = new QueensAttack2Controller();
    base.getMain(mReq, mRes);
  });
  it('Happy Path 6', async () => {
    const mReq = {
      body: {
        n: 1,
        k: 1
      }
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: QueensAttack2Controller = new QueensAttack2Controller();
    base.getMain(mReq, mRes);
  });
  it('Happy Path 7', async () => {
    const mReq = {
      body: {
        n: 1,
        k: 1,
        obstacles: []
      }
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: QueensAttack2Controller = new QueensAttack2Controller();
    base.getMain(mReq, mRes);
  });
  it('Happy Path 8', async () => {
    const mReq = {
      body: {
        n: 1,
        k: 0
      }
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: QueensAttack2Controller = new QueensAttack2Controller();
    base.getMain(mReq, mRes);
  });
  it('Happy Path 9', async () => {
    const mReq = {
      body: {
        n: 1,
        k: 0,
        r_q: 1
      }
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: QueensAttack2Controller = new QueensAttack2Controller();
    base.getMain(mReq, mRes);
  });
  it('Happy Path 10', async () => {
    const mReq = {
      body: {
        n: 1,
        k: 0,
        r_q: 1,
        c_q: 1
      }
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: QueensAttack2Controller = new QueensAttack2Controller();
    base.getMain(mReq, mRes);
  });
  it('Happy Path 11', async () => {
    const mReq = {
      body: {
        n: 2,
        k: 1,
        r_q: 1,
        c_q: 1,
        obstacles: [[0, 1]]
      }
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: QueensAttack2Controller = new QueensAttack2Controller();
    base.getMain(mReq, mRes);
  });
  it('Happy Path 12', async () => {
    const mReq = {
      body: {
        n: 2,
        k: 1,
        r_q: 1,
        c_q: 1,
        obstacles: [[1, 0]]
      }
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: QueensAttack2Controller = new QueensAttack2Controller();
    base.getMain(mReq, mRes);
  });
  it('Happy Path 13', async () => {
    const mReq = {
      body: {
        n: 2,
        k: 1,
        r_q: 1,
        c_q: 1,
        obstacles: [[5, 1]]
      }
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: QueensAttack2Controller = new QueensAttack2Controller();
    base.getMain(mReq, mRes);
  });
  it('Happy Path 14', async () => {
    const mReq = {
      body: {
        n: 2,
        k: 1,
        r_q: 1,
        c_q: 1,
        obstacles: [[1, 5]]
      }
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: QueensAttack2Controller = new QueensAttack2Controller();
    base.getMain(mReq, mRes);
  });
  it('Happy Path 15', async () => {
    const mReq = {
      body: {
        n: 2,
        k: 2,
        r_q: 1,
        c_q: 1,
        obstacles: [
          [1, 5],
          [5, 1]
        ]
      }
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: QueensAttack2Controller = new QueensAttack2Controller();
    base.getMain(mReq, mRes);
  });
  /* it('Happy Path 6', async () => {
    const mReq = {
      body: {
        n: 1,
        k: 1
      }
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: QueensAttack2Controller = new QueensAttack2Controller();
    base.getMain(mReq, mRes);
  });
  it('Happy Path 7', async () => {
    const mReq = {
      body: {
        n: 1,
        k: 1,
        obstacles: []
      }
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: QueensAttack2Controller = new QueensAttack2Controller();
    base.getMain(mReq, mRes);
  });
  it('Happy Path 8', async () => {
    const mReq = {
      body: {
        n: 1,
        k: 0,
        obstacles: []
      }
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: QueensAttack2Controller = new QueensAttack2Controller();
    base.getMain(mReq, mRes);
  });
  it('Happy Path 9', async () => {
    const mReq = {
      body: {
        n: 1,
        k: 0,
        r_q: 0,
        c_q: 0,
        obstacles: []
      }
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: QueensAttack2Controller = new QueensAttack2Controller();
    base.getMain(mReq, mRes);
  });
  it('Happy Path 10', async () => {
    const mReq = {
      body: {
        n: 1,
        k: 0,
        r_q: 2,
        c_q: 2,
        obstacles: []
      }
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: QueensAttack2Controller = new QueensAttack2Controller();
    base.getMain(mReq, mRes);
  }); */
});
