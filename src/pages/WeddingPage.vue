<template>
  <div class="wedding-page">
    <div class="spacer-top"></div>

    <!-- Section 1: Intro -->
    <section class="section intro-section">
      <div class="container text-center fade-in-up">
        <div class="decorative-line center-align"><span>UBUD JUNGLE VIEW RESORT</span></div>
        <h1 class="page-title">Puspaka Sky Wedding Chapel</h1>
        <p class="page-desc">
          Perched gracefully above the verdant tropical valley, the Puspaka Sky Wedding Chapel at Ubud Jungle View is a sublime canvas for celebrating matters of the heart. This alluring bamboo pavilion offers an intimate haven where couples can exchange their vows, surrounded by the lush embrace of nature and cherished by their closest loved ones. At Ubud Jungle View, our professional team is ready to orchestrate an unforgettable experience for your ultimate wedding day, ensuring that every moment unfolds with enchantment and grace.
        </p>
      </div>
    </section>

    <!-- Section 2: Banner Image -->
    <section class="banner-section fade-in-up">
      <div class="container">
        <img src="/images/wedding.png" alt="Wedding Chapel" class="full-banner-img" />
      </div>
    </section>

    <!-- Section 3: Package Details -->
    <section class="section package-section bg-light">
      <div class="container">
        <div class="package-layout fade-in-up">
          <div class="package-info">
            <h2 class="package-title">Enchanting Wedding<br>Blessing Package</h2>
            <div class="package-price">Rp 55.000.000++</div>
            <div class="line-divider"></div>
          </div>
          <div class="package-image">
            <img src="/images/meeting.png" alt="Wedding Setup" />
          </div>
        </div>

        <div class="package-inclusions fade-in-up">
          <div class="inclusion-col">
            <ul>
              <li>Ceremony led by an English-speaking celebrant</li>
              <li>Commemorative ceremonial certificate (non-legal)</li>
              <li>Exclusive wedding venue at our Puspaka Sky Wedding Chapel</li>
              <li>Elegant contemporary bamboo decorations</li>
              <li>Stylish bridal bouquet and groom boutonniere</li>
            </ul>
          </div>
          <div class="inclusion-col">
            <ul>
              <li>1-tiered wedding cake</li>
              <li>Live acoustic music during dinner</li>
              <li>1 time 6-courses exquisite & romantic candle light dinner</li>
              <li>2 nights stay at our Ubud Jungle Suite</li>
              <li>Return airport transfer for the couple</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4: Inquiry Form -->
    <section class="section form-section">
      <div class="container">
        <div class="form-wrapper fade-in-up">
          <div class="text-center" style="margin-bottom: 40px;">
            <h2 style="font-family: var(--font-heading); font-size: 2.2rem;">Plan Your Dream Wedding</h2>
            <p style="color: var(--color-text-light);">Let us know your details, and our wedding specialist will assist you.</p>
          </div>

          <form class="inquiry-form" @submit.prevent="submitForm">
            <div class="form-row">
              <div class="form-group">
                <label>Name <span>*</span></label>
                <div class="name-inputs">
                  <input type="text" placeholder="First Name" required />
                  <input type="text" placeholder="Last Name" required />
                </div>
              </div>
            </div>

            <div class="form-row grid-2">
              <div class="form-group">
                <label>Email <span>*</span></label>
                <input type="email" placeholder="example@email.com" required />
              </div>
              <div class="form-group">
                <label>Nationality <span>*</span></label>
                <select required>
                  <option value="" disabled selected>--- Select Choice ---</option>
                  <option value="ID">Indonesia</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="AU">Australia</option>
                  <option value="OTHER">Other</option>
                </select>
              </div>
            </div>

            <div class="form-row grid-2">
              <div class="form-group">
                <label>WhatsApp Number (if any) <span>*</span></label>
                <input type="tel" placeholder="+62..." required />
              </div>
              <div class="form-group">
                <label>Preferred Date <span>*</span></label>
                <input type="date" required />
              </div>
            </div>

            <div class="form-row grid-2">
              <div class="form-group">
                <label>Estimate Number of Guest(s) <span>*</span></label>
                <input type="number" placeholder="e.g. 50" required />
              </div>
              <div class="form-group">
                <label>Estimate Budget <span>*</span></label>
                <input type="text" placeholder="e.g. $5,000" required />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label>Messages <span>*</span></label>
                <textarea rows="5" placeholder="Tell us more about your dream wedding..." required></textarea>
              </div>
            </div>

            <div class="form-submit text-center">
              <button type="submit" class="btn-submit">SEND INQUIRY</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'WeddingPage',
  methods: {
    submitForm() {
      alert('Thank you for your inquiry. Our wedding specialist will contact you soon!');
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  }
}
</script>

<style scoped>
.wedding-page {
  background: var(--color-bg);
}

.spacer-top {
  height: calc(var(--nav-height) + 60px);
}

.text-center {
  text-align: center;
}

/* Intro Section */
.intro-section {
  padding-bottom: 40px;
}

.center-align {
  justify-content: center;
  margin-bottom: 20px;
}
.center-align span {
  font-size: 0.8rem;
  letter-spacing: 3px;
  color: var(--color-text-light);
}

.page-title {
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  margin-bottom: 24px;
  color: var(--color-text);
}

.page-desc {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--color-text-light);
  max-width: 900px;
  margin: 0 auto;
}

/* Banner Section */
.banner-section {
  padding-bottom: 80px;
}

.full-banner-img {
  width: 100%;
  height: 60vh;
  min-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: var(--shadow-md);
}

/* Package Section */
.bg-light {
  background: var(--color-bg-light);
}

.package-section {
  padding: 80px 0;
}

.package-layout {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 60px;
  align-items: center;
  margin-bottom: 60px;
}

.package-title {
  font-family: var(--font-heading);
  font-size: clamp(2.2rem, 3vw, 2.8rem);
  color: var(--color-text);
  line-height: 1.2;
  margin-bottom: 10px;
}

.package-price {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  color: var(--color-text-light);
  margin-bottom: 24px;
}

.line-divider {
  width: 80px;
  height: 1px;
  background: var(--color-gold);
}

.package-image img {
  width: 100%;
  height: 450px;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: var(--shadow-md);
}

.package-inclusions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.inclusion-col ul {
  list-style: none;
  padding: 0;
}

.inclusion-col li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 12px;
  font-size: 0.95rem;
  color: var(--color-text-light);
  line-height: 1.6;
}

.inclusion-col li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--color-gold);
}

/* Form Section */
.form-section {
  padding: 80px 0;
}

.form-wrapper {
  max-width: 800px;
  margin: 0 auto;
  background: #fff;
  padding: 50px;
  border-radius: 8px;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--color-border);
}

.inquiry-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text);
}

.form-group label span {
  color: #d9534f; /* red for required */
}

.name-inputs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

input, select, textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: var(--color-text);
  background: #fafafa;
  transition: all 0.3s ease;
}

input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: var(--color-gold);
  background: #fff;
  box-shadow: 0 0 0 2px rgba(188, 152, 106, 0.1);
}

.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.btn-submit {
  margin-top: 20px;
  background: var(--color-primary);
  color: var(--color-white);
  border: none;
  padding: 16px 40px;
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 2px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-submit:hover {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

/* Responsive */
@media (max-width: 768px) {
  .package-layout {
    grid-template-columns: 1fr;
  }
  .package-inclusions {
    grid-template-columns: 1fr;
  }
  .grid-2 {
    grid-template-columns: 1fr;
  }
  .form-wrapper {
    padding: 30px 20px;
  }
}
</style>
