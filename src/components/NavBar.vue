<template>
  <nav :class="['navbar', { scrolled: isScrolled || forceSolid, 'menu-open': isMobileMenuOpen }]">
    <div class="nav-container">
      <!-- Logo -->
      <router-link to="/" class="nav-logo" id="nav-logo">
        <svg class="logo-icon" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 2C20 2 8 12 8 24C8 32 13 38 20 40C27 38 32 32 32 24C32 12 20 2 20 2Z" 
                :stroke="(isScrolled || forceSolid) ? '#333' : '#fff'" stroke-width="1.5" fill="none"/>
          <line x1="20" y1="40" x2="20" y2="48" :stroke="(isScrolled || forceSolid) ? '#333' : '#fff'" stroke-width="1.5"/>
          <line x1="14" y1="45" x2="26" y2="45" :stroke="(isScrolled || forceSolid) ? '#333' : '#fff'" stroke-width="1"/>
          <circle cx="20" cy="18" r="3" :fill="(isScrolled || forceSolid) ? '#8B7355' : '#fff'" opacity="0.7"/>
          <path d="M20 22C18 26 16 28 16 30C16 32 18 34 20 34C22 34 24 32 24 30C24 28 22 26 20 22Z" 
                :fill="(isScrolled || forceSolid) ? '#8B7355' : '#fff'" opacity="0.5"/>
        </svg>
        <div class="logo-text">
          <span class="logo-name">ubud jungle</span>
          <span class="logo-sub">view resort</span>
        </div>
      </router-link>

      <!-- Desktop Navigation + Actions in one row -->
      <div class="nav-right">
        <div class="nav-menu" id="nav-menu">
          <div v-for="item in menuItems" :key="item.label" class="nav-item" :id="'nav-item-' + item.label.toLowerCase().replace(/\s+/g, '-')">
            <router-link v-if="item.to" :to="item.to" class="nav-link">
              {{ item.label }}
              <svg v-if="item.children" class="dropdown-icon" width="8" height="5" viewBox="0 0 10 6">
                <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" fill="none"/>
              </svg>
            </router-link>
            <a v-else :href="item.href" class="nav-link">
              {{ item.label }}
              <svg v-if="item.children" class="dropdown-icon" width="8" height="5" viewBox="0 0 10 6">
                <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" fill="none"/>
              </svg>
            </a>
            <div v-if="item.children" class="dropdown">
              <template v-for="child in item.children" :key="child.label || child">
                <router-link v-if="child.to" :to="child.to" class="dropdown-link">
                  {{ child.label || child }}
                </router-link>
                <a v-else :href="'#' + (child.label || child).toLowerCase().replace(/\s+/g, '-')" class="dropdown-link">
                  {{ child.label || child }}
                </a>
              </template>
            </div>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="nav-actions">
          <a href="#" class="nav-btn nav-btn-outline" id="btn-royal-retreat">ROYAL<br>RETREAT</a>
          <a href="#" class="nav-btn nav-btn-primary" id="btn-book-now">BOOK<br>NOW</a>
        </div>
      </div>

      <!-- Mobile Toggle -->
      <button class="mobile-toggle" @click="toggleMobileMenu" id="mobile-toggle" aria-label="Toggle menu">
        <span :class="['toggle-bar', { active: isMobileMenuOpen }]"></span>
        <span :class="['toggle-bar', { active: isMobileMenuOpen }]"></span>
        <span :class="['toggle-bar', { active: isMobileMenuOpen }]"></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide-down">
      <div v-if="isMobileMenuOpen" class="mobile-menu" id="mobile-menu">
        <div v-for="item in menuItems" :key="item.label" class="mobile-item">
          <div class="mobile-link-wrapper" @click="item.children ? toggleMobileSubmenu(item.label) : null">
            <router-link v-if="item.to && !item.children" :to="item.to" class="mobile-link" @click="closeMobile">{{ item.label }}</router-link>
            <a v-else-if="!item.to && !item.children" :href="item.href" class="mobile-link" @click="closeMobile">{{ item.label }}</a>
            <span v-else class="mobile-link mobile-link-parent">
              {{ item.label }}
              <svg :class="['dropdown-icon-mobile', { 'rotated': expandedMobileItem === item.label }]" width="10" height="6" viewBox="0 0 10 6">
                <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" fill="none"/>
              </svg>
            </span>
          </div>
          
          <div v-if="item.children" v-show="expandedMobileItem === item.label" class="mobile-submenu">
            <template v-for="child in item.children" :key="child.label || child">
              <router-link v-if="child.to" :to="child.to" class="mobile-sublink" @click="closeMobile">
                {{ child.label || child }}
              </router-link>
              <a v-else :href="'#' + (child.label || child).toLowerCase().replace(/\s+/g, '-')" class="mobile-sublink" @click="closeMobile">
                {{ child.label || child }}
              </a>
            </template>
          </div>
        </div>
        <div class="mobile-actions">
          <a href="#" class="nav-btn nav-btn-outline" @click="closeMobile">ROYAL RETREAT</a>
          <a href="#" class="nav-btn nav-btn-primary" @click="closeMobile">BOOK NOW</a>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isScrolled: false,
      forceSolid: false,
      isMobileMenuOpen: false,
      expandedMobileItem: null,
      menuItems: [
        {
          label: 'SERVICES',
          to: '/our-services',
          children: [
            { label: 'Our Services', to: '/our-services' },
            { label: 'Luxury Services', to: '/page/luxury-services' }
          ]
        },
        {
          label: 'ACCOMMODATIONS',
          to: '/accommodations/ubud-jungle-suite',
          children: [
            { label: 'Ubud Jungle Suite', to: '/accommodations/ubud-jungle-suite' },
            { label: 'Jungle Pool Villas', to: '/accommodations/jungle-pool-villas' },
            { label: 'Valley Pool Villas', to: '/accommodations/valley-pool-villas' },
            { label: 'Premier Pool Villas', to: '/accommodations/premier-pool-villas' },
            { label: 'Royal Pool Villas', to: '/accommodations/royal-pool-villas' }
          ]
        },
        {
          label: 'DINING',
          to: '/dining/kepitu-restaurant',
          children: [
            { label: 'KePitu Restaurant', to: '/dining/kepitu-restaurant' },
            { label: 'KePitu Bar & Lounge', to: '/dining/kepitu-bar-lounge' },
            { label: 'Wanna Jungle Pool & Bar', to: '/dining/wanna-jungle-pool-bar' },
            { label: 'Room Service', to: '/dining/room-service' }
          ]
        },
        {
          label: 'WELLNESS & ENTERTAINMENT',
          to: '/wellness/serayu-wellness',
          children: [
            { label: 'Serayu Wellness', to: '/wellness/serayu-wellness' },
            { label: 'Spiritual Sojourn', to: '/wellness/spiritual-sojourn' },
            { label: 'Wellness Activities', to: '/wellness/wellness-activities' },
            { label: 'Gym & Recreation', to: '/wellness/gym-recreation' }
          ]
        },
        { label: 'WEDDINGS', to: '/page/weddings' },
        { label: 'EVENTS', to: '/page/events' },
        {
          label: 'PACKAGES',
          to: '/packages/sacred-love-getaway',
          children: [
            { label: 'Sacred Love Getaway', to: '/packages/sacred-love-getaway' },
            { label: 'Luxury Honeymoon Package', to: '/packages/luxury-honeymoon-package' }
          ]
        }
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.checkForceSolid(this.$route)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  watch: {
    $route(to) {
      this.checkForceSolid(to)
    }
  },
  methods: {
    checkForceSolid(route) {
      const path = route.path || '';
      if (path === '/page/luxury-services' || path === '/page/weddings') {
        this.forceSolid = true;
      } else {
        this.forceSolid = false;
      }
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    toggleMobileSubmenu(label) {
      if (this.expandedMobileItem === label) {
        this.expandedMobileItem = null;
      } else {
        this.expandedMobileItem = label;
      }
    },
    closeMobile() {
      this.isMobileMenuOpen = false
    }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 0 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: transparent;
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(12px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--nav-height);
}

/* Logo */
.nav-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  flex-shrink: 0;
}

.logo-icon {
  width: 30px;
  height: 38px;
  transition: all 0.3s ease;
}

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.15;
}

.logo-name {
  font-family: var(--font-heading);
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-white);
  transition: color 0.3s ease;
  text-transform: lowercase;
}

.logo-sub {
  font-family: var(--font-heading);
  font-size: 0.6rem;
  color: rgba(255, 255, 255, 0.75);
  letter-spacing: 1.5px;
  text-transform: lowercase;
  transition: color 0.3s ease;
}

.scrolled .logo-name {
  color: var(--color-text);
}

.scrolled .logo-sub {
  color: var(--color-text-light);
}

/* Right side: nav + buttons */
.nav-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Navigation Menu */
.nav-menu {
  display: flex;
  align-items: center;
  gap: 0;
}

.nav-item {
  position: relative;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 3px;
  padding: 8px 9px;
  font-family: var(--font-body);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--color-white);
  transition: color 0.3s ease;
  white-space: nowrap;
}

.scrolled .nav-link {
  color: var(--color-text);
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--color-gold);
}

.dropdown-icon {
  transition: transform 0.3s ease;
}

.nav-item:hover .dropdown-icon {
  transform: rotate(180deg);
}

/* Dropdown */
.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(12px);
  border-radius: 6px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.12);
  padding: 6px 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(8px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-item:hover .dropdown {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-link {
  display: block;
  padding: 9px 18px;
  font-size: 0.82rem;
  color: var(--color-text);
  transition: all 0.2s ease;
}

.dropdown-link:hover,
.dropdown-link.router-link-active {
  background: var(--color-bg-light);
  color: var(--color-primary);
  padding-left: 24px;
}

/* CTA Buttons */
.nav-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  margin-left: 4px;
}

.nav-btn {
  padding: 8px 14px;
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-radius: 2px;
  white-space: nowrap;
  text-align: center;
  line-height: 1.4;
}

.nav-btn-outline {
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: var(--color-white);
  background: transparent;
}

.scrolled .nav-btn-outline {
  border-color: var(--color-text);
  color: var(--color-text);
  background: transparent;
}

.nav-btn-outline:hover {
  background: rgba(255, 255, 255, 0.15);
}

.scrolled .nav-btn-outline:hover {
  background: var(--color-text);
  color: var(--color-white);
}

.nav-btn-primary {
  background: var(--color-primary);
  color: var(--color-white);
  border: 1px solid var(--color-primary);
}

.nav-btn-primary:hover {
  background: var(--color-primary-dark);
  border-color: var(--color-primary-dark);
}

/* Mobile Toggle */
.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  padding: 8px;
}

.toggle-bar {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-white);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.scrolled .toggle-bar {
  background: var(--color-text);
}

.toggle-bar.active:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.toggle-bar.active:nth-child(2) {
  opacity: 0;
}

.toggle-bar.active:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile Menu */
.mobile-menu {
  display: none;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(12px);
  padding: 20px 24px 30px;
  border-top: 1px solid var(--color-border);
  max-height: calc(100vh - 60px);
  overflow-y: auto;
}

.mobile-link {
  display: block;
  padding: 14px 0;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--color-text);
  border-bottom: 1px solid var(--color-border);
  text-decoration: none;
}

.mobile-link-parent {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.dropdown-icon-mobile {
  transition: transform 0.3s ease;
}

.dropdown-icon-mobile.rotated {
  transform: rotate(180deg);
}

.mobile-submenu {
  background: var(--color-bg-light);
  padding: 5px 0;
}

.mobile-sublink {
  display: block;
  padding: 12px 16px;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-text-light);
  border-bottom: 1px dashed var(--color-border);
  text-decoration: none;
}

.mobile-sublink:last-child {
  border-bottom: none;
}

.mobile-sublink:hover, .mobile-sublink.router-link-active {
  color: var(--color-primary);
}

.mobile-link:hover {
  color: var(--color-primary);
}

.mobile-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}

.mobile-actions .nav-btn {
  text-align: center;
  font-size: 0.72rem;
  padding: 12px 18px;
}

.mobile-actions .nav-btn-outline {
  border-color: var(--color-text);
  color: var(--color-text);
  background: transparent;
}

/* Slide animation */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Responsive */
@media (max-width: 1024px) {
  .navbar {
    padding: 0 16px;
  }

  .nav-right {
    display: none;
  }

  .mobile-toggle {
    display: flex;
  }

  .mobile-menu {
    display: block;
  }
}
</style>
