// * Daily Coding Problem August 18 2021

// * Implement Elo Score

// * Returns the expected probability that player1 will win and player2 will win.
// * Both values will be between 0 and 1 and should sum up to 1
export const expectedOutComes = (player1Rating: number, player2Rating: number) : [number, number] => {
    const player1Outcome = 1 / (1 + Math.pow(10, (player2Rating - player1Rating) / 400));
    return [player1Outcome, 1 - player1Outcome];
}

// Using the expectedOutcomes of each player, and the winner, determine how many points go from loser to winner
export const pointsTransfered = (player1Rating: number, player2Rating: number, player1Wins: boolean) => {
    const [player1Win, player2Win] = expectedOutComes(player1Rating, player2Rating);
    const pointsMultiplier = 100; // Not sure what a good way to actually assign points would be...
    return player1Wins ? player1Win : player2Win;
}