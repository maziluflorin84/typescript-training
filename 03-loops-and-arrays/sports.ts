let sportsOne: string[] = ["Golf", "Soccer", "Tennis", "Swimming"];

for (let i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);    
}

console.log();

for (let temSport of sportsOne) {
    if (temSport == "Soccer") {
        console.log(temSport + " << My Favorite!");
    } else {
        console.log(temSport);
    }
}