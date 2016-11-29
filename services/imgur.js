var request = require('request');

exports.getImage = function (search) {
  var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  return new Promise(function (resolve, reject) {
    var options = {
      url: 'https://api.imgur.com/3/gallery/search/' + page + '?q=' + search,
      headers: { Authorization: 'Client-ID c40ce8afd45f67c' },
      json: true
    };
    function getPics(err, response, body) {
      if (!err && response.statusCode == 200) {
        body = body.data.filter(function (image) {
          if (!image.is_album) {
            return image;
          }
        }).map(function (image) {
          return {
            url: image.link,
            snippet: image.title,
            context: 'https://imgur.com/' + image.id
          };
        });
        resolve(body);
      }
    }
    request(options, getPics);
  });
};