module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("site/css");
    eleventyConfig.addPassthroughCopy("site/search-results");
    return {
        dir: {
            input: "site",
            output: "dist"
        }
    }
};