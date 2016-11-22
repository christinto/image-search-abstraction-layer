var request = require("request");

function getPics(err, response, body) {
  if (!err && response.statusCode === 200) {
    body = body.data.filter(image => {
      if (!image.is_album) {
        return image;
      }
    }).map(image => {
      return {
        url: image.link,
        snippet: image.title,
        context: `https://imgur.com/${image.id}`
      };
    });
    resolve(body);
  }
}
 
exports.getImage = function(search, page = 1) {
  return new Promise(function(resolve, reject) {
      let options = {
      url: "https://api.imgur.com/3/gallery/search/$" + page + "?q=$" + search,
      headers: { Authorization: "Client-ID c40ce8afd45f67c" },
      json: true,
    };
  });
};