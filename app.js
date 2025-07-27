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
        home_intro: 'Herzlich willkommen in unserer gemütlichen 2-Zimmer-Ferienwohnung in Wiler, im Herzen des magischen Lötschentals. Geniessen Sie die atemberaubende Bergwelt, unzählige Wanderwege und die authentische Walliser Kultur. Unsere Wohnung ist der perfekte Ausgangspunkt für Ihre Abenteuer in den Schweizer Alpen.',
        home_details: 'Diese 2014 komplett renovierte Ferienwohnung (neue Küche, Bad, 3-fach-Verglasung) ist Ihr idealer Ausgangspunkt im schneesicheren Skigebiet Lauchernalp. Die Talstation der Luftseilbahn ist nur 10 Gehminuten entfernt. Dank der Bergstation auf 3\'300 m ist Schnee garantiert. Die Anreise mit dem ÖV (Bahn bis Goppenstein, dann Postauto) ist einfach und bequem.',
        home_availability_title: 'Verfügbarkeit',
        home_availability_text: [
            'Frei bis 01.12.2025',
            'Zudem dauerhaft verfügbar ab 01.05.2026'
        ],
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
        info_value_kitchen: {
            intro: 'Voll ausgestattet',
            items_bullet: ['Kaffeemaschine', 'Geschirrspüler', 'Fondue-Caquelon', 'Toaster']
        },
        info_feature_bathroom: 'Badezimmer:',
        info_value_bathroom: 'Dusche / WC',
        info_feature_balcony: 'Balkon:',
        info_value_balcony: 'Grosser Südbalkon mit Aussicht',
        info_feature_included: 'Inklusive:',
        info_value_included: {
            items_bullet: ['WLAN', 'TV', 'Parkplatz', 'Bettwäsche', 'Wasch- und Skiraum', '2 Betten', 'Schlafcouch']
        },
        info_feature_price: 'Preis pro Monat:',
        info_value_price: '990.- CHF',
        info_feature_tourist_tax: 'Kurtaxe:',
        info_value_tourist_tax: '144.- pro Jahr/Person',
        info_feature_rental_options: 'Mietmöglichkeiten:',
        info_value_rental_options: 'Saisonmiete oder Dauermiete',
        info_images_title: 'Lage & Grundriss',
        info_images_text: 'Die Wohnung befindet sich an zentraler und doch ruhiger Lage in Wiler.',
        live_title: 'Live-Webcam Chalet',
        live_text: 'Ein aktueller Blick ins Tal direkt aus dem Chalet.',
        live_sponsor: 'Webcam gesponsert von <a href="https://bitcoin-schweiz.ch">bitcoin-schweiz.ch</a>',
        link_time_lapse: '7-Tage-Rückschau',
        footer_contact_title: 'Kontakt & Adresse',
        footer_contact_data: [
            'Postfach 331',
            'Baanwaldstr 17 (Zum Graben 2)',
            '3918 Wiler'
        ],
        footer_google_maps_link: 'Auf Google Maps anzeigen',
        footer_google_maps_link_title: 'Standort auf Google Maps öffnen',
        footer_link: 'Entdecken Sie das magische Lötschental',

    },
    // --- ENGLISH TEXTS (EN) ---
    en: {
        site_title: 'Chalet Captain Thorpe',
        nav_home: 'Home',
        nav_info: 'Info',
        nav_live: 'Live',
        home_title: 'Welcome',
        home_intro: 'Welcome to our cozy 2-room holiday apartment in Wiler, in the heart of the magical Lötschental. Enjoy the breathtaking mountain scenery, countless hiking trails, and the authentic Valais culture. Our apartment is the perfect starting point for your adventures in the Swiss Alps.',
        home_details: 'This holiday apartment, fully renovated in 2014 (new kitchen, bathroom, triple-glazed windows), is your ideal base in the snow-sure Lauchernalp ski area. The cable car station is just a 10-minute walk away. With the mountain station at 3,300 m, snow is guaranteed. The apartment is easily accessible by public transport (train to Goppenstein, then PostBus).',
        home_availability_title: 'Availability',
        home_availability_text: [
            'Available until 01.12.2025',
            'Also permanently available from 01.05.2026'
        ],
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
        info_value_kitchen: {
            intro: 'Fully equipped',
            items_bullet: ['Coffee machine', 'Dishwasher', 'Fondue set', 'Toaster']
        },
        info_feature_bathroom: 'Bathroom:',
        info_value_bathroom: 'Shower / WC',
        info_feature_balcony: 'Balcony:',
        info_value_balcony: 'Large south-facing balcony with a view',
        info_feature_included: 'Included:',
        info_value_included: {
            items_bullet: ['WLAN', 'TV', 'Parking', 'Bed linen', 'Laundry and ski room', '2 beds', 'Sofa bed']
        },
        info_feature_price: 'Price per month:',
        info_value_price: '990.- CHF',
        info_feature_tourist_tax: 'Tourist tax:',
        info_value_tourist_tax: '144.- per year/person',
        info_feature_rental_options: 'Rental Options:',
        info_value_rental_options: 'Seasonal or long-term rental',
        info_images_title: 'Location & Floor Plan',
        info_images_text: 'The apartment is centrally yet quietly located in Wiler.',
        live_title: 'Live Webcam chalet',
        live_text: 'A current view of the valley directly from the chalet.',
        live_sponsor: 'Webcam sponsored by <a href="https://bitcoin-schweiz.ch">bitcoin-schweiz.ch</a>',
        link_time_lapse: '7-Day time lapse',
        footer_contact_title: 'Contact & Address',
        footer_contact_data: [
            'Postfach 331',
            'Baanwaldstr 17 (Zum Graben 2)',
            '3918 Wiler'
        ],
        footer_google_maps_link: 'Show on Google Maps',
        footer_google_maps_link_title: 'Open location on Google Maps',
        footer_link: 'Discover the magical Lötschental',
    },
    // --- FRENCH TEXTS (FR) ---
    fr: {
        site_title: 'Chalet Captain Thorpe',
        nav_home: 'Accueil',
        nav_info: 'Info',
        nav_live: 'Live',
        home_title: 'Bienvenue',
        home_intro: 'Bienvenue dans notre confortable appartement de vacances de 2 pièces à Wiler, au cœur du magique Lötschental. Profitez du paysage montagneux à couper le souffle, des innombrables sentiers de randonnée et de la culture valaisanne authentique. Notre appartement est le point de départ idéal pour vos aventures dans les Alpes suisses.',
        home_details: 'Cet appartement, entièrement rénové en 2014 (nouvelle cuisine, salle de bain, triple vitrage), est le point de départ idéal pour le domaine skiable de Lauchernalp, où l\'enneigement est garanti. La station de téléphérique n\'est qu\'à 10 minutes à pied. Avec une station supérieure à 3\'300 m d\'altitude, la neige est assurée. L\'accès en transports publics (train jusqu\'à Goppenstein, puis CarPostal) est simple et pratique.',
        home_availability_title: 'Disponibilité',
        home_availability_text: [
            'Libre jusqu\'au 01.12.2025',
            'Disponible en permanence à partir du 01.05.2026'
        ],
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
        info_value_kitchen: {
            intro: 'Entièrement équipée',
            items_bullet: ['Percolateur', 'Lave-vaisselle', 'Caquelon à fondue', 'Grille-pain']
        },
        info_feature_bathroom: 'Salle de bain:',
        info_value_bathroom: 'Douche / WC',
        info_feature_balcony: 'Balcon:',
        info_value_balcony: 'Grand balcon orienté sud avec vue',
        info_feature_included: 'Inclus:',
        info_value_included: {
            items_bullet: ['WLAN', 'TV', 'Parking', 'Linge de lit', 'Buanderie et local à skis', '2 lits', 'Canapé-lit']
        },
        info_feature_price: 'Prix par mois:',
        info_value_price: '990.- CHF',
        info_feature_tourist_tax: 'Taxe de séjour:',
        info_value_tourist_tax: '144.- par an/personne',
        info_feature_rental_options: 'Options de location:',
        info_value_rental_options: 'Location saisonnière ou à long terme',
        info_images_title: 'Emplacement & Plan',
        info_images_text: 'L\'appartement est situé dans un endroit central mais calme à Wiler.',
        live_title: 'Webcam en direct du chalet',
        live_text: 'Une vue actuelle de la vallée directement depuis le chalet.',
        live_sponsor: 'Webcam sponsorisée par <a href="https://bitcoin-schweiz.ch">bitcoin-schweiz.ch</a>',
        link_time_lapse: '7-jours de timelapse',
        footer_contact_title: 'Contact & Adresse',
        footer_contact_data: [
            'Postfach 331',
            'Baanwaldstr 17 (Zum Graben 2)',
            '3918 Wiler'
        ],
        footer_google_maps_link: 'Afficher sur Google Maps',
        footer_google_maps_link_title: 'Ouvrir l\'emplacement sur Google Maps',
        footer_link: 'Découvrez le magique Lötschental',
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
        // Update all elements with translatable attributes
        document.querySelectorAll('[data-translate], [data-translate-title]').forEach(el => {
            // Handle text content
            const translateKey = el.getAttribute('data-translate');
            if (translateKey && content[lang] && content[lang][translateKey]) {
                const value = content[lang][translateKey];

                // Default case for simple strings
                if (typeof value === 'string') {
                    el.innerHTML = value;
                }
                // NEW: Generic handler for bulleted lists
                else if (typeof value === 'object' && value !== null && Array.isArray(value.items_bullet)) {
                    let listHtml = value.items_bullet.map(item => `<span class="bullet">•</span> ${item}`).join('<br>');
                    if (value.intro) {
                        listHtml = value.intro + '<br>' + listHtml;
                    }
                    el.innerHTML = listHtml;
                }
                // Handle simple arrays (like availability, contact data)
                else if (Array.isArray(value)) {
                    el.innerHTML = value.join('<br>');
                }
            }

            // Handle title attributes
            const titleKey = el.getAttribute('data-translate-title');
            if (titleKey && content[lang] && content[lang][titleKey]) {
                el.title = content[lang][titleKey];
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
                img.addEventListener('click', function () {
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
            overlay.addEventListener('transitionend', function () {
                if (document.body.contains(overlay)) {
                    document.body.removeChild(overlay);
                }
            }, { once: true }); // The listener is automatically removed after it runs once
        }

        // 5. Add event listeners to trigger the closeModal function
        overlay.addEventListener('click', function (e) {
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
