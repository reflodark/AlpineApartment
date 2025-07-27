module.exports = function (eleventyConfig) {
    // Passthrough-Copy für statische Assets. Eleventy kopiert diese Ordner/Dateien
    // direkt in den Output-Ordner (_site).
    eleventyConfig.addPassthroughCopy("favicon.ico");
    eleventyConfig.addPassthroughCopy("./images");
    eleventyConfig.addPassthroughCopy("./styles.css");
    eleventyConfig.addPassthroughCopy("./app.js");

    return {
        // Definiert die Verzeichnisstruktur für Eleventy.
        dir: {
            input: ".",
            includes: "_includes",
            output: "_site",
        },

        // Dies ist der entscheidende Teil für GitHub Pages.
        // Wenn das Deploy-Skript ausgeführt wird (ELEVENTY_ENV=gh-pages),
        // wird der Pfad-Präfix gesetzt. Ansonsten bleibt er leer.
        pathPrefix: process.env.ELEVENTY_ENV === 'gh-pages' ? "/AlpineApartment/" : "/"
    };
};