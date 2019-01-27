// var promise2 = (number) => new Promise((resolve, reject) => {
// 	if (number == 40) reject("Nop");
// 	resolve(number);
// });

const { User, Photo } = require('./Ex');

const userModel = new User();
const photoModel = new Photo();

const getUserByIdPromise = (id) => new Promise((resolve, reject) => {
  userModel.getUserById(id, user => resolve(user))
});

const getPhotosByUserIdPromise = (user_id) => new Promise((resolve, reject) => {
  photoModel.getPhotosByUserId(user_id, photo => resolve(photo))
});

const getUsers = () => new Promise((resolve, reject) => {
  userModel.getUsers((users) => resolve(users))
});

const getPhotos = () => new Promise((resolve, reject) => {
  //reject(new Error("Error"))
  photoModel.getPhotos(photos => resolve(photos))
});

let user = {};
let photo = {};
getUserByIdPromise(2)
  .then(res => {
    user = res;
    return getPhotosByUserIdPromise(res.id)
  })
  .then(res => {
    photo = res;
    console.log({
      user_id: user.id,
      photo_id: photo.id,
      user_name: user.name,
      photo_name: photo.name
    })
  })
  .catch(err => console.log(err));

Promise.all([getUsers(), getPhotos()])
  .then(res => {
    const userArr = res[0];
    const photosArr = res[1];

    const mergedArr = userArr.map(userEl => {
      const foundPhoto = photosArr.find(photoEl => photoEl.user_id === userEl.id)
      return {
        user_id: userEl.id,
        photo_id: foundPhoto.id,
        user_name: userEl.name,
        photo_name: foundPhoto.name
      }
    })
    console.log(mergedArr);
  })
  .catch(err => console.log(err))
  .finally(() => console.log("DONE"))


// Sortir des données du type, mais seulement pour l'utilisateur ID = 2 
// [{
//   user_id,
//   photo_id,
//   user_name,
//   photo_nae
// }...]