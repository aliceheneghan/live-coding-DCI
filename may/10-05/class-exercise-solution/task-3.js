/**
 * Create a class called Playlist
 *
 * The class contains the following properties:
 *
 * - `name`: a name for the playlist
 * - `songs`: an empty array where songs can be added
 *
 *
 * The class contains the following methods:
 * - `add(song)`: a method that takes a song object in input and adds it at the end of the `songs` array
 * - `list()`: a method that prints the whole list of songs in the playlist
 * - `duration()`: a method that returns the duration of the whole playlist
 *
 * A song object is an object with 2 properties:
 * - `title`: a string with the title of the song
 * - `artist`: a string with the artist of the song
 * - `duration`: a string with the duration of the song
 *
 * For example:
 * {
 *   title: "Last Nite",
 *   artist: "The Strokes",
 *   duration: "3:13"
 * }
 *
 */

class Playlist {
  constructor(name) {
    this.name = name;
    this.songs = [];
  }
  add(song) {
    this.songs.push(song);
  }
  list() {
    for (const song of this.songs) {
      console.log(`Title: ${song.title}`);
      console.log(`Artist: ${song.artist}`);
      console.log(`-----`);
    }
  }
  duration() {
    const duration = this.songs.reduce((prev, curr) => {
      // const [minutes, seconds] = curr.duration.split(":");
      //const durationInSeconds = parseInt(minutes) * 60 + parseInt(seconds);
      const splitDuration = curr.duration.split(":");
      const durationInSeconds =
        parseInt(splitDuration[0]) * 60 + parseInt(parseInt(splitDuration[1]));
      return prev + durationInSeconds;
    }, 0);
    return duration;
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

const myPlaylist = new Playlist("pl");
myPlaylist.add(song1);
myPlaylist.add(song2);
myPlaylist.add(song3);

myPlaylist.list();
console.log(myPlaylist.duration());
