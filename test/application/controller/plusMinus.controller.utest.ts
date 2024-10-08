import express from 'express';
import { PlusMinus as PlusMinusController } from '../../../src/application/controller/plusMinus.controller';
describe('Class PlusMinus Controller', () => {
  it('Happy Path 1', async () => {
    const mReq = {
      body: {}
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: PlusMinusController = new PlusMinusController();
    base.getMain(mReq, mRes);
    expect(base.path).toBe('/plus-minus');
  });
  it('Happy Path 2', async () => {
    const mReq = {
      body: []
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: PlusMinusController = new PlusMinusController();
    base.getMain(mReq, mRes);
  });
  it('Happy Path 3', async () => {
    const mReq = {
      body: ['1']
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: PlusMinusController = new PlusMinusController();
    base.getMain(mReq, mRes);
  });
  it('Happy Path 4', async () => {
    const mReq = {
      body: [1, '1']
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: PlusMinusController = new PlusMinusController();
    base.getMain(mReq, mRes);
  });
  it('Happy Path 5', async () => {
    const mReq = {
      body: [1]
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    } as unknown as express.Response;
    const base: PlusMinusController = new PlusMinusController();
    base.getMain(mReq, mRes);
  });
});
