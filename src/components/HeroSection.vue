<template>
  <section class="hero" id="hero-section">
    <div class="hero-image-wrapper">
      <img 
        src="/images/hero-banner.png" 
        alt="Luxury resort experience at Ubud Jungle View" 
        class="hero-image"
      />
      <div class="hero-overlay"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 55vh;
  min-height: 400px;
  max-height: 600px;
  overflow: hidden;
}

.hero-image-wrapper {
  position: absolute;
  inset: 0;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.35) 0%,
    rgba(0, 0, 0, 0.1) 40%,
    rgba(0, 0, 0, 0.05) 70%,
    rgba(0, 0, 0, 0.15) 100%
  );
}

@media (max-width: 768px) {
  .hero {
    height: 45vh;
    min-height: 300px;
  }
}
</style>
