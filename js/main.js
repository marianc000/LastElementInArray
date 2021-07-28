const events = [1590000000000, 1580000000000, 1600000000000];

events.forEach(e => console.log(new Date(e)));

events.sort();

let start = events[0];
let stop = events[events.length - 1];

console.log(new Date(start), new Date(stop));
//

stop = events.at(-1);

console.log(new Date(start), new Date(stop));