import { PositionsByCardinalPoints as PositionsByCardinalPointsModel } from '../../../src/domain/model/positionsByCardinalPoints.model';
describe('Class PositionsByCardinalPoints Model', () => {
  it('Happy Path - OK 1', async () => {
    const positionsByCardinalPoints: PositionsByCardinalPointsModel =
      new PositionsByCardinalPointsModel();
    expect(positionsByCardinalPoints.getJson()).toEqual({
      e: 0,
      n: 0,
      ne: 0,
      nw: 0,
      s: 0,
      se: 0,
      sw: 0,
      w: 0
    });
  });
  it('Happy Path - OK 2', async () => {
    const positionsByCardinalPoints: PositionsByCardinalPointsModel =
      new PositionsByCardinalPointsModel(1, 1, 1, 1);
    expect(positionsByCardinalPoints.getJson()).toEqual({
      n: 1,
      s: 1,
      e: 1,
      w: 1,
      ne: 1,
      nw: 1,
      se: 1,
      sw: 1
    });
  });
  it('Happy Path - OK 3', async () => {
    const positionsByCardinalPoints: PositionsByCardinalPointsModel =
      new PositionsByCardinalPointsModel(1, 1, 1, 0);
    expect(positionsByCardinalPoints.getJson()).toEqual({
      n: 1,
      s: 1,
      e: 1,
      w: 0,
      ne: 1,
      nw: 0,
      se: 1,
      sw: 0
    });
  });
  it('Happy Path - OK 4', async () => {
    const positionsByCardinalPoints: PositionsByCardinalPointsModel =
      new PositionsByCardinalPointsModel(1, 1, 0, 1);
    expect(positionsByCardinalPoints.getJson()).toEqual({
      n: 1,
      s: 1,
      e: 0,
      w: 1,
      ne: 0,
      nw: 1,
      se: 0,
      sw: 1
    });
  });
  it('Happy Path - OK 5', async () => {
    const positionsByCardinalPoints: PositionsByCardinalPointsModel =
      new PositionsByCardinalPointsModel(1, 0, 1, 1);
    expect(positionsByCardinalPoints.getJson()).toEqual({
      n: 1,
      s: 0,
      e: 1,
      w: 1,
      ne: 1,
      nw: 1,
      se: 0,
      sw: 0
    });
  });
  it('Happy Path - OK 6', async () => {
    const positionsByCardinalPoints: PositionsByCardinalPointsModel =
      new PositionsByCardinalPointsModel(0, 1, 1, 1);
    expect(positionsByCardinalPoints.getJson()).toEqual({
      n: 0,
      s: 1,
      e: 1,
      w: 1,
      ne: 0,
      nw: 0,
      se: 1,
      sw: 1
    });
  });
});
