const events = [1590000000000, 1580000000000, 1600000000000];

events.forEach(e => console.log(new Date(e)));
events.sort();

let start = events[0];
let stop = events[events.length - 1];



console.log(new Date(start), new Date(stop));


stop = events.at(-1);

console.log(new Date(start), new Date(stop));

// assert.sameValue(array.at(0), 1, 'array.at(0) must return 1');
// assert.sameValue(array.at(-1), 5, 'array.at(-1) must return 5');
// assert.sameValue(array.at(-2), undefined, 'array.at(-2) must return undefined');
// assert.sameValue(array.at(-3), 4, 'array.at(-3) must return 4');
// assert.sameValue(array.at(-4), 3, 'array.at(-4) must return 3');

// assert.sameValue(array.at(0), 1, 'array.at(0) must return 1');
// assert.sameValue(array.at(1), 2, 'array.at(1) must return 2');
// assert.sameValue(array.at(2), 3, 'array.at(2) must return 3');
// assert.sameValue(array.at(3), 4, 'array.at(3) must return 4');
// assert.sameValue(array.at(4), undefined, 'array.at(4) must return undefined');
// assert.sameValue(array.at(5), 5, 'array.at(5) must return 5');

// let a = [];

// assert.sameValue(array.at(-2), undefined, 'array.at(-2) must return undefined'); // wrap around the end
// assert.sameValue(array.at(0), undefined, 'array.at(0) must return undefined');
// assert.sameValue(array.at(1), undefined, 'array.at(1) must return undefined');