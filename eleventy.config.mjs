import { BASE_PATH_TRAILING_SLASH } from "./site/js/basePath.mjs";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy"

export default function (eleventyConfig) {
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

    eleventyConfig.addPassthroughCopy("site/css");
    eleventyConfig.addPassthroughCopy("site/search-results");
    eleventyConfig.addPassthroughCopy("site/js");
    eleventyConfig.addPassthroughCopy({ "site/_data/pages": "bare-pages" })
    return {
        dir: {
            input: "site",
            output: "dist",
        },
        pathPrefix: BASE_PATH_TRAILING_SLASH
    }
};