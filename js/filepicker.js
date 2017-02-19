  filepicker.setKey("AOSLAoEN9RPSqlUCWpQ3dz");
	filepicker.pick(
  {
    services: ['COMPUTER', 'FACEBOOK', 'INSTAGRAM', 'GOOGLE_DRIVE', 'DROPBOX']
  },
  function(Blob){
    console.log(JSON.stringify(Blob));
    document.getElementById('target').href=Blob.url
    document.getElementById('target').innerHTML=Blob.url
  },
  function(FPError){
    console.log(FPError.toString());
  });
  