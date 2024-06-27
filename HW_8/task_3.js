const url = "https://jsonplaceholder.typicode.com";

async function getUsers() {
  try {    
    const response = await fetch(`${url}/users`);
    if (!response.ok){
        throw new Error('Network response is not ok');
    };
    const data = await response.json();    
      return data;    
  } catch (error) {
    console.log(error);
  }
};

async function getAlbumsById(userId){
    try{
        const response = await fetch(`${url}/albums?userId=${userId}`);
        if (!response.ok){
            throw new Error('Network response is not ok');
        };
        const data = await response.json()
        return data
        
    } catch (error) {
        console.log(error);
    }
};

async function getSumPhotosByAlbumId(albumId){
  try{
    const response = await fetch(`${url}/photos?albumId=${albumId}`);
      if (!response.ok){
        throw new Error('Network response is not ok');
    };
    const data = await response.json();
    return data.length
  } catch (error) {
    console.log(error);
  }
};

async function getUsersAndAlbums() {
    const usersArr = await getUsers();
    const albumPromises = usersArr.map(async (user) => {
      const albums = await getAlbumsById(user.id);
      const albumsWithPhotosCount = await Promise.all(albums.map(async (album)=>{
        const photosCount = await getSumPhotosByAlbumId(album.id);
        return {...album, photosCount}
      }))
      return { ...user, albums:albumsWithPhotosCount };
    });
    const usersWithAlbums = await Promise.all(albumPromises);    
  
    const result = usersWithAlbums.map(user => {
      return `
        name: ${user.name}
        email: ${user.email}
        phone: ${user.phone}
        company: ${user.company.name}
        lbums:
        ${user.albums.map(album => `
          title: ${album.title}
          photoCount: ${album.photoCount}
        `).join('\n        ')}
    `;
    }).join('\n\n');
  
    return result
  };
  
getUsersAndAlbums().then(result => console.log(result));