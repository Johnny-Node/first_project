const autoprefixer = require('autoprefixer'); //require : common js에서 불러오는 방법
module.exports = {
  plugins : [
    // autoprefixer
    require('autoprefixer')
  ]
};

/* // ES
import autoprefixer from 'autoprefixer';
export {
  plugins : [
    autoprefixer
  ]
}  //이런 방식으로 전달..?*/ 