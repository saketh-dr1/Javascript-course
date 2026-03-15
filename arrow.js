const user = {
  username: 'Saketh',
  age: '22',

  welcomeMsg: function () {
    console.log(`${this.username}, welcome to website`);
  },
};

user.welcomeMsg();
user.username = 'DSR';
user.welcomeMsg();
