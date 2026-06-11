<template>
  <div :class="['service-card', { reversed: reversed }]" ref="card" :id="'service-' + slugTitle">
    <div class="card-inner">
      <!-- Image Side -->
      <div class="card-image-wrapper">
        <div class="card-image-container" ref="imageContainer">
          <img 
            :src="$asset(image)" 
            :alt="title + ' at Ubud Jungle View'" 
            class="card-image"
            loading="lazy"
          />
          <div class="image-overlay"></div>
        </div>
      </div>

      <!-- Content Side -->
      <div class="card-content" ref="content">
        <div class="content-inner">
          <h2 class="card-title">{{ title }}</h2>
          <div class="title-underline"></div>
          <p class="card-description">{{ description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    reversed: { type: Boolean, default: false }
  },
  computed: {
    slugTitle() {
      return this.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    }
  },
  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )
    observer.observe(this.$refs.card)
  }
}
</script>

<style scoped>
.service-card {
  padding: 30px 0;
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.9s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.card-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 400px;
  padding: 0 24px;
}

/* Image Side */
.card-image-wrapper {
  position: relative;
  overflow: hidden;
}

.card-image-container {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 380px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover .card-image {
  transform: scale(1.04);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0,0,0,0.02), rgba(0,0,0,0.08));
  transition: opacity 0.4s ease;
}

.service-card:hover .image-overlay {
  opacity: 0;
}

/* Content Side */
.card-content {
  display: flex;
  align-items: flex-start;
  padding: 40px 50px;
  background: var(--color-bg);
  position: relative;
}

.content-inner {
  width: 100%;
}

.card-title {
  font-family: var(--font-heading);
  font-size: clamp(1.6rem, 2.5vw, 2.2rem);
  font-weight: 400;
  color: var(--color-text);
  margin-bottom: 16px;
  letter-spacing: 0.5px;
}

.title-underline {
  width: 50px;
  height: 2px;
  background: var(--color-primary);
  margin-bottom: 28px;
  transition: width 0.4s ease;
}

.service-card:hover .title-underline {
  width: 80px;
}

.card-description {
  font-family: var(--font-body);
  font-size: 0.95rem;
  line-height: 1.9;
  color: var(--color-text-light);
  text-align: justify;
  hyphens: auto;
}

/* Reversed Layout — image on right */
.reversed .card-inner {
  direction: rtl;
}

.reversed .card-inner > * {
  direction: ltr;
}

.reversed .card-content {
  padding: 40px 50px;
}

/* Alternating background tint for reversed cards */
.reversed .card-content {
  background: var(--color-bg);
}

/* Shadow effect on content box overlapping image */
.card-content {
  box-shadow: var(--color-bg) 0px 0px 0px 0px;
  z-index: 1;
}

/* Responsive */
@media (max-width: 900px) {
  .card-inner {
    grid-template-columns: 1fr;
  }

  .reversed .card-inner {
    direction: ltr;
  }

  .card-image-container {
    min-height: 280px;
  }

  .card-content {
    padding: 30px 24px;
  }

  .reversed .card-content {
    padding: 30px 24px;
  }
}

@media (max-width: 480px) {
  .card-image-container {
    min-height: 220px;
  }

  .card-content {
    padding: 24px 16px;
  }

  .card-description {
    font-size: 0.9rem;
    text-align: left;
  }
}
</style>
