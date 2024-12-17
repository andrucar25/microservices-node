const uglify = require("gulp-uglify-es").default
const {src, dest} = require("./node_modules/gulp")

const minify =  () => src("./cache/**/*.js").pipe(uglify()).pipe(dest("./dist"))

exports.minify = minify;