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

// 1. Use the .map() function to transform the tracklist array: add a new property to each track called durationInSeconds, calculated from duration. Example: duration: 2:30 => durationInSeconds 150

let tracklistWithSeconds = album.tracklist.map((track) => {
  let trackClone = { ...track };
  let splitDuration = track.duration.split(":");
  let minutes = parseInt(splitDuration[0]);
  let seconds = parseInt(splitDuration[1]);
  trackClone.durationInSeconds = minutes * 60 + seconds;
  return trackClone;
});

console.log("The tracklist after adding the durationInSeconds:");
console.log(tracklistWithSeconds);

// 2. sort the tracks in descending order, from the one with longer duration the shortest one

let sortedTracklist = [...tracklistWithSeconds].sort(
  (a, b) => b.durationInSeconds - a.durationInSeconds
);

console.log("\n\nThe sorted tracklist:");
console.log(sortedTracklist);

// 3. add a new property "durationInSeconds" to the main "album" object adding the total duration of the album in seconds

let albumDurationInSeconds = tracklistWithSeconds.reduce(
  (total, currentTrack) => {
    return total + currentTrack.durationInSeconds;
  },
  0
);

console.log("\n\nThe duration of the album in seconds:");
console.log(albumDurationInSeconds);

// 4. add a new property "duration" to the main "album" object with the duration represented as a string. Example: duration: "35:53"

// 1500 seconds => "25:00"
// Math.floor(1500 / 60), to get the minutes
//1500 % 60, to get the seconds
const albumMinutesDuration = Math.floor(albumDurationInSeconds / 60);
const albumSecondsDuration = albumDurationInSeconds % 60;
const formatAlbumMinutes = `${
  albumMinutesDuration < 10 ? "0" : ""
}${albumMinutesDuration}`;
const formatAlbumSeconds = `${
  albumSecondsDuration < 10 ? "0" : ""
}${albumSecondsDuration}`;
// const duration = `${albumMinutesDuration.padStart(2,0)}:${albumSecondsDuration.padStart(2, 0)}`;
let duration = `${formatAlbumMinutes}:${formatAlbumSeconds}`;

const albumCopy = { ...album };

albumCopy.durationInSeconds = albumDurationInSeconds;
albumCopy.tracklist = tracklistWithSeconds;
albumCopy.duration = duration;

console.log("\n\nOriginal album:");
console.log(album);
console.log("\n\nFinal result:");
console.log(albumCopy);
