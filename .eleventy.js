module.exports = function (eleventyConfig) {
    // Passthrough-Copy für statische Assets. Eleventy kopiert diese Ordner/Dateien
    // direkt in den Output-Ordner (_site).
    eleventyConfig.addPassthroughCopy("src/favicon.ico");
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/styles.css");
    eleventyConfig.addPassthroughCopy("src/app.js");
    eleventyConfig.addPassthroughCopy("src/doc");
    eleventyConfig.addPassthroughCopy("src/picture_library");

    return {
        // Definiert die Verzeichnisstruktur für Eleventy.
        dir: {
            input: "src",
            includes: "_includes",
            output: "_site",
        },

        // Dies ist der entscheidende Teil für GitHub Pages.
        // Wenn das Deploy-Skript ausgeführt wird (ELEVENTY_ENV=gh-pages),
        // wird der Pfad-Präfix gesetzt. Ansonsten bleibt er leer.
        pathPrefix: process.env.ELEVENTY_ENV === 'gh-pages' ? "/AlpineApartment/" : "/"
    };
};