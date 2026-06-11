<template>
  <div class="home">
    <!-- Hero -->
    <section class="home-hero" id="home-hero">
      <img src="/images/11.jpg" alt="Ubud Jungle View" class="home-hero-img" />
      <div class="home-hero-overlay"></div>
    </section>

    <!-- Welcome -->
    <section class="welcome section" id="welcome">
      <div class="container">
        <div class="welcome-grid">
          <div class="welcome-left fade-in-up" ref="welcomeLeft">
            <div class="welcome-subtitle-line">
              <span class="welcome-subtitle">TRULY UBUD ESCAPE</span>
              <span class="subtitle-line"></span>
            </div>
            <h1 class="welcome-title">Ubud Jungle<br>View Resort</h1>
          </div>
          <div class="welcome-right fade-in-up" ref="welcomeRight">
            <p class="welcome-text">Welcome to Ubud Jungle View, a mystical, eco-conscious sanctuary cradled in the heart of nature's enchantment. Lose yourself within the therapeutic atmosphere in the magical embrace of this jungle haven, where the air carries whispers of ancient secrets and healing vibrations. Our accommodations seamlessly merge luxury with the mystical surroundings, providing a tranquil cocoon of serenity. Let the vibrant symphony of exotic birds and rustling leaves be your guide as you step into a realm where time slows, worries dissipate, and Ubud Jungle View unfolds as a portal to a spellbinding journey of reawakening and rejuvenation.</p>
            <p class="welcome-note">* Children below 15 years old, senior citizen/people who are having mobility issues, drone, durian and pet are not permitted in our resort due to our concept are set for Honeymooner, Romance, Healing, Relaxation &amp; for safety reasons.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Accommodations -->
    <section class="accommodations section" id="accommodations">
      <div class="container">
        <div class="section-header fade-in-up">
          <div class="decorative-line"><span>RELAX &amp; RECHARGE</span></div>
          <h2 class="section-title">Accommodations</h2>
        </div>
        <div class="accom-carousel fade-in-up">
          <div class="accom-track" :style="{ transform: 'translateX(-' + accomIndex * 100 + '%)' }">
            <div v-for="accom in accommodations" :key="accom.name" class="accom-slide">
              <div class="accom-card">
                <img :src="$asset(accom.image)" :alt="accom.name" class="accom-img" />
                <div class="accom-info">
                  <h3>{{ accom.name }}</h3>
                  <p>{{ accom.desc }}</p>
                  <router-link :to="accom.link" class="btn-link">Read More</router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-nav">
            <button @click="prevAccom" class="carousel-btn" aria-label="Previous">&lsaquo;</button>
            <button @click="nextAccom" class="carousel-btn" aria-label="Next">&rsaquo;</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Dining -->
    <section class="dining section" id="dining">
      <div class="container">
        <div class="dining-grid">
          <div class="dining-left fade-in-up">
            <div class="dining-subtitle-line">
              <span class="dining-subtitle">UBUD JUNGLE VIEW RESORT</span>
              <span class="subtitle-line"></span>
            </div>
            <h2 class="dining-title">Dining</h2>
            <ul class="dining-list">
              <li v-for="item in diningItems" :key="item">
                <a href="#">{{ item }}</a>
              </li>
            </ul>
            <a href="#" class="btn-outline">EXPLORE</a>
          </div>
          <div class="dining-right fade-in-up">
            <div class="dining-carousel">
              <div class="dining-track" :style="{ transform: 'translateX(-' + diningIndex * 100 + '%)' }">
                <div v-for="d in diningSlides" :key="d.name" class="dining-slide">
                  <img :src="$asset(d.image)" :alt="d.name" class="dining-img" />
                  <h4 class="dining-slide-title">{{ d.name }}</h4>
                </div>
              </div>
              <div class="carousel-nav carousel-nav-right">
                <button @click="prevDining" class="carousel-btn" aria-label="Previous">&lsaquo;</button>
                <button @click="nextDining" class="carousel-btn" aria-label="Next">&rsaquo;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Meeting & Wedding -->
    <section class="events section" id="events">
      <div class="container fade-in-up">
        <div class="events-grid">
          <!-- Meeting Card -->
          <div class="event-card">
            <div class="event-image-wrapper">
              <img src="/images/14.jpg" alt="Meeting at Ubud Jungle View" class="event-img" />
              <div class="event-img-overlay"></div>
              <h3 class="event-img-title">Meeting</h3>
            </div>
            <div class="event-content">
              <div class="event-subtitle-line">
                <span class="event-subtitle">UBUD JUNGLE VIEW RESORT</span>
                <span class="subtitle-line"></span>
              </div>
              <h3 class="event-title">Meeting</h3>
              <p class="event-desc">Perfect for private meetings, corporate seminars, and confidential negotiations. Our exclusive venue provides a serene jungle setting with world-class facilities.</p>
              <a href="#" class="btn-details">DETAILS</a>
            </div>
          </div>

          <!-- Wedding Card -->
          <div class="event-card">
            <div class="event-image-wrapper">
              <img src="/images/13.jpg" alt="Wedding at Ubud Jungle View" class="event-img" />
              <div class="event-img-overlay"></div>
              <h3 class="event-img-title">Puspaka Sky Wedding Chapel</h3>
              <p class="event-img-price">📅 Wedding Package Start From Rp 40.000.000++</p>
            </div>
            <div class="event-content">
              <div class="event-subtitle-line">
                <span class="event-subtitle">UBUD JUNGLE VIEW RESORT</span>
                <span class="subtitle-line"></span>
              </div>
              <h3 class="event-title">Wedding</h3>
              <p class="event-desc">Elevated high above the natural splendour of a tropical valley, Puspaka Sky Wedding Chapel is a picture-perfect setting for celebrations of the heart.</p>
              <a href="#" class="btn-details">DETAILS</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Special Packages -->
    <section class="packages section" id="packages">
      <div class="container">
        <div class="section-header fade-in-up">
          <h2 class="section-title">Special Packages</h2>
          <p class="section-desc">Ubud Jungle View has been created to take guests on a journey that stimulates the senses. Peaceful sounds of singing birds, wind chimes and the gentle flow of water drift across the valley. Tropical flowers and incense fill the air with exotic fragrances.</p>
        </div>
        <div class="packages-grid fade-in-up">
          <a href="#" v-for="pkg in packages" :key="pkg.name" class="package-card">
            <img :src="$asset(pkg.image)" :alt="pkg.name" class="package-img" />
            <div class="package-overlay">
              <h3>{{ pkg.name }}</h3>
              <p>{{ pkg.desc }}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      accomIndex: 0,
      diningIndex: 0,
      accommodations: [
        { name: 'Ubud Jungle Suite', desc: '63 sqm – Living area with sofa – Bathtub – Balcony overlooking the jungle and valley', image: '/images/11.jpg', link: '/accommodations/ubud-jungle-suite' },
        { name: 'Jungle Pool Villas', desc: '100 sqm – Living area with sofa – Own plunge pool – Personal patio overlooking the Jungle', image: '/images/12.jpg', link: '#' },
        { name: 'Valley Pool Villas', desc: '100 sqm – Living area with sofa – Private pool – Personal patio overlooking the valley', image: '/images/13.jpg' },
        { name: 'Premier Pool Villas', desc: '150 sqm – Living area with sofa – Personal jacuzzi – Personal patio overlooking the Jungle', image: '/images/14.jpg' },
        { name: 'Royal Pool Villas', desc: '200 sqm – One exclusive bedrooms – Private kitchen set – Spacious personal patio overlooking the Jungle', image: '/images/15.jpg' }
      ],
      diningItems: ['KePitu Restaurant', 'KePitu Bar & Lounge', 'Wanna Jungle Pool & Bar', 'Room Service', 'The Canyon Jetty Restaurant', 'Sky Lounge', 'Wanna Luwih'],
      diningSlides: [
        { name: 'KePitu Restaurant', image: '/images/3.jpg' },
        { name: 'KePitu Bar & Lounge', image: '/images/13.jpg' },
        { name: 'Wanna Jungle Pool & Bar', image: '/images/11.jpg' }
      ],
      packages: [
        { name: 'Sacred Love Getaway', desc: 'Escape into a romantic retreat designed for couples seeking meaningful moments together amidst the tranquility of nature.', image: '/images/12.jpg' },
        { name: 'Luxury Honeymoon Escape', desc: 'Craft an unforgettable romantic escape amidst the majestic jungle scenery and a dreamy ambiance.', image: '/images/15.jpg' }
      ]
    }
  },
  methods: {
    nextAccom() { this.accomIndex = (this.accomIndex + 1) % this.accommodations.length },
    prevAccom() { this.accomIndex = (this.accomIndex - 1 + this.accommodations.length) % this.accommodations.length },
    nextDining() { this.diningIndex = (this.diningIndex + 1) % this.diningSlides.length },
    prevDining() { this.diningIndex = (this.diningIndex - 1 + this.diningSlides.length) % this.diningSlides.length }
  }
}
</script>

<style scoped>
/* Hero */
.home-hero { position: relative; width: 100%; height: 65vh; min-height: 450px; overflow: hidden; }
.home-hero-img { width: 100%; height: 100%; object-fit: cover; object-position: center 30%; }
.home-hero-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.2) 100%); }

/* Welcome */
.welcome { padding: 80px 0; }
.welcome-grid { display: grid; grid-template-columns: 1fr 1.4fr; gap: 60px; align-items: start; }
.welcome-subtitle-line { display: flex; align-items: center; gap: 14px; margin-bottom: 16px; }
.welcome-subtitle { font-family: var(--font-body); font-size: 0.75rem; letter-spacing: 3px; text-transform: uppercase; color: var(--color-primary); white-space: nowrap; }
.subtitle-line { height: 1px; width: 50px; background: var(--color-primary); }
.welcome-title { font-family: var(--font-heading); font-size: clamp(2rem, 3.5vw, 2.8rem); font-weight: 400; color: var(--color-text); line-height: 1.25; }
.welcome-text { font-size: 0.95rem; line-height: 1.85; color: var(--color-text-light); text-align: justify; margin-bottom: 24px; }
.welcome-note { font-style: italic; font-size: 0.88rem; line-height: 1.7; color: var(--color-text-muted); }

/* Section Header */
.section-header { text-align: center; margin-bottom: 40px; }
.section-title { font-family: var(--font-heading); font-size: clamp(2rem, 3.5vw, 2.8rem); font-weight: 400; margin-top: 10px; }
.section-desc { max-width: 700px; margin: 16px auto 0; font-size: 0.95rem; color: var(--color-text-light); text-align: center; line-height: 1.8; }

/* Accommodations Carousel */
.accom-carousel { position: relative; overflow: hidden; border-radius: 6px; }
.accom-track { display: flex; transition: transform 0.6s cubic-bezier(0.4,0,0.2,1); }
.accom-slide { min-width: 100%; }
.accom-card { position: relative; height: 450px; overflow: hidden; }
.accom-img { width: 100%; height: 100%; object-fit: cover; }
.accom-info { position: absolute; bottom: 0; left: 0; right: 0; padding: 30px 30px 28px; background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.2) 80%, transparent 100%); color: #fff; }
.accom-info h3 { font-family: var(--font-body); font-size: 1.6rem; margin-bottom: 8px; text-shadow: 0 2px 12px rgba(0,0,0,1), 0 0 6px rgba(0,0,0,1); font-weight: 700; letter-spacing: 0.5px; color: #fff; }
.accom-info p { font-size: 0.9rem; margin-bottom: 12px; text-shadow: 0 1px 8px rgba(0,0,0,1), 0 0 4px rgba(0,0,0,0.9); font-weight: 400; color: #fff; }
.btn-link { font-size: 0.8rem; letter-spacing: 1px; text-transform: uppercase; color: var(--color-gold); border-bottom: 1px solid var(--color-gold); padding-bottom: 2px; }
.btn-link:hover { color: #fff; border-color: #fff; }

/* Carousel Nav */
.carousel-nav { position: absolute; bottom: 20px; right: 20px; display: flex; gap: 8px; }
.carousel-btn { width: 40px; height: 40px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.5); background: rgba(0,0,0,0.3); color: #fff; font-size: 1.4rem; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.3s; }
.carousel-btn:hover { background: rgba(255,255,255,0.2); border-color: #fff; }

/* Dining */
.dining { background: var(--color-bg); }
.dining-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 50px; align-items: start; }
.dining-subtitle-line { display: flex; align-items: center; gap: 14px; margin-bottom: 10px; }
.dining-subtitle { font-family: var(--font-body); font-size: 0.72rem; letter-spacing: 3px; text-transform: uppercase; color: var(--color-primary); }
.dining-title { font-family: var(--font-heading); font-size: clamp(1.8rem, 3vw, 2.5rem); font-weight: 400; margin-bottom: 20px; }
.dining-list { margin-bottom: 24px; }
.dining-list li { padding: 6px 0; }
.dining-list li::before { content: '•'; color: var(--color-primary); margin-right: 10px; }
.dining-list a { font-size: 0.95rem; color: var(--color-text-light); }
.dining-list a:hover { color: var(--color-primary); }
.btn-outline { display: inline-block; padding: 12px 28px; border: 1px solid var(--color-text); font-size: 0.72rem; font-weight: 700; letter-spacing: 2px; color: var(--color-text); transition: all 0.3s; }
.btn-outline:hover { background: var(--color-text); color: #fff; }

/* Dining Carousel */
.dining-carousel { position: relative; overflow: hidden; border-radius: 6px; }
.dining-track { display: flex; transition: transform 0.6s cubic-bezier(0.4,0,0.2,1); }
.dining-slide { min-width: 100%; position: relative; }
.dining-img { width: 100%; height: 380px; object-fit: cover; }
.dining-slide-title { position: absolute; bottom: 20px; left: 20px; font-family: var(--font-heading); font-size: 1.4rem; color: #fff; text-shadow: 0 2px 8px rgba(0,0,0,0.5); }
.carousel-nav-right { bottom: 16px; right: 16px; }

/* Events - Meeting & Wedding */
.events { background: var(--color-bg); }
.events-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
.event-card { display: flex; flex-direction: column; }
.event-image-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  height: 320px;
}
.event-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}
.event-card:hover .event-img { transform: scale(1.05); }
.event-img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.05) 100%);
}
.event-img-title {
  position: absolute;
  bottom: 50px;
  left: 24px;
  right: 24px;
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 400;
  color: #fff;
  text-shadow: 0 2px 10px rgba(0,0,0,0.5);
}
.event-img-price {
  position: absolute;
  bottom: 20px;
  left: 24px;
  right: 24px;
  font-size: 0.82rem;
  color: #fff;
  text-shadow: 0 1px 6px rgba(0,0,0,0.5);
}
.event-content { padding: 24px 0; }
.event-subtitle-line {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 10px;
}
.event-subtitle {
  font-family: var(--font-body);
  font-size: 0.72rem;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--color-text-muted);
  white-space: nowrap;
}
.event-title {
  font-family: var(--font-heading);
  font-size: clamp(1.6rem, 2.5vw, 2rem);
  font-weight: 400;
  color: var(--color-text);
  margin-bottom: 12px;
}
.event-desc {
  font-size: 0.93rem;
  line-height: 1.75;
  color: var(--color-text-light);
  margin-bottom: 20px;
}
.btn-details {
  display: inline-block;
  padding: 10px 28px;
  border: 1px solid var(--color-text);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: var(--color-text);
  text-transform: uppercase;
  transition: all 0.3s ease;
}
.btn-details:hover {
  background: var(--color-text);
  color: #fff;
}

/* Packages */
.packages { background: var(--color-bg-light); }
.packages-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.package-card { position: relative; height: 400px; overflow: hidden; border-radius: 6px; display: block; }
.package-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
.package-card:hover .package-img { transform: scale(1.05); }
.package-overlay { position: absolute; bottom: 0; left: 0; right: 0; padding: 30px 30px 28px; background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.2) 80%, transparent 100%); color: #fff; }
.package-overlay h3 { font-family: var(--font-body); font-size: 1.4rem; margin-bottom: 8px; text-shadow: 0 2px 12px rgba(0,0,0,1), 0 0 6px rgba(0,0,0,1); font-weight: 700; letter-spacing: 0.5px; color: #fff; }
.package-overlay p { font-size: 0.88rem; line-height: 1.6; text-shadow: 0 1px 8px rgba(0,0,0,1), 0 0 4px rgba(0,0,0,0.9); font-weight: 400; color: #fff; }

/* Responsive */
@media (max-width: 900px) {
  .welcome-grid, .dining-grid { grid-template-columns: 1fr; gap: 30px; }
  .packages-grid, .events-grid { grid-template-columns: 1fr; }
  .accom-card { height: 350px; }
  .package-card { height: 300px; }
  .home-hero { height: 50vh; }
}
@media (max-width: 480px) {
  .welcome { padding: 50px 0; }
  .accom-card { height: 280px; }
  .dining-img { height: 260px; }
  .event-image-wrapper { height: 240px; }
}
</style>
