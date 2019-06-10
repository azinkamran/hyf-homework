console.log()
console.log("My favorite songs")
console.log()
//My favorite songs
const songDatabase = [{
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
  },
  {
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
  },
  {
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
  },
  {
    songId: 4,
    title: 'When is enough too little?',
    artist: 'The spies girls',
  },
];



//add
function addSongToDatabase(song) {
    songDatabase.push(song)
} 

const song={
    songId: 5,
    title: 'some one like you',
    artist: 'Adele',
}
const song2={
    songId: 6,
    title: ' million years ago',
    artist: 'Adele',
}
const song3={
    songId: 7,
    title: 'My Funny Valentine',
    artist: 'Frank Sinatra',
}
addSongToDatabase(song) 
addSongToDatabase(song2) 
addSongToDatabase(song3) 

console.log(songDatabase)

//search

function getSongByTitle(title) {
    for(let i=0;i<songDatabase.length;i++){
        if (songDatabase[i].title.includes(title)){
            return(songDatabase[i])
        }
    }
    return("You don't have this song in your database")
}

let searchedSong = getSongByTitle('When is enough too little?');
console.log()
console.log('Song name: When is enough too little? ::',searchedSong)
searchedSong = getSongByTitle('my way');
console.log()
console.log('Song name:my way ::',searchedSong)
console.log()

//fuzzysearch

//playlist
let myPlaylist = [];
let readytoAddToPlaylist
function addSongToMyPlaylist(title) {
    readytoAddToPlaylist = getSongByTitle(title)
    if (readytoAddToPlaylist === ("You don't have this song in your database")) {
        console.log("This song is not available")
    }else{
        let temp= ((readytoAddToPlaylist.songId)-1)
        myPlaylist.push(songDatabase[temp])
        console.log(title,"added to your playlist")
    }
    console.log()
}


addSongToMyPlaylist('3 nails in wood');
addSongToMyPlaylist('My Funny Valentine');
addSongToMyPlaylist('q');
console.log("Your playlist is ::",myPlaylist);

//improving