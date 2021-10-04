// *** Strange Sequence *** //
const sequence = (a0) => {
  const used = [a0];

  while (used.length) {
    let temp = squareSum(used[used.length - 1]);
    if (used.includes(temp)) {
      return used.length + 1;
    } else {
      used.push(temp)
    }
  }
};

const squareSum = (num) => {
  const numToString = num.toString().split('');
  const squareEach = numToString.map(n => (
    n *= n
  ));
  let sum = 0;
  for (let i = 0; i < squareEach.length; i++) {
    sum += Number(squareEach[i]);
  }

  return sum;
};


// *** A Potentially Very Large Lock *** //
const lock = (locked, unlocked) => {
  let rotations = 0;

  for (let i = 0; i < locked.length; i++) {
    const start = locked[i];
    const end = unlocked[i];

    if (start < end) {
      rotations += Math.min(end - start, start - end + 10);
    } else {
      rotations += Math.min(start - end, end - start + 10);
    }
  }

  return rotations;
};


// *** Alien Lock *** //
const alienLock = (locked, unlocked, charSet) => {
  const alienLen = charSet.length;
  const lockKey = {};
  const lockedNums = [];
  const unlockedNums = [];

  for (let i = 0; i < alienLen; i++) {
    lockKey[charSet[i]] = i;
  }

  for (let i = 0; i < locked.length; i++) {
    lockedNums.push(lockKey[locked[i]]);
    unlockedNums.push(lockKey[unlocked[i]]);
  }

  let rotations = 0;

  for (let i = 0; i < locked.length; i++) {
    const start = lockedNums[i]; // '*' -> 2
    const end = unlockedNums[i]; // '+' -> 1

    if (start < end) {
      rotations += Math.min(end - start, start - end + alienLen);
    } else {
      rotations += Math.min(start - end, end - start + alienLen);
    }
  }

  return rotations;
};