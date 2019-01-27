class User {
  constructor() {
    this.users = [{
      id: 1,
      name: "Alex"
    }, {
      id: 2,
      name: "France"
    }];
  }
  async getUsers(cb) {
    await setTimeout(() => { }, 400)
    cb(this.users);
  }
  async getUserById(id, cb) {
    await setTimeout(() => { }, 400)
    cb(this.users.find(user => user.id == id));
  }
}

class Photo {
  constructor() {
    this.photos = [
      {
        id: 1,
        user_id: 2,
        name: "Chien.jpg"
      },
      {
        id: 2,
        user_id: 1,
        name: "Cat.jpg"
      },
    ];
  }
  async getPhotos(cb) {
    await setTimeout(() => { }, 300)
    cb(this.photos);
  }
  async getPhotosById(id, cb) {
    await setTimeout(() => { }, 400)
    cb(this.photos.find(photo => photo.id == id));
  }
  async getPhotosByUserId(user_id, cb) {
    await setTimeout(() => { }, 400)
    cb(this.photos.find(photo => photo.user_id == user_id));
  }
}

module.exports = {
  User,
  Photo
};