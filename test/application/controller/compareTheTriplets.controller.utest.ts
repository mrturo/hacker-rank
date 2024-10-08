import express from 'express';
import { CompareTheTriplets as CompareTheTripletsController } from '../../../src/application/controller/compareTheTriplets.controller';
describe('Class CompareTheTriplets Controller', () => {
  it('Happy Path 1', async () => {
    const mReq = {
      body: {}
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: CompareTheTripletsController =
      new CompareTheTripletsController();
    base.getMain(mReq, mRes);
    expect(base.path).toBe('/compare-the-triplets');
  });
  it('Happy Path 2', async () => {
    const mReq = {
      body: {
        a: [1, 1, 0],
        b: [0, 1, 1]
      }
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: CompareTheTripletsController =
      new CompareTheTripletsController();
    base.getMain(mReq, mRes);
  });
  it('Happy Path 3', async () => {
    const mReq = {} as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: CompareTheTripletsController =
      new CompareTheTripletsController();
    base.getMain(mReq, mRes);
  });
  it('Happy Path 4', async () => {
    const mReq = {
      body: {
        a: [1, 1, 0]
      }
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: CompareTheTripletsController =
      new CompareTheTripletsController();
    base.getMain(mReq, mRes);
  });
  it('Happy Path 5', async () => {
    const mReq = {
      body: {
        b: [0, 1, 1]
      }
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: CompareTheTripletsController =
      new CompareTheTripletsController();
    base.getMain(mReq, mRes);
  });
  it('Happy Path 6', async () => {
    const mReq = {
      body: {
        a: [1, 1, 0, 2],
        b: [0, 1, 1]
      }
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: CompareTheTripletsController =
      new CompareTheTripletsController();
    base.getMain(mReq, mRes);
  });
});
