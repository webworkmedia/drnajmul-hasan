# Dr Najmul Hasan — Website

A responsive single-page doctor profile website built with plain HTML, CSS and JavaScript.

## Included in this version
- No logo icon in the header or footer — the doctor's name is the brand.
- Six-image professional journey gallery with no empty grid cell.
- Floating **বাংলা / English** button that instantly translates the key page information locally (no external translation service required).
- Appointment booking is handled only by calling the relevant chamber number.
- Responsive desktop, tablet and mobile layouts.
- SEO-ready page title, meta description, robots directives, canonical link, Open Graph/Twitter tags and Schema.org ProfilePage/Person structured data.
- Search-friendly image alt text, image dimensions, lazy loading and hero-image preload.
- Root `robots.txt` allows search-engine crawling.

## Deploy to GitHub Pages
1. Create a new GitHub repository.
2. Upload everything inside this folder, keeping the `assets` folder structure unchanged.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose `main` and `/ (root)`, then save.

## When the final main domain is connected
The website is already crawlable and the canonical URL is relative, so it resolves to the live domain automatically. For the best chance of appearing for searches such as **Dr Najmul Hasan**:

1. Connect the final custom domain and make sure HTTPS works.
2. Add the domain/property to **Google Search Console**.
3. Use **URL Inspection → Request Indexing** for the homepage.
4. Keep the same main domain consistently and redirect any alternate www/non-www version to it.
5. Add links to the website from verified/official profiles where appropriate (hospital profile, professional directories, Google Business Profile if eligible, etc.).
6. Once the exact live domain is known, create and submit a one-page `sitemap.xml` in Search Console. Do not deploy a sitemap with a placeholder domain.

SEO markup helps Google understand and crawl the website, but no website can guarantee a specific ranking or immediate appearance in search results. Indexing and ranking depend on Google, domain history, competition, authority and external references as well as on-page SEO.

## Main contact links
- Email: nhtituhasan@gmail.com
- BM&DC: A67050

## Editing
- Text/content and SEO metadata: `index.html`
- Colours/layout: `assets/style.css`
- Mobile menu / Bangla translation: `assets/script.js`
- Images: `assets/images/`
- Crawler access: `robots.txt`

No build process is required.

## Latest refinements
- Hero content is unchanged, but the layout has been reworked for a lighter premium presentation with a clearer hierarchy and compact credential card.
- Bangla mode uses natural Bangladeshi phrasing and converts displayed numerals, including consultation fees, chamber addresses, visiting times and phone numbers, to Bangla digits.
- Doctor-themed favicon files are included (`assets/favicon.svg`, `assets/favicon-64.png`, and `assets/apple-touch-icon.png`).

- Appointment CTAs direct visitors to the relevant chamber phone numbers only.
- The hero title and description no longer use the em dash character.
