<template>
  <div
    id="app"
    class="container-fluid">
    <Header />
    <Banner />
    <Sobrenosotros />
    <Contacto />
    <Mapa />
    <Footer />
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Banner from '@/components/Banner.vue'
  import Sobrenosotros from '@/components/Sobrenosotros.vue'
  import Contacto from '@/components/Contacto.vue'
  import Mapa from '@/components/Mapa.vue'
  import Footer from '@/components/Footer.vue'

  export default {
    components: {
      Header,
      Banner,
      Sobrenosotros,
      Contacto,
      Mapa,
      Footer
    }
  }
</script>

<style lang="scss">
  @import '@/scss/_base.scss';
</style>
