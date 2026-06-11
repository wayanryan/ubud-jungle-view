<template>
  <div id="app">
    <NavBar />
    <main>
      <router-view />
    </main>
    <FooterSection />

    <!-- Global Lightbox -->
    <transition name="lightbox-fade">
      <div v-if="selectedImage" class="global-lightbox" @click="selectedImage = null">
        <button class="lightbox-close" aria-label="Close" @click.stop="selectedImage = null">&times;</button>
        <img :src="selectedImage" alt="Enlarged view" @click.stop />
      </div>
    </transition>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    FooterSection
  },
  data() {
    return {
      selectedImage: null
    }
  },
  mounted() {
    this.setupGlobalFeatures();
  },
  methods: {
    setupGlobalFeatures() {
      // Intersection Observer for fade-in animations
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Unobserve after it becomes visible so it stays visible
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      // Global click listener for images
      document.body.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG' && 
            !e.target.closest('.no-lightbox') && 
            !e.target.closest('.navbar')) {
          this.selectedImage = e.target.src;
        }
      });

      // Mutation Observer to watch for newly added elements (e.g. via Vue Router)
      const mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
          mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1) { // Element node
              if (node.classList && node.classList.contains('fade-in-up')) {
                observer.observe(node);
              }
              const children = node.querySelectorAll('.fade-in-up');
              children.forEach(child => observer.observe(child));
            }
          });
        });
      });
      mutationObserver.observe(document.body, { childList: true, subtree: true });

      // Observe any existing elements on initial load
      document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
    }
  }
}
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

/* Global Animations */
.fade-in-up {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: opacity, transform;
}

.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Global Lightbox */
.global-lightbox {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.92);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: zoom-out;
  backdrop-filter: blur(5px);
}

.global-lightbox img {
  max-width: 90%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 4px;
  cursor: default;
  box-shadow: 0 10px 40px rgba(0,0,0,0.5);
}

.lightbox-close {
  position: absolute;
  top: 25px; right: 35px;
  background: transparent;
  color: rgba(255, 255, 255, 0.7);
  border: none;
  font-size: 3.5rem;
  font-weight: 300;
  cursor: pointer;
  line-height: 1;
  transition: color 0.3s;
}

.lightbox-close:hover {
  color: #fff;
}

/* Lightbox Fade Transition */
.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
}
</style>

