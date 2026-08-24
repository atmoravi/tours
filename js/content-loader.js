/**
 * Dynamic Content Loader
 * Loads all content from JSON files and populates the HTML
 */

class ContentLoader {
  constructor() {
    this.content = {};
    this.contentPath = 'content/';
  }

  async init() {
    try {
      // Load all content files
      await Promise.all([
        this.loadJSON('header'),
        this.loadJSON('hero'),
        this.loadJSON('about'),
        this.loadJSON('methodology'),
        this.loadJSON('tours'),
        this.loadJSON('itinerary'),
        this.loadJSON('consultation'),
        this.loadJSON('testimonials'),
        this.loadJSON('faq')
      ]);

      this.populate();
      console.log('Content loaded successfully');
    } catch (error) {
      console.error('Failed to load content:', error);
    }
  }

  async loadJSON(name) {
    const response = await fetch(`${this.contentPath}${name}.json`);
    this.content[name] = await response.json();
  }

  populate() {
    this.populateHeader();
    this.populateHero();
    this.populateAbout();
    this.populateMethodology();
    this.populateTours();
    this.populateItinerary();
    this.populateConsultation();
    this.populateTestimonials();
    this.populateFAQ();
  }

  // Helper to set element text
  setText(selector, text) {
    const el = document.querySelector(selector);
    if (el) el.textContent = text;
  }

  // Helper to set element HTML
  setHTML(selector, html) {
    const el = document.querySelector(selector);
    if (el) el.innerHTML = html;
  }

  populateHeader() {
    const data = this.content.header;

    // Brand tagline
    document.querySelector('.brand-tagline')?.setAttribute('textContent', data.brand.tagline);
    const taglineEl = document.querySelector('[data-content="brand-tagline"]');
    if (taglineEl) taglineEl.textContent = data.brand.tagline;

    // Navigation
    const navLinks = document.querySelectorAll('nav a[href^="#"], .mobile-drawer a[href^="#"]');
    const headerNavLinks = data.nav_links;
    let linkIndex = 0;

    navLinks.forEach(link => {
      if (linkIndex < headerNavLinks.length) {
        link.textContent = headerNavLinks[linkIndex].label;
        linkIndex++;
      }
    });

    // CTA Button
    const primaryCtaBtn = document.querySelector('button[data-cta="primary"]');
    if (primaryCtaBtn) {
      primaryCtaBtn.querySelector('span').textContent = data.cta_primary.text;
    }

    const mobileCta = document.querySelector('button[data-cta="mobile"]');
    if (mobileCta) {
      mobileCta.textContent = data.mobile_cta.text;
    }
  }

  populateHero() {
    const data = this.content.hero;

    this.setText('[data-content="hero-badge"]', data.badge);
    this.setText('[data-content="hero-headline"]', data.headline);
    this.setText('[data-content="hero-subheading"]', data.subheading);

    // Primary CTA
    const primaryCta = document.querySelector('[data-content="hero-cta-primary"]');
    if (primaryCta) primaryCta.textContent = data.cta_primary.text;

    // Secondary CTA
    const secondaryCta = document.querySelector('[data-content="hero-cta-secondary"]');
    if (secondaryCta) secondaryCta.textContent = data.cta_secondary.text;

    // Value highlights
    data.value_highlights.forEach((highlight, idx) => {
      this.setText(`[data-content="value-title-${idx}"]`, highlight.title);
      this.setText(`[data-content="value-desc-${idx}"]`, highlight.description);
    });
  }

  populateAbout() {
    const data = this.content.about;

    this.setText('[data-content="about-label"]', data.section_label);
    this.setText('[data-content="about-headline"]', data.headline);
    this.setText('[data-content="about-name"]', data.profile.name);
    this.setText('[data-content="about-role"]', data.profile.role);
    this.setText('[data-content="about-badge"]', data.profile.title_badge);
    this.setText('[data-content="about-quote"]', data.profile.quote);
    this.setText('[data-content="about-bio-1"]', data.bio_paragraph_1);
    this.setText('[data-content="about-bio-2"]', data.bio_paragraph_2);
    this.setText('[data-content="core-distinction"]', data.core_distinction);

    // Expertise items
    data.expertise.forEach((item, idx) => {
      this.setText(`[data-content="expertise-title-${idx}"]`, item.title);
      this.setText(`[data-content="expertise-desc-${idx}"]`, item.description);
    });

    // Tags
    const tagContainer = document.querySelector('[data-content="about-tags"]');
    if (tagContainer) {
      tagContainer.innerHTML = data.profile.tags
        .map(tag => `<span class="text-[10px] bg-slate-800 text-slate-300 px-2.5 py-1 rounded-full border border-slate-700">${tag}</span>`)
        .join('');
    }
  }

  populateMethodology() {
    const data = this.content.methodology;

    this.setText('[data-content="methodology-label"]', data.section_label);
    this.setText('[data-content="methodology-headline"]', data.headline);
    this.setText('[data-content="methodology-intro"]', data.intro);

    // Benefits
    data.benefits.forEach((benefit, idx) => {
      this.setText(`[data-content="benefit-${idx}-title"]`, benefit.title);
      this.setText(`[data-content="benefit-${idx}-desc"]`, benefit.description);

      // Details
      benefit.details.forEach((detail, detailIdx) => {
        this.setText(`[data-content="benefit-${idx}-detail-${detailIdx}"]`, detail);
      });
    });
  }

  populateTours() {
    const data = this.content.tours;

    this.setText('[data-content="tours-label"]', data.section_label);
    this.setText('[data-content="tours-headline"]', data.headline);

    // Tours
    data.tours.forEach((tour, idx) => {
      this.setText(`[data-content="tour-${idx}-category"]`, tour.category);
      this.setText(`[data-content="tour-${idx}-title"]`, tour.title);
      this.setText(`[data-content="tour-${idx}-duration"]`, tour.duration);
      this.setText(`[data-content="tour-${idx}-desc"]`, tour.description);
      this.setText(`[data-content="tour-${idx}-button"]`, tour.button_text);

      // Details
      tour.details.forEach((detail, detailIdx) => {
        this.setText(`[data-content="tour-${idx}-detail-${detailIdx}-label"]`, detail.label);
        this.setText(`[data-content="tour-${idx}-detail-${detailIdx}-value"]`, detail.value);
      });

      if (tour.featured_label) {
        this.setText(`[data-content="tour-${idx}-featured"]`, tour.featured_label);
      }
    });
  }

  populateItinerary() {
    const data = this.content.itinerary;

    this.setText('[data-content="itinerary-label"]', data.section_label);
    this.setText('[data-content="itinerary-headline"]', data.headline);
    this.setText('[data-content="itinerary-intro"]', data.intro);

    // Phases
    data.phases.forEach((phase, idx) => {
      this.setText(`[data-content="phase-${idx}-tab"]`, phase.tab_title);
      this.setText(`[data-content="phase-${idx}-time"]`, phase.time);
      this.setText(`[data-content="phase-${idx}-title"]`, phase.title);
      this.setText(`[data-content="phase-${idx}-desc"]`, phase.description);

      // Meta
      phase.meta.forEach((meta, metaIdx) => {
        this.setText(`[data-content="phase-${idx}-meta-${metaIdx}"]`, meta);
      });
    });
  }

  populateConsultation() {
    const data = this.content.consultation;

    this.setText('[data-content="consultation-label"]', data.section_label);
    this.setText('[data-content="consultation-headline"]', data.headline);
    this.setText('[data-content="consultation-intro"]', data.intro);
    this.setText('[data-content="consultation-cta"]', data.cta.text);

    // Details
    data.details.forEach((detail, idx) => {
      this.setText(`[data-content="consultation-detail-${idx}-title"]`, detail.title);
      this.setText(`[data-content="consultation-detail-${idx}-value"]`, detail.value);
      this.setText(`[data-content="consultation-detail-${idx}-note"]`, detail.note);
    });

    // Status panel
    this.setText('[data-content="status-title"]', data.status_panel.title);
    this.setText('[data-content="status-desc"]', data.status_panel.description);
    this.setText('[data-content="status-hours"]', data.status_panel.hours);
    this.setText('[data-content="status-status"]', data.status_panel.status);
    this.setText('[data-content="status-note"]', data.status_panel.note);
  }

  populateTestimonials() {
    const data = this.content.testimonials;

    this.setText('[data-content="testimonials-label"]', data.section_label);
    this.setText('[data-content="testimonials-headline"]', data.headline);

    // Testimonials
    data.testimonials.forEach((testimonial, idx) => {
      this.setText(`[data-content="testimonial-${idx}-quote"]`, testimonial.quote);
      this.setText(`[data-content="testimonial-${idx}-name"]`, testimonial.name);
      this.setText(`[data-content="testimonial-${idx}-title"]`, testimonial.title);
    });
  }

  populateFAQ() {
    const data = this.content.faq;

    this.setText('[data-content="faq-label"]', data.section_label);
    this.setText('[data-content="faq-headline"]', data.headline);

    // FAQ items
    data.items.forEach((item, idx) => {
      this.setText(`[data-content="faq-${idx}-question"]`, item.question);
      this.setText(`[data-content="faq-${idx}-answer"]`, item.answer);
    });
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const loader = new ContentLoader();
  loader.init();
});
