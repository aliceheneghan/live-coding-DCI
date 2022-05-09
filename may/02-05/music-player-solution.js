const musicPlayer = {
  songs: [
    {
      title: "Should I stay or Should I go",
      artist: "The Clash",
    },
    {
      title: "Toxic",
      artist: "Britney Spears",
    },
    {
      title: "Faster",
      artist: "Janelle Monáe",
    },
    {
      title: "Surgeon",
      artist: "St. Vincent",
    },
    {
      title: "I Fought the Law",
      artist: "The Clash",
    },
    {
      title: "Pedestrian at Best",
      artist: "Courtney Barnett",
    },
    {
      title: "Vordhosbn",
      artist: "Aphex Twin",
    },
  ],
  playlist: [],
  findSongByTitle: function (title) {
    const lowerCaseTitle = title.toLowerCase();
    for (let i = 0; i < this.songs.length; i++) {
      if (this.songs[i].title.toLowerCase() === lowerCaseTitle) {
        return i;
      }
    }
    return -1;
  },
  searchSongByTitle: function (searchString) {
    const lowerCaseSearchString = searchString.toLowerCase();
    for (let i = 0; i < this.songs.length; i++) {
      if (this.songs[i].title.toLowerCase().includes(lowerCaseSearchString)) {
        return i;
      }
    }
    return -1;
  },
  getSongByIndex: function (songIndex) {
    if (songIndex >= 0) {
      return this.songs[songIndex];
    } else {
      return null;
    }
  },
  addSongToPlaylist: function (song) {
    if (song !== null) {
      this.playlist.push(song);
      console.log(`\nSong ${song.title} added to the playlist\n`);
    } else {
      console.log(`\nNo new songs have been added to the playlist\n`);
    }
    return this.playlist;
  },
  toggleFavouriteSong: function (songIndex) {
    if (this.songs[songIndex].isFavourite === undefined) {
      this.songs[songIndex].isFavourite = true;
    } else if (this.songs[songIndex].isFavourite === false) {
      this.songs[songIndex].isFavourite = true;
    } else {
      this.songs[songIndex].isFavourite = false;
    }
  },
  getFavouriteSongs: function () {
    const favouriteSongs = [];
    for (const song of this.songs) {
      if (song.isFavourite) {
        favouriteSongs.push(song);
      }
    }
    return favouriteSongs;
  },
  printPlaylist: function () {
    console.log("\n\nPlaylist:");
    console.log("-----------");
    for (let i = 0; i < this.playlist.length; i++) {
      console.log(`Track ${i + 1} of ${this.playlist.length}`);
      console.log(`Title: ${this.playlist[i].title}`);
      console.log(`Artist: ${this.playlist[i].artist}`);
      console.log("-----------");
    }
  },
};

const song1Index = musicPlayer.findSongByTitle("toxic");
const song1 = musicPlayer.getSongByIndex(song1Index);
musicPlayer.addSongToPlaylist(song1);
musicPlayer.printPlaylist();

const song2Index = musicPlayer.searchSongByTitle("sur");
const song2 = musicPlayer.getSongByIndex(song2Index);
musicPlayer.addSongToPlaylist(song2);
musicPlayer.printPlaylist();

const song3Index = musicPlayer.searchSongByTitle("bla");
const song3 = musicPlayer.getSongByIndex(song3Index);
musicPlayer.addSongToPlaylist(song3);
musicPlayer.printPlaylist();

const favouriteSongIndex = musicPlayer.findSongByTitle("I fought the law");
musicPlayer.toggleFavouriteSong(favouriteSongIndex);
musicPlayer.toggleFavouriteSong(song2Index);
musicPlayer.toggleFavouriteSong(song1Index);
console.log(musicPlayer.getFavouriteSongs());

// I call the function toggleFavouriteSong on a song that's already favourite to remove it

musicPlayer.toggleFavouriteSong(favouriteSongIndex);
console.log(musicPlayer.getFavouriteSongs());