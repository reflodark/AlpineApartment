# AlpineApartment

This is the source code for the Chalet Captain Thorpe holiday apartment website.
The site is built with [Eleventy](https://www.11ty.dev/) and deployed to GitHub Pages.

## Development

To run the website locally for development, follow these steps:

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start the development server:**
    ```bash
    npm start
    ```
    This will build the site and serve it at `http://localhost:8080`. The browser will automatically reload when you save changes.

## Building and Deployment

This project has two build configurations: one for the live production site and one for the test environment on GitHub Pages.

### Production Build (for alpine-apartment.ch)

To create a final build for the live domain, run:
```bash
npm run build
```
This command generates the optimized website in the `_site` folder. The contents of this folder can then be uploaded via FTP to the web server.

### Test Deployment (to GitHub Pages)

To deploy a test version to `https://reflodark.github.io/AlpineApartment/`, run:
```bash
npm run deploy
```

## Disclaimer

This project was created with significant assistance from an AI coding assistant. While the code has been reviewed, it is provided "as is" without warranty of any kind. Please review and test the code thoroughly before using it in a production environment.
