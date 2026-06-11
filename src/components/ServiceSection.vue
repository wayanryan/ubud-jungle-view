<template>
  <section class="service-heading section" id="services">
    <div class="container">
      <div class="heading-wrapper" ref="heading">
        <div class="decorative-line">
          <span>UBUD JUNGLE VIEW RESORT</span>
        </div>
        <h1 class="section-title">Our Services</h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServiceSection',
  data() {
    return {
      isVisible: false
    }
  },
  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isVisible = true
            this.$refs.heading.classList.add('animate')
          }
        })
      },
      { threshold: 0.3 }
    )
    observer.observe(this.$refs.heading)
  }
}
</script>

<style scoped>
.service-heading {
  padding: 70px 0 20px;
  background: var(--color-bg);
}

.heading-wrapper {
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.heading-wrapper.animate {
  opacity: 1;
  transform: translateY(0);
}

.section-title {
  font-family: var(--font-heading);
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  font-weight: 400;
  color: var(--color-text);
  margin-top: 12px;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .service-heading {
    padding: 50px 0 10px;
  }
}
</style>
