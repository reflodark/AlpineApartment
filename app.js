// ===================================================================================
// GLOBAL SCRIPT FOR ALPEN-WOHNUNG
// Handles language switching and dynamic content rendering.
// ===================================================================================

// ===================================================================================
// EDITABLE CONTENT AREA
// Change texts and image paths here.
// ===================================================================================
const content = {
    // --- IMAGE PATHS ---
    galleryImages: [
        './images/gallery/cortyard_summer.jpg',
        './images/gallery/balcony_1.jpg',
        './images/gallery/balcony_2.jpg',
        './images/gallery/view_balcony.jpg',
        './images/gallery/evening.jpg',
        './images/gallery/living_room_1.jpg',
        './images/gallery/living_room_2.jpg',
        './images/gallery/living_room_3.jpg',
        './images/gallery/kitchen_2.jpg',
        './images/gallery/kitchen_3.jpg',
        './images/gallery/bedroom_1.jpg',
        './images/gallery/bedroom_2.jpg',
        './images/gallery/bathroom_2.jpg',
        './images/gallery/bathroom_3.jpg',
    ],
    locationImage: './images/info/location_from_terminal.jpg',
    floorplanImage: './images/info/floor_plan.jpg',

    // --- GERMAN TEXTS (DE) ---
    de: {
        site_title: 'Chalet Captain Thorpe',
        nav_home: 'Home',
        nav_info: 'Info',
        nav_live: 'Live',
        home_title: 'Willkommen',
        home_intro: 'Herzlich willkommen in unserer gemütlichen 2-Zimmer-Ferienwohnung in Wiler, im Herzen des magischen Lötschentals. Geniessen Sie die atemberaubende Bergwelt, unzählige Wanderwege und die authentische Walliser Kultur. Unsere Wohnung ist der perfekte Ausgangspunkt für Ihre Abenteuer in den Alpen.',
        home_details: 'Diese 2014 komplett renovierte Ferienwohnung (neue Küche, Bad, 3-fach-Verglasung) ist Ihr idealer Ausgangspunkt im schneesicheren Skigebiet Lauchernalp. Die Talstation der Luftseilbahn ist nur 10 Gehminuten entfernt. Dank der Bergstation auf 3\'300 m ist Schnee garantiert. Die Anreise mit dem ÖV (Bahn bis Goppenstein, dann Postauto) ist einfach und bequem.',
        home_availability_title: 'Verfügbarkeit',
        home_availability_text: 'Frei bis 01.12.2025<br>Sowie dauerhaft ab 01.05.2026',
        home_gallery_title: 'Impressionen',
        info_title: 'Informationen zur Wohnung',
        info_features_title: 'Ausstattung & Preise',
        info_feature_area: 'Wohnfläche:',
        info_value_area: 'ca. 35m²',
        info_feature_rooms: 'Zimmer:',
        info_value_rooms: '2 (1 Schlafzimmer, 1 Wohn-/Esszimmer)',
        info_feature_persons: 'Personen:',
        info_value_persons: 'Ideal für 2-4 Personen',
        info_feature_kitchen: 'Küche:',
        info_value_kitchen: 'Voll ausgestattet',
        info_feature_bathroom: 'Badezimmer:',
        info_value_bathroom: 'Dusche / WC',
        info_feature_balcony: 'Balcon:',
        info_value_balcony: 'Grosser Südbalkon mit Aussicht',
        info_feature_included: 'Inklusive:',
        info_value_included: 'WLAN, TV, Parkplatz, Bettwäsche',
        info_feature_price: 'Preis pro Monat:',
        info_value_price: '990.- CHF',
        info_feature_tourist_tax: 'Kurtaxe:',
        info_value_tourist_tax: '144.-/Jahr/Person',
        info_images_title: 'Lage & Grundriss',
        info_images_text: 'Die Wohnung befindet sich an zentraler und doch ruhiger Lage in Wiler.',
        live_title: 'Live-Webcam Chalet',
        live_text: 'Ein aktueller Blick ins Tal direkt aus dem Chalet.',
        footer_contact_title: 'Kontakt & Adresse',
        footer_contact_data: 'Postfach 331<br>Baanwaldstr 17, 3918 Wiler<br>Telefon: +41 32 333 33 63',
        footer_link: 'Entdecken Sie das magische Lötschental',
        footer_legal_disclaimer: 'Für die Inhalte externer Links wird keine Haftung übernommen.'
    },
    // --- ENGLISH TEXTS (EN) ---
    en: {
        site_title: 'Chalet Captain Thorpe',
        nav_home: 'Home',
        nav_info: 'Info',
        nav_live: 'Live',
        home_title: 'Welcome',
        home_intro: 'Welcome to our cozy 2-room holiday apartment in Wiler, in the heart of the magical Lötschental. Enjoy the breathtaking mountain scenery, countless hiking trails, and the authentic Valais culture. Our apartment is the perfect starting point for your adventures in the Alps.',
        home_details :'This holiday apartment, fully renovated in 2014 (new kitchen, bathroom, triple-glazed windows), is your ideal base in the snow-sure Lauchernalp ski area. The cable car station is just a 10-minute walk away. With the mountain station at 3,300 m, snow is guaranteed. The apartment is easily accessible by public transport (train to Goppenstein, then PostBus).',
        home_availability_title: 'Availability',
        home_availability_text: 'Available until 01.12.2025 <br> As well as permanently from 01.05.2026',
        home_gallery_title: 'Impressions',
        info_title: 'Apartment Information',
        info_features_title: 'Features & Prices',
        info_feature_area: 'Living space:',
        info_value_area: 'approx. 35m²',
        info_feature_rooms: 'Rooms:',
        info_value_rooms: '2 (1 bedroom, 1 living/dining room)',
        info_feature_persons: 'Persons:',
        info_value_persons: 'Ideal for 2-4 people',
        info_feature_kitchen: 'Kitchen:',
        info_value_kitchen: 'Fully equipped',
        info_feature_bathroom: 'Bathroom:',
        info_value_bathroom: 'Shower / WC',
        info_feature_balcony: 'Balcony:',
        info_value_balcony: 'Large south-facing balcony with a view',
        info_feature_included: 'Included:',
        info_value_included: 'WLAN, TV, parking, bed linen',
        info_feature_price: 'Price per month:',
        info_value_price: '990.- CHF',
        info_feature_tourist_tax: 'Tourist tax:',
        info_value_tourist_tax: '144.-/year/person',
        info_images_title: 'Location & Floor Plan',
        info_images_text: 'The apartment is centrally yet quietly located in Wiler.',
        live_title: 'Live Webcam chalet',
        live_text: 'A current view of the valley directly from the chalet.',
        footer_contact_title: 'Contact & Address',
        footer_contact_data: 'Postfach 331<br>Baanwaldstr 17, 3918 Wiler<br>Phone: +41 32 333 33 63',
        footer_link: 'Discover the magical Lötschental',
        footer_legal_disclaimer: 'No liability is assumed for the content of external links.'
    },
    // --- FRENCH TEXTS (FR) ---
    fr: {
        site_title: 'Chalet Captain Thorpe',
        nav_home: 'Accueil',
        nav_info: 'Info',
        nav_live: 'Live',
        home_title: 'Bienvenue',
        home_intro: 'Bienvenue dans notre confortable appartement de vacances de 2 pièces à Wiler, au cœur du magique Lötschental. Profitez du paysage montagneux à couper le souffle, des innombrables sentiers de randonnée et de la culture valaisanne authentique. Notre appartement est le point de départ idéal pour vos aventures dans les Alpes.',
        home_details: 'Cet appartement, entièrement rénové en 2014 (nouvelle cuisine, salle de bain, triple vitrage), est le point de départ idéal pour le domaine skiable de Lauchernalp, où l\'enneigement est garanti. La station de téléphérique n\'est qu\'à 10 minutes à pied. Avec une station supérieure à 3\'300 m d\'altitude, la neige est assurée. L\'accès en transports publics (train jusqu\'à Goppenstein, puis CarPostal) est simple et pratique.',
        home_availability_title: 'Disponibilité',
        home_availability_text: 'Libre jusqu\'au 01.12.2025<br>Permanent à partir du 01.05.2026',
        home_gallery_title: 'Impressions',
        info_title: 'Informations sur l\'appartement',
        info_features_title: 'Équipement & Prix',
        info_feature_area: 'Surface habitable:',
        info_value_area: 'env. 35m²',
        info_feature_rooms: 'Pièces:',
        info_value_rooms: '2 (1 chambre, 1 salon/salle à manger)',
        info_feature_persons: 'Personnes:',
        info_value_persons: 'Idéal pour 2-4 personnes',
        info_feature_kitchen: 'Cuisine:',
        info_value_kitchen: 'Entièrement équipée',
        info_feature_bathroom: 'Salle de bain:',
        info_value_bathroom: 'Douche / WC',
        info_feature_balcony: 'Balcon:',
        info_value_balcony: 'Grand balcon orienté sud avec vue',
        info_feature_included: 'Inclus:',
        info_value_included: 'WLAN, TV, parking, linge de lit',
        info_feature_price: 'Prix par mois:',
        info_value_price: '990.- CHF',
        info_feature_tourist_tax: 'Taxe de séjour:',
        info_value_tourist_tax: '144.-/an/personne',
        info_images_title: 'Emplacement & Plan',
        info_images_text: 'L\'appartement est situé dans un endroit central mais calme à Wiler.',
        live_title: 'Webcam en direct du chalet',
        live_text: 'Une vue actuelle de la vallée directement depuis le chalet.',
        footer_contact_title: 'Contact & Adresse',
        footer_contact_data: 'Postfach 331<br>Baanwaldstr 17, 3918 Wiler<br>Téléphone: +41 32 333 33 63',
        footer_link: 'Découvrez le magique Lötschental',
        footer_legal_disclaimer: 'Aucune responsabilité n\'est assumée pour le contenu des liens externes.'
    }
};
// ===================================================================================
// APPLICATION LOGIC - DO NOT EDIT BELOW THIS LINE
// ===================================================================================

document.addEventListener('DOMContentLoaded', function () {

    // --- MOBILE NAVIGATION TOGGLE ---
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const sidebar = document.querySelector('.sidebar');

    if (navToggle && sidebar) {
        navToggle.addEventListener('click', function () {
            sidebar.classList.toggle('is-open');
            // Update aria-expanded attribute for accessibility
            const isExpanded = sidebar.classList.contains('is-open');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });
    }

    // --- RENDER FUNCTION ---
    function renderContent(lang) {
        // Update all elements with a 'data-translate' attribute
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            if (content[lang] && content[lang][key]) {
                el.innerHTML = content[lang][key];
            }
        });

        // --- DYNAMIC CONTENT (only if elements exist on the current page) ---

        // Create image gallery
        const galleryContainer = document.getElementById('gallery-container');
        if (galleryContainer) {
            galleryContainer.innerHTML = ''; // Clear gallery before rebuilding
            content.galleryImages.forEach(src => {
                const item = document.createElement('div');
                item.className = 'gallery-item';
                const img = document.createElement('img');
                img.src = src;
                img.alt = content[lang].home_gallery_title || 'Impression';
                img.onerror = function () { this.src = 'https://placehold.co/400x300/f0f0f0/ccc?text=Image+not+found'; };
                
                // === UPDATED: Add event listener for image click ===
                img.style.cursor = 'pointer'; // Make it obvious the image is clickable
                img.addEventListener('click', function() {
                    showImageInModal(this.src); // Call the new popup function
                });
                // ===============================================

                item.appendChild(img);
                galleryContainer.appendChild(item);
            });
        }

        // Update info images
        const locationImage = document.getElementById('image-location');
        if (locationImage) locationImage.src = content.locationImage;

        const floorplanImage = document.getElementById('image-floorplan');
        if (floorplanImage) floorplanImage.src = content.floorplanImage;

        // Update language switcher UI
        document.querySelectorAll('.lang-switcher a').forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('lang') === lang) {
                a.classList.add('active');
            }
        });

        // Set language attribute on the root HTML element
        document.documentElement.lang = lang;

        updateDynamicLink();

        // Store selected language
        localStorage.setItem('preferredLanguage', lang);
    }

    // === FINAL: Function to show the animated image modal ===
    function showImageInModal(src) {
        // 1. Create all modal elements from scratch
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';

        const contentDiv = document.createElement('div');
        contentDiv.className = 'modal-content';

        const modalImage = document.createElement('img');
        modalImage.src = src;

        const closeBtn = document.createElement('span');
        closeBtn.className = 'modal-close';
        closeBtn.innerHTML = '&times;';

        // 2. Assemble the modal and add it to the page's body
        contentDiv.appendChild(modalImage);
        overlay.appendChild(contentDiv);
        overlay.appendChild(closeBtn);
        document.body.appendChild(overlay);

        // 3. Trigger the fade-in animation by adding the 'visible' class
        // We use a tiny timeout to ensure the browser registers the element before starting the transition.
        setTimeout(() => {
            overlay.classList.add('visible');
        }, 10);

        // 4. Function to close and animate out the modal
        function closeModal() {
            overlay.classList.remove('visible'); // This triggers the fade-out animation

            // After the animation finishes, remove the element from the page
            overlay.addEventListener('transitionend', function() {
                if (document.body.contains(overlay)) {
                    document.body.removeChild(overlay);
                }
            }, { once: true }); // The listener is automatically removed after it runs once
        }

        // 5. Add event listeners to trigger the closeModal function
        overlay.addEventListener('click', function(e) {
            // Close only if the dark background or the X is clicked
            if (e.target === overlay || e.target === closeBtn) {
                closeModal();
            }
        });

        document.addEventListener('keydown', function handleEscape(e) {
            if (e.key === 'Escape') {
                closeModal();
                // Important: Clean up this specific listener to avoid multiple listeners piling up
                document.removeEventListener('keydown', handleEscape);
            }
        });
    }
    // ==============================================================


    // --- EVENT LISTENERS & INITIALIZATION ---

    // Language switcher logic
    // Add event listener to all language switchers (desktop header and mobile sidebar)
    document.querySelectorAll('.lang-switcher').forEach(switcher => {
        switcher.addEventListener('click', function (e) {
            e.preventDefault();
            const target = e.target.closest('a');
            if (target && !target.classList.contains('active')) {
                const lang = target.getAttribute('lang');
                renderContent(lang);
            }
        });
    });

    // Dynamic links
    function updateDynamicLink() {
        const link = document.getElementById('link-loetschental');

        if (!link) {
            return;
        }

        const currentLang = document.documentElement.lang || 'de';
        link.href = `https://www.loetschental.ch/${currentLang}/`;
    }

    // Highlight active navigation link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.main-nav a').forEach(a => {
        const linkPage = a.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            a.classList.add('active');
        }
    });

    // Set copyright year
    const copyrightYear = document.getElementById('copyright-year');
    if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear();
    }

    // Initial content render
    const savedLang = localStorage.getItem('preferredLanguage') || 'de';
    renderContent(savedLang);
});
