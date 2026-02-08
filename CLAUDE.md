# The Distance We Run - Documentary Film Website

## Project Overview
Website for "The Distance We Run," a Vermont documentary following Chip Piper, a father who lost his son Michael to an opioid overdose and channels his grief into ultramarathon trail running and founding Trail Run 4 Recovery.

## Tech Stack
- **Framework:** Astro v5.17.1
- **Styling:** Tailwind CSS with PostCSS
- **Fonts:** Inter (sans) + Playfair Display (serif)
- **Node:** v22.13.1 (located at `~/.local/node-v22.13.1-darwin-x64/bin/`)

## Running the Dev Server
```bash
export PATH="/Users/coreyhendrickson/.local/node-v22.13.1-darwin-x64/bin:$PATH"
npm run dev
```
Dev site: http://localhost:4321/

## Deployment
- **GitHub repo:** git@github.com:coreyhendrickson1975/dwr.git
- **Hosting:** Cloudflare Pages (auto-deploys from GitHub on push)
- **Auth:** SSH key (`~/.ssh/id_ed25519`)

## Push workflow
```bash
git add <files>
git commit -m "description"
git push
```
Cloudflare automatically builds and deploys after each push.

## Project Structure
```
src/
  components/
    SiteHeader.astro        - Fixed nav header with scroll effect
    HeroSection.astro       - Video banner (Chip_RUN30_Banner_web.mp4) with title overlay
    LoglineSection.astro    - One-line film logline
    FilmSummarySection.astro - Detailed film summary (white bg, dark text)
    ThreeActsSection.astro  - Three-act story structure
    TopicSummarySection.astro - Topic overview
    QuoteSection.astro      - Chip Piper quote (light gray bg)
    GallerySection.astro    - 4x3 image grid with lightbox modal (12 DWR_ images)
    ContributorsSection.astro - 4-column contributor cards with photos
    DistributionSection.astro - Distribution strategy (white bg, dark text)
    FilmTeamSection.astro   - Filmmaker bio with photo (Corey Hendrickson)
    SiteFooter.astro        - Footer with contact, social links
  layouts/
    Layout.astro            - Base HTML layout with SEO meta tags
  pages/
    index.astro             - Main page assembling all sections
  styles/
    globals.css             - Global styles and CSS variables
public/
  images/                   - All photos, gallery images, and video
```

## Page Section Order
1. SiteHeader (fixed nav)
2. HeroSection (video banner)
3. LoglineSection
4. FilmSummarySection
5. ThreeActsSection
6. TopicSummarySection
7. QuoteSection (Chip's quote)
8. GallerySection (4x3 grid)
9. ContributorsSection (Chip, Dawn & Greg, Danielle, Andy)
10. DistributionSection
11. FilmTeamSection (Corey Hendrickson)
12. SiteFooter

## Contributors
1. **Chip Piper** - Athlete & Founder TR4R (photo: CHIP.jpg)
2. **Dawn and Greg Tatro** - Founders of Jenna's Promise (photo: greg-dawn-2.jpg, object-position: top)
3. **Danielle Wallace** - Executive Director, Turning Point Center Addison County (photo: danielle-wallace.jpg.webp)
4. **Andy Weinberg** - Founder of The Endurance Society (photo: Andy_Weinberg_01.jpg, object-position: center 15%)

## Image Assets
- Gallery images: DWR_01.jpg through DWR_12.jpg (from ~/Desktop/dwr_webimages/)
- Hero video: Chip_RUN30_Banner_web.mp4
- Contributor photos sourced from ~/Desktop/dwr_webimages/

## Contact Info
- Email: studio@coreyhendrickson.com
- Social: Instagram, YouTube

## SEO
Keywords: documentary film, Vermont, New England, opioid recovery, fentanyl crisis, trail running, ultramarathon, ultra running, endurance, community, addiction recovery, substance use disorder, Trail Run 4 Recovery, grief, healing
