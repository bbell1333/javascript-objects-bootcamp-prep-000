var playlist = {artist: "Song"};

function updatePlaylist(playlist,artistName,song){
  playlist[artistName] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}