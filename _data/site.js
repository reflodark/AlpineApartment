const isGhPages = process.env.ELEVENTY_ENV === 'gh-pages';

module.exports = {
    name: "Chalet Captain Thorpe",
    // The canonical URL for SEO purposes. This should be your primary production domain.
    url: "https://alpine-apartment.ch",
    // The base URL for the current build environment (for assets and sitemap)
    assetUrl: isGhPages ? "https://reflodark.github.io" : "https://alpine-apartment.ch",
    author: "reflodark",
    description: "Gemütliche Ferienwohnung im Herzen des magischen Lötschentals. Perfekt für Abenteuer in den Alpen.",
    lang: "de",
    // A default image for social media sharing
    defaultImage: "/images/gallery/cortyard_summer.jpg"
};