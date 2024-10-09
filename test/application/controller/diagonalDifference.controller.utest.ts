import express from 'express';
import { DiagonalDifference as DiagonalDifferenceController } from '../../../src/application/controller/diagonalDifference.controller';
describe('Class DiagonalDifference Controller', () => {
  it('Error 1', async () => {
    const mReq = {
      body: undefined
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: DiagonalDifferenceController =
      new DiagonalDifferenceController();
    base.getMain(mReq, mRes);
    expect(base.path).toBe('/diagonal-difference');
  });
  it('Error 2', async () => {
    const mReq = {
      body: {}
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: DiagonalDifferenceController =
      new DiagonalDifferenceController();
    base.getMain(mReq, mRes);
  });
  it('Error 3', async () => {
    const mReq = {
      body: 1
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: DiagonalDifferenceController =
      new DiagonalDifferenceController();
    base.getMain(mReq, mRes);
  });
  it('Error 4', async () => {
    const mReq = {
      body: []
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: DiagonalDifferenceController =
      new DiagonalDifferenceController();
    base.getMain(mReq, mRes);
  });
  it('Error 5', async () => {
    const mReq = {
      body: [1]
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: DiagonalDifferenceController =
      new DiagonalDifferenceController();
    base.getMain(mReq, mRes);
  });
  it('Error 6', async () => {
    const mReq = {
      body: [[1, 2]]
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: DiagonalDifferenceController =
      new DiagonalDifferenceController();
    base.getMain(mReq, mRes);
  });
  it('Error 7', async () => {
    const mReq = {
      body: [['1']]
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: DiagonalDifferenceController =
      new DiagonalDifferenceController();
    base.getMain(mReq, mRes);
  });
  it('Error 8', async () => {
    const mReq = {
      body: [[101]]
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: DiagonalDifferenceController =
      new DiagonalDifferenceController();
    base.getMain(mReq, mRes);
  });
  it('Happy Path 1', async () => {
    const mReq = {
      body: [[0]]
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: DiagonalDifferenceController =
      new DiagonalDifferenceController();
    base.getMain(mReq, mRes);
    expect(base.path).toBe('/diagonal-difference');
  });
});
