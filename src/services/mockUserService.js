let userData = {
    username: 'username123',
    fullName: 'Firstname Lastname',
    description: 'Descripción corta...',
    url: 'https://www.website.com',
    profilePicture: 'https://picsum.photos/100',
    posts: 870,
    followers: 496,
    following: 112,
  };
  
  export const getUserData = () => {
    return userData;
  };
  
  export const saveUserData = (newData) => {
    userData = newData;
  };