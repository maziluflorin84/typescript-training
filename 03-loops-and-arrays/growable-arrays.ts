let sportsTwo: string[] = ["Golf", "Soccer", "Tennis"];

for (let temSport of sportsTwo) {
    console.log(temSport);
}

console.log();

sportsTwo.push("Baseball");
sportsTwo.push("Formula1");

for (let temSport of sportsTwo) {
    console.log(temSport);
}