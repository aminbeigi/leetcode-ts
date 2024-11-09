function isValidSudoku(board: string[][]): boolean {
    // TC: O(n^2)
    // SC: O(n^2)
    const rows = new Map<number, Set<string>>(
        Array.from({ length: 9 }, (_, i) => [i, new Set<string>()])
    );

    const cols = new Map<number, Set<string>>(
        Array.from({ length: 9 }, (_, i) => [i, new Set<string>()])
    );

    const squares = new Map<string, Set<string>>();

    const boardLength = board.length;
    for (let i = 0; i < boardLength; ++i) {
        for (let j = 0; j < boardLength; j++) {
            if (board[i][j] === ".") {
                continue;
            }

            if (rows.get(i).has(board[i][j]) ||
                cols.get(j).has(board[i][j])) {
                return false;
            }

            const squareKey: string = `${Math.floor(i / 3)},${Math.floor(j / 3)}`;
            if (squares.has(squareKey) && squares.get(squareKey).has(board[i][j])) {
                return false;
            }

            rows.get(i).add(board[i][j]);
            cols.get(j).add(board[i][j]);

            if (!squares.has(squareKey)) {
                squares.set(squareKey, new Set<string>());
            }
            squares.get(squareKey).add(board[i][j]);
        }
    }

    return true;
}