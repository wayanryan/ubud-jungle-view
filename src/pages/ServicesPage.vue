<template>
  <div class="services-page">
    <HeroSection />
    <ServiceSection />
    <div class="services-list">
      <ServiceCard
        v-for="(service, index) in services"
        :key="service.title"
        :title="service.title"
        :description="service.description"
        :image="service.image"
        :reversed="index % 2 !== 0"
      />
    </div>
  </div>
</template>

<script>
import HeroSection from '../components/HeroSection.vue'
import ServiceSection from '../components/ServiceSection.vue'
import ServiceCard from '../components/ServiceCard.vue'

export default {
  name: 'ServicesPage',
  components: {
    HeroSection,
    ServiceSection,
    ServiceCard
  },
  data() {
    return {
      services: [
        {
          title: 'Room Service',
          description:
            'To ensure that guests feel totally at home during their stay at Ubud Jungle View, an in-villa dining service is available around the clock. A comprehensive menu of delicious food items has been created to please all appetites. From light bites to more substantial dishes for breakfast, lunch or dinner, satisfaction is just one phone call away. Every order will be prepared and delivered by our food and beverage team at any given time of the day or night. Our guests are always at home at Ubud Jungle View – and their In Room Dining experience is no exception. Room Service is one of the best things about staying at a hotel. Luxury is the two of you being able to have a lie-in on Sunday morning, hear a knock on the door and know that it is your breakfast being served.',
          image: '/images/room-service.png'
        },
        {
          title: 'Butler Service',
          description:
            'Embark on a narrative of unparalleled luxury at Ubud Jungle View, where our exclusive butler service weaves a tapestry of personalized indulgence. A butler stands ready with a warm Balinese smile, poised to transform your stay into an extraordinary journey. This isn\'t just service; it\'s a commitment to anticipate your every need and fulfill desires you never knew you had. From arranging seamless reservations to ensuring your wardrobe is impeccably laundered, your butler becomes a luxury concierge, attending to every detail gracefully. Whether it\'s the delicate serving of afternoon tea or the discreet assurance that all is in perfect order, the butler service at Ubud Jungle View is a symphony of Surprise and Delight.',
          image: '/images/butler-service.png'
        },
        {
          title: 'Laundry Services',
          description:
            'Entrust your garments to us, and our dedicated team will dispatch them to our trusted local laundry partner, ensuring meticulous care that aligns with your needs. Find the Laundry Price List conveniently available in your room, offering transparent insights into our services. To safeguard your delicate fabrics, particularly those adorned with silk or intricate details, communicate any special care instructions directly to our staff. Elevate the precision by separating your dry-cleaning items from regular laundry, and ensure our staff comprehends that these items demand exclusive dry-cleaning treatment. Your personalized care is paramount, and we strive to present all charges to you in a clear manner.',
          image: '/images/laundry-service.png'
        },
        {
          title: 'Taxi & Shuttle Service',
          description:
            'Discover seamless transportation at our hotel with our exclusive transfer services. Enhancing our commitment to your convenience, we proudly partner with the local village transportation community to ensure a comprehensive and reliable transportation experience for our valued guests. Whether you\'re embarking on a city tour or need a swift airport transfer, our fleet and collaborative efforts guarantee a smooth and efficient journey throughout your stay. Indulge in convenience with our complimentary shuttle service, designed to whisk you from the resort to the heart of Ubud and back. Located at the Ubud parking central on Jln. Suweta, our shuttle ensures seamless transfers, making your city exploration effortlessly accessible.',
          image: '/images/shuttle-service.png'
        }
      ]
    }
  }
}
</script>

<style scoped>
.services-list {
  padding-bottom: 60px;
  background: var(--color-bg);
}
</style>
