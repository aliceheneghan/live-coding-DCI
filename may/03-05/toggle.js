const songs = [
  {
    title: "song 1",
    artist: "artist 1",
  },
  {
    title: "song 2",
    artist: "artist 2",
  },
  {
    title: "song 3",
    artist: "artist 3",
  },
];

/**
 * To mark a song as favourite we add a boolean called isFavourite:
 *
 * 1. isFavourite is true, so we change it to false
 * 2. isFavourite is false, so we change it to true
 * 3. the song doesn't have the isFavourite property, so we add it and set it to true
 *
 */
function toggleFavourite(songs, index) {
    if (songs[index].isFavourite === true) {
        songs[index].isFavourite = false;
    } else if (songs[index].isFavourite === false) {
        songs[index].isFavourite = true;
    } else if (songs[index].isFavourite === undefined) {
        songs[index].isFavourite = true;
    }
}

toggleFavourite(songs, 1);

console.log(songs);

toggleFavourite(songs, 1);

console.log(songs);

toggleFavourite(songs, 0);

console.log(songs);