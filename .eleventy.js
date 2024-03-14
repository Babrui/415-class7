module.exports = function(eleventyConfig) {
     eleventyConfig.addPassthroughCopy('_src/js');
     eleventyConfig.addPassthroughCopy('_src/css');
     eleventyConfig.addPassthroughCopy('_src/img');
     eleventyConfig.addPassthroughCopy('_src/image');
     return {
          dir: {
               input: "_src"
          }
     }
 }