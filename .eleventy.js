module.exports = function(eleventyConfig) {

    // Tell Eleventy to copy the following folders/files to the output directory.
    // Without this, Eleventy would only process HTML and ignore your assets.
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("styles.css");
    eleventyConfig.addPassthroughCopy("app.js");

    return {
        // Use a pathPrefix for the GitHub Pages deployment, but not for production.
        // This is controlled by the ELEVENTY_ENV environment variable.
        pathPrefix: process.env.ELEVENTY_ENV === 'gh-pages' ? "/AlpineApartment/" : "/",
        
        // When you run `eleventy`, this is the directory that will be created.
        dir: {
            output: "_site"
        }
    };
};