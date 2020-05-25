module.exports = function(eleventyConfig) {

  eleventyConfig.addLayoutAlias("list", "list.html");
  eleventyConfig.addLayoutAlias("page", "page.html");
  eleventyConfig.addLayoutAlias("single", "single.html");

  eleventyConfig.addPassthroughCopy("content");
  eleventyConfig.addPassthroughCopy({ "content": "/" });
  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addPassthroughCopy({ "static": "/" });

  eleventyConfig.addCollection("blog", (collection) => {
    return collection.getFilteredByGlob("blog/*.md");});
  eleventyConfig.addCollection("poem", (collection) => {
    return collection.getFilteredByGlob("poem/**/*.md");});
  eleventyConfig.addCollection("quote", (collection) => {
    return collection.getFilteredByGlob("quote/*.md");});

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
