<template>
  <div class="room-page">
    <!-- Hero Banner -->
    <section class="room-hero">
      <img src="/images/12.jpg" alt="Ubud Jungle Suite" class="hero-img" />
      <div class="hero-overlay">
        <!-- Optional back/forward controls can be added here -->
      </div>
    </section>

    <!-- Room Details -->
    <section class="section room-details">
      <div class="container">
        <div class="room-header text-center fade-in-up">
          <div class="decorative-line"><span>ACCOMMODATION</span></div>
          <h1 class="room-title">Ubud Jungle Suite</h1>
          <p class="room-desc">
            Nestled from its elevated vantage point, the Ubud Jungle Suite unveils a mesmerizing panorama of verdant tropical splendor. A sanctuary of enchantment, this sophisticated abode boasts a design-driven decor and exclusive amenities, meticulously curated to elevate the tapestry of personal comfort. Each moment within this elevated haven is a spellbinding journey, where the embrace of lush greenery unfolds like a captivating story, inviting guests to immerse themselves in the enchanting allure of the Ubud Jungle Suite.
          </p>
        </div>

        <div class="room-specs fade-in-up">
          <div class="spec-column">
            <h3>Room Features</h3>
            <ul>
              <li>Bedroom Size: 63 sqm</li>
              <li>Living area with sofa</li>
              <li>Bathroom with bathtub</li>
              <li>Balcony overlooking the jungle and valley</li>
              <li>Luxury bathroom amenities</li>
              <li>Tea & coffee making facilities</li>
              <li>Mini bar</li>
              <li>Electronic safe deposit box</li>
              <li>Complimentary bottled mineral water</li>
              <li>LED cable TV</li>
              <li>In house movie</li>
              <li>Free wireless internet</li>
            </ul>
          </div>
          <div class="spec-column">
            <h3>Rate Inclusion</h3>
            <ul>
              <li>Accommodation</li>
              <li>Daily breakfast for 2 pax</li>
              <li>Seasonal fruits basket</li>
              <li>Fresh Flower vase upon arrival</li>
              <li>Unlimited access to the Wanna Jungle Pool and Bar</li>
              <li>Daily Yoga class</li>
              <li>Daily morning walk to the village</li>
              <li>Free scheduled shuttle to/from Ubud center</li>
              <li>Daily Balinese genuine activities</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Placeholder -->
    <section class="section room-gallery bg-light">
      <div class="container">
        <div class="gallery-grid">
          <img src="/images/11.jpg" alt="Gallery 1" />
          <img src="/images/2.jpg" alt="Gallery 2" />
          <img src="/images/3.jpg" alt="Gallery 3" />
          <img src="/images/7.jpg" alt="Gallery 4" />
          <img src="/images/8.jpg" alt="Gallery 5" />
          <img src="/images/5.jpg" alt="Gallery 6" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'RoomPage'
}
</script>

<style scoped>
.room-page {
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

@media (max-width: 768px) {
  .room-specs {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 24px;
  }
}
</style>
