const url = "https://jsonplaceholder.typicode.com";

async function getEntities(endpoint) {
  try {
    const response = await fetch(`${url}/${endpoint}`);
    if (!response.ok) {
      throw new Error(`Network response was not ok for ${endpoint}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    throw error;
  }
}

async function getFinallyData() {
  
    const [users, albums, photos] = await Promise.all([
      getEntities('users'),
      getEntities('albums'),
      getEntities('photos')
    ]);

    const mappedData = users.map(user => {
      const userAlbums = albums.filter(album => album.userId === user.id);
      const albumsWithPhotosCount = userAlbums.map(album => {
        const photosInAlbum = photos.filter(photo => photo.albumId === album.id);
        return {
          ...album,
          photosCount: photosInAlbum.length
        };
      });
      return {
        ...user,
        albums: albumsWithPhotosCount
      };
    });

    const formattedOutput = mappedData.map(user => `
      name: ${user.name}
      email: ${user.email}
      phone: ${user.phone}
      company: ${user.company.name}
      albums:
        ${user.albums.map(album => `
          title: ${album.title}
          photosCount: ${album.photosCount}
        `).join('\n        ')}
    `).join('\n\n');

    console.log(formattedOutput);
    return formattedOutput;  
}

getFinallyData()
  .then(data => console.log(data))  
