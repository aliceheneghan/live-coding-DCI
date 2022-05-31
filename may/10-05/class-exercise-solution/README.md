 # Class

## Task 1

Create a class rectangle

The class contains 3 properties:

- `width`
- `height`
- `color`

The class contains the following methods:

- `perimeter`: calculates and returns the perimeter of the rectangle
- `area`: calculates and returns the area of the rectangle
- `description`: returns a string describing the rectangle, stating the color, height and width. For example: `This is a green rectangle 3cm wide and 4cm high`

## Task 2


Create a class called `Person`

The class should contain the following properties:

- firstName
- lastName
- age
- city

The class should contain the following methods:

- `introduce()`: it returns a string like "Hello, my name is Rick Sanchez and I live in Berlin"
- `greet(person)`: a method that takes another `person` object in input and returns
a string like "Hello Martha, how are you?" where "Martha is the name of the
object in the parameter
- `isOlder(person)`: a method that takes another `person` object in input and checks who's
older. It returns `true` or `false`

Use the class to create 4 different people and test the different functionalities

## Task 3


Create a class called Playlist

The class contains the following properties:

- `name`: a name for the playlist
- `songs`: an empty array where songs can be added


The class contains the following methods:
- `add(song)`: a method that takes a song object in input and adds it at the end of the `songs` array
- `list()`: a method that prints the whole list of songs in the playlist
- `duration()`: a method that returns the duration of the whole playlist

A song object is an object with 2 properties:
- `title`: a string with the title of the song
- `artist`: a string with the artist of the song
- `duration`: a string with the duration of the song

For example:
{
  title: "Last Nite",
  artist: "The Strokes",
  duration: "3:13"
}

