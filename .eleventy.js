module.exports = function(eleventyConfig) {

  eleventyConfig.addLayoutAlias("list", "list.html");
  eleventyConfig.addLayoutAlias("page", "page.html");
  eleventyConfig.addLayoutAlias("single", "single.html");

  //eleventyConfig.addPassthroughCopy("content");
  //eleventyConfig.addPassthroughCopy({ "content": "/" });
  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addPassthroughCopy({ "static": "/" });

  //eleventyConfig.addCollection("blog", (collection) => {
  //  return collection.getFilteredByGlob("content/blog/blog-posts/*.md");});
  //eleventyConfig.addCollection("poem", (collection) => {
  //  return collection.getFilteredByGlob("content/poem/**/*.md");});
  //eleventyConfig.addCollection("quote", (collection) => {
  //  return collection.getFilteredByGlob("content/quote/*.md");});

  const options = {
    html: true,
    breaks: true,
    linkify: false
  };

  return {
    dir: {
      input: ".",
      output: "_site",
      layouts: "layouts/_default",
      includes: "layouts/partials"
    },
    templateFormats: ["html", "md"],
    htmlTemplateEngine: "liquid",
    passthroughFileCopy: true
  };
};
