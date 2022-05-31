const album = {
  artist: "The Clash",
  genre: "punk",
  year: 1977,
  tracklist: [
    { title: "Janie Jones", duration: "2:05" },
    { title: "Remote Control", duration: "3:00" },
    { title: "I'm So Bored With The U.S.A.", duration: "2:24" },
    { title: "White Riot", duration: "1:55" },
    { title: "Hate & War", duration: "2:05" },
    { title: "What's My Name", duration: "1:40" },
    { title: "Deny", duration: "3:03" },
    { title: "London's Burning", duration: "2:10" },
    { title: "Career Opportunities", duration: "1:51" },
    { title: "48 Hours", duration: "1:34" },
    { title: "Garageland", duration: "3:13" },
  ],
};

console.log(album.tracklist);
console.log(album.tracklist[0]);
console.log(album.tracklist[1]);
console.log(album.tracklist[2]);

for (let track of album.tracklist) {
  console.log("track", track);
}

album.tracklist.map((track) => {
  console.log("track inside map", track);
});



let salary = 50000;

console.log(`monthly salary is ${(salary / 12).toFixed(2)}`)