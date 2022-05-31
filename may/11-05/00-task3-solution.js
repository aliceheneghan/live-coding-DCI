// Create a class called Playlist

// The class contains the following properties:

// name: a name for the playlist
// songs: an empty array where songs can be added

// The class contains the following methods:

// add(song): a method that takes a song object in input and adds it at the end of the songs array
// list(): a method that prints the whole list of songs in the playlist
// duration(): a method that returns the duration of the whole playlist

// A song object is an object with 2 properties:

// title: a string with the title of the song
// artist: a string with the artist of the song
// duration: a string with the duration of the song
// For example:

// {
//   title: "Last Nite",
//   artist: "The Strokes",
//   duration: "3:13"
// }

class Playlist {
  constructor(name) {
    this.name = name;
    this.songs = [];
  }
  add(song) {
    this.songs.push(song);
  }
  list() {
    console.log(this.name);
    console.log("------------------");
    // console.log(this.songs);
    for (const song of this.songs) {
      console.log(`Title: ${song.title}`);
      console.log(`Artist: ${song.artist}`);
      console.log("---");
    }
  }
  duration() {
    const totalDuration = this.songs.reduce((prev, curr) => {
      let duration = curr.duration;
      let splitDuration = duration.split(":");
      let minutes = parseInt(splitDuration[0]);
      let seconds = parseInt(splitDuration[1]);
      let durationInSeconds = minutes * 60 + seconds;
      curr.durationInseconds = durationInSeconds;
      return prev + durationInSeconds;
    }, 0);
    this.totalDuration = totalDuration;
    return totalDuration;
  }
}

const song1 = {
  title: "Song #1",
  artist: "Fugazi",
  duration: "2:55",
};

const song2 = {
  title: "Song 2",
  artist: "Blur",
  duration: "2:07",
};
const song3 = {
  title: "Number 3",
  artist: "They Might Be Giants",
  duration: "1:45",
};

const myPlaylist = new Playlist("My favourite songs");

console.log(myPlaylist);

myPlaylist.add(song1);
myPlaylist.add(song2);
myPlaylist.add(song3);

console.log(myPlaylist);

myPlaylist.list();
console.log("The total duration of the playlist is:", myPlaylist.duration());
console.log(myPlaylist);

// Transofrm a duration string like "3:55" into seconds
// "3:55" -> (3 * 60) + 55 -> 180 + 55 -> 235

// let duration = "3:55";
// let splitDuration = duration.split(":");
//  let minutes = parseInt(splitDuration[0]);
//  let seconds = parseInt(splitDuration[1]);
// let durationInSeconds = (minutes * 60) + seconds;

// same as above, but using array destructuring assignment
let duration = "3:55";
let [minutes, seconds] = duration.split(":");
let durationInSeconds = parseInt(minutes) * 60 + parseInt(seconds);
