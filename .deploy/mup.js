module.exports = {
  servers: {
    one: {
      host: '1.2.3.4',
      username: 'jungjiwan7@naver.com',
      // pem:
      password: 'beetle27'
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'ils',
    path: '../ils',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      ROOT_URL: 'ils2.herokuapp.com',
      MONGO_URL: 'mongodb://skaro:beetle27@ds053176.mlab.com:53176/heroku_5vc4zl4r'
    },

    //dockerImage: 'kadirahq/meteord'
    deployCheckWaitTime: 60
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};