export function decidePreRound(total: Array<string>) {
  const totalLength = total.length;
  let roundCount = 0;
  while (2 ** roundCount <= totalLength) {
    roundCount++;
  }
  const matchCount = totalLength - 2 ** (roundCount - 1);
  const match = total.slice(0, matchCount * 2);
  return { match, roundCount };
}

export function enrollRound(
  advance: Array<string>,
  rest: Array<string>
): string[] {
  const count = advance.length >= rest.length ? advance.length : rest.length;
  const nextMatch = [];
  for (let i = 0; i < count; i++) {
    if (advance[i]) nextMatch.push(advance[i]);
    if (rest[i]) nextMatch.push(rest[i]);
  }
  return nextMatch;
}

export function getTournamentTree(
  record: string[][]
): { class: string; result: string }[][] {
  const tree = [];
  for (let i = 0; i < record.length - 1; i++) {
    const round = [];
    for (let j = 0; j < record[i].length; j += 2) {
      if (record[i + 1].includes(record[i][j])) {
        round.push({ class: record[i][j], result: 'win' });
        round.push({ class: record[i][j + 1], result: 'lose' });
      } else {
        round.push({ class: record[i][j], result: 'lose' });
        round.push({ class: record[i][j + 1], result: 'win' });
      }
    }
    tree.push(round);
  }
  tree.push([{ class: record[record.length - 1][0], result: 'win' }]);
  return tree;
}
