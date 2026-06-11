<template>
  <div class="content-page" v-if="pageData">
    <!-- Layout: Hero (Default) -->
    <template v-if="!pageData.layout || pageData.layout === 'hero'">
      <section class="room-hero">
        <img :src="$asset(pageData.heroImage)" :alt="pageData.title" class="hero-img" />
        <div class="hero-overlay"></div>
      </section>

      <!-- Content Details for Hero -->
      <section class="section room-details">
        <div class="container">
          <div class="room-header text-center fade-in-up">
            <div class="decorative-line"><span>{{ pageData.category }}</span></div>
            <h1 class="room-title">{{ pageData.title }}</h1>
            <p class="room-desc">{{ pageData.description }}</p>
          </div>
        </div>
      </section>
    </template>

    <!-- Layout: Side-by-side (Like Services) -->
    <template v-else-if="pageData.layout === 'side-by-side'">
      <div class="spacer-top"></div>
      <section class="section">
        <div class="container">
          <div class="sbs-layout">
            <div class="sbs-image">
              <img :src="$asset(pageData.heroImage)" :alt="pageData.title" />
            </div>
            <div class="sbs-content fade-in-up">
              <h1 class="sbs-title">{{ pageData.title }}</h1>
              <div class="decorative-line left-align"><span></span></div>
              <p class="sbs-desc">{{ pageData.description }}</p>
            </div>
          </div>
        </div>
      </section>
    </template>

    <!-- Layout: Text Only Top (Like Wellness) -->
    <template v-else-if="pageData.layout === 'text'">
      <section class="room-hero">
        <img :src="$asset(pageData.heroImage)" :alt="pageData.title" class="hero-img" />
        <div class="hero-overlay"></div>
      </section>
      <section class="section room-details">
        <div class="container">
          <div class="room-header text-left fade-in-up">
            <div class="category-text">{{ pageData.category === 'WELLNESS & ENTERTAINMENT' ? 'UBUD JUNGLE VIEW RESORT' : pageData.category }}</div>
            <div class="decorative-line left-align" style="margin-bottom: 20px;"><span></span></div>
            <h1 class="room-title" style="text-align: left;">{{ pageData.title }}</h1>
            <p class="room-desc" style="text-align: left; margin: 0;">{{ pageData.description }}</p>
          </div>
        </div>
      </section>
    </template>

    <!-- Shared Specs Section (Features & Inclusions) -->
    <section class="section room-specs-section" v-if="pageData.features || pageData.inclusions">
      <div class="container">
        <div class="room-specs fade-in-up">
          <div class="spec-column" v-if="pageData.features">
            <h3>Highlights / Features</h3>
            <ul>
              <li v-for="(feature, index) in pageData.features" :key="'f'+index">{{ feature }}</li>
            </ul>
          </div>
          <div class="spec-column" v-if="pageData.inclusions">
            <h3>Inclusions / Details</h3>
            <ul>
              <li v-for="(inc, index) in pageData.inclusions" :key="'i'+index">{{ inc }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="section room-gallery bg-light" v-if="pageData.gallery && pageData.gallery.length > 0">
      <div class="container">
        <div class="gallery-grid">
          <img v-for="(img, index) in pageData.gallery" :key="index" :src="$asset(img)" :alt="'Gallery image ' + (index + 1)" />
        </div>
      </div>
    </section>
  </div>
  <div v-else class="content-page not-found">
    <div class="container text-center" style="padding: 150px 0;">
      <h1>Page Not Found</h1>
      <p>Sorry, the content you are looking for does not exist.</p>
      <br>
      <router-link to="/" class="btn-link">Back to Home</router-link>
    </div>
  </div>
</template>

<script>
import { pagesData } from '../data/pagesData.js'

export default {
  name: 'ContentPage',
  data() {
    return {
      pagesData
    }
  },
  computed: {
    pageData() {
      const slug = this.$route.params.slug
      return this.pagesData[slug]
    }
  },
  watch: {
    // When route changes, scroll to top
    '$route'() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
.content-page {
  background: var(--color-bg);
}

.room-hero {
  position: relative;
  width: 100%;
  height: 70vh;
  min-height: 500px;
  overflow: hidden;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.1);
}

.room-details {
  max-width: 1000px;
  margin: 0 auto;
}

.room-header {
  margin-bottom: 60px;
}

.room-title {
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  margin-bottom: 24px;
}

.room-desc {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--color-text-light);
  max-width: 800px;
  margin: 0 auto;
}

.text-center {
  text-align: center;
}

.room-specs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  background: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--color-border);
}

/* Fallback if only 1 column */
.room-specs:has(.spec-column:only-child) {
  grid-template-columns: 1fr;
  max-width: 600px;
  margin: 0 auto;
}

.spec-column h3 {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--color-border);
}

.spec-column ul {
  list-style: none;
  padding: 0;
}

.spec-column li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 12px;
  font-size: 0.95rem;
  color: var(--color-text-light);
}

.spec-column li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--color-primary);
}

.bg-light {
  background: var(--color-bg-light);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
}

.gallery-grid img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 4px;
  transition: transform 0.3s ease;
}

.gallery-grid img:hover {
  transform: scale(1.02);
}

.btn-link {
  font-size: 0.8rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--color-gold);
  border-bottom: 1px solid var(--color-gold);
  padding-bottom: 2px;
  text-decoration: none;
}

@media (max-width: 768px) {
  .room-specs {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 24px;
  }
  .sbs-layout {
    grid-template-columns: 1fr;
  }
}

/* New Layout Styles */
.spacer-top {
  height: calc(var(--nav-height) + 40px);
}

.sbs-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

.sbs-image img {
  width: 100%;
  height: auto;
  min-height: 400px;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: var(--shadow-md);
}

.sbs-title {
  font-family: var(--font-heading);
  font-size: clamp(2.2rem, 3.5vw, 3rem);
  margin-bottom: 16px;
  color: var(--color-text);
}

.sbs-desc {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--color-text-light);
}

.left-align {
  justify-content: flex-start;
  margin-bottom: 24px;
}
.left-align span::before, .left-align span::after {
  display: none;
}
.left-align span {
  padding: 0;
  border-bottom: 1px solid var(--color-gold);
  width: 60px;
  display: block;
}

.category-text {
  font-size: 0.8rem;
  letter-spacing: 2px;
  color: var(--color-text-light);
  text-transform: uppercase;
  margin-bottom: 10px;
}
</style>
