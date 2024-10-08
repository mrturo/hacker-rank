import express from 'express';
import { MagicSquareForming as MagicSquareFormingController } from '../../../src/application/controller/magicSquareForming.controller';
describe('Class MagicSquareForming Controller', () => {
  it('Happy Path', async () => {
    const mReq = {
      body: {
        s: [[1]]
      }
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: MagicSquareFormingController =
      new MagicSquareFormingController();
    base.getMain(mReq, mRes);
    expect(base.path).toBe('/magic-square-forming');
  });
  it('Error 1', async () => {
    const mReq = {
      body: {}
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: MagicSquareFormingController =
      new MagicSquareFormingController();
    base.getMain(mReq, mRes);
  });
  it('Error 2', async () => {
    const mReq = {
      body: {
        s: undefined
      }
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: MagicSquareFormingController =
      new MagicSquareFormingController();
    base.getMain(mReq, mRes);
  });
  it('Error 3', async () => {
    const mReq = {
      body: {
        s: 1
      }
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: MagicSquareFormingController =
      new MagicSquareFormingController();
    base.getMain(mReq, mRes);
  });
  it('Error 4', async () => {
    const mReq = {
      body: {
        s: [1]
      }
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: MagicSquareFormingController =
      new MagicSquareFormingController();
    base.getMain(mReq, mRes);
  });
  it('Error 5', async () => {
    const mReq = {
      body: {
        s: [[1, 2]]
      }
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: MagicSquareFormingController =
      new MagicSquareFormingController();
    base.getMain(mReq, mRes);
  });
  it('Error 6', async () => {
    const mReq = {
      body: {
        s: [['A']]
      }
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: MagicSquareFormingController =
      new MagicSquareFormingController();
    base.getMain(mReq, mRes);
  });
  it('Error 7', async () => {
    const mReq = {
      body: {
        s: [[0]]
      }
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: MagicSquareFormingController =
      new MagicSquareFormingController();
    base.getMain(mReq, mRes);
  });
  it('Error 8', async () => {
    const mReq = {
      body: {
        s: [[2]]
      }
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: MagicSquareFormingController =
      new MagicSquareFormingController();
    base.getMain(mReq, mRes);
  });
});
