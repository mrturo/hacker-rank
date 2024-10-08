export class MagicSquareForming {
  public static exe(s: number[][]): number {
    const magicSquares = [
      [
        [8, 1, 6],
        [3, 5, 7],
        [4, 9, 2]
      ],
      [
        [6, 1, 8],
        [7, 5, 3],
        [2, 9, 4]
      ],
      [
        [4, 9, 2],
        [3, 5, 7],
        [8, 1, 6]
      ],
      [
        [2, 9, 4],
        [7, 5, 3],
        [6, 1, 8]
      ],
      [
        [8, 3, 4],
        [1, 5, 9],
        [6, 7, 2]
      ],
      [
        [4, 3, 8],
        [9, 5, 1],
        [2, 7, 6]
      ],
      [
        [6, 7, 2],
        [1, 5, 9],
        [8, 3, 4]
      ],
      [
        [2, 7, 6],
        [9, 5, 1],
        [4, 3, 8]
      ]
    ];
    let minCost = Infinity;
    for (const magic of magicSquares) {
      let currentCost = 0;
      for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s[i].length; j++) {
          currentCost += Math.abs(s[i][j] - magic[i][j]);
        }
      }
      minCost = Math.min(minCost, currentCost);
    }
    return minCost;
  }
}
