// ===================================================================================
// GLOBAL SCRIPT FOR ALPEN-WOHNUNG
// Handles language switching and dynamic content rendering.
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
            if (translateKey && siteContent[lang] && siteContent[lang][translateKey]) {
                const value = siteContent[lang][translateKey];

                // Default case for simple strings
                if (typeof value === 'string') {
                    el.innerHTML = value;
                }
                // Handle arrays of strings (e.g., availability, contact data, included items)
                else if (Array.isArray(value)) {
                    if (translateKey === 'info_value_included') {
                        el.innerHTML = value.map(item => `<span class="bullet">•</span> ${item}`).join('<br>');
                    } else {
                        el.innerHTML = value.join('<br>');
                    }
                }
                // Handle the kitchen object {intro, items}
                else if (translateKey === 'info_value_kitchen' && typeof value === 'object' && value.intro && value.items) {
                    const kitchenHtml = value.items.map(item => `<br><span class="bullet">•</span> ${item}`).join('');
                    el.innerHTML = value.intro + kitchenHtml;
                }
            }

            // Handle title attributes
            const titleKey = el.getAttribute('data-translate-title');
            if (titleKey && siteContent[lang] && siteContent[lang][titleKey]) {
                el.title = siteContent[lang][titleKey];
            }
        });

        // --- DYNAMIC CONTENT (only if elements exist on the current page) ---

        // Create image gallery
        const galleryContainer = document.getElementById('gallery-container');
        if (galleryContainer) {
            galleryContainer.innerHTML = ''; // Clear gallery before rebuilding
            siteContent.galleryImages.forEach(src => {
                const item = document.createElement('div');
                item.className = 'gallery-item';
                const img = document.createElement('img');
                img.src = src;
                img.alt = siteContent[lang].home_gallery_title || 'Impression';
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
        if (locationImage) locationImage.src = siteContent.locationImage;

        const floorplanImage = document.getElementById('image-floorplan');
        if (floorplanImage) floorplanImage.src = siteContent.floorplanImage;

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
