module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("site/css");
    eleventyConfig.addPassthroughCopy("site/search-results");
    eleventyConfig.addPassthroughCopy("site/js");
    eleventyConfig.addPassthroughCopy({ "site/_data/pages": "bare-pages" })
    return {
        dir: {
            input: "site",
            output: "dist"
        }
    }
};