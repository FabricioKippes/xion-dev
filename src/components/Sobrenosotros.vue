<template>
  <div class="container my-5">
    <a id="nosotros" />
    <h1>Nuestro Equipo</h1>
    <hr>
    <div class="row mb-5">
      <b-img
        v-for="(foto, index) in equipo"
        :key="index"
        class="col-md-6 col-lg-4 px-5 py-3"
        :src="foto" />
    </div>
    <a id="servicios" />
    <h1>Nuestros Servicios</h1>
    <hr>
    <video
      class="mt-3"
      controls
      loop
      width="100%">
      <source
        src="~@/assets/servicios.mp4#t=0.1"
        type="video/mp4">
    </video>
    <h1 class="my-5">Trabajos Realizados</h1>
    <video
      class="mt-3"
      controls
      loop
      width="100%">
      <source
        src="~@/assets/SF-PresentacionProducto.mp4#t=0.1"
        type="video/mp4">
    </video>
    <div class="row border-top border-bottom py-5 my-5">
      <div class="col-md-12 col-lg-6">
        <h1>MISIÓN</h1>
        <hr>
        <p class="texto">
          Contribuir al crecimiento de nuestros clientes brindándoles soluciones informáticas de calidad,
          basadas en la innovación constante. Contamos con un equipo de trabajo altamente capacitados,
          con la motivación y el compromiso necesarios para proveer nuestros clientes lo que necesitan.
        </p>
      </div>
      <div class="col-md-12 col-lg-6 mt-5 mt-lg-0">
        <h1>VISIÓN</h1>
        <hr>
        <p class="texto">
          Ser una empresa líder en desarrollo de Software a nivel nacional e internacional,
          adaptándonos a las cambiantes condiciones de mercado y a las demandas y necesidades
          de cada cliente.</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        equipo: [
          require('@/assets/fabri.png'),
          require('@/assets/sandro.png'),
          require('@/assets/meli.png'),
          require('@/assets/karo.png'),
          require('@/assets/nico.png'),
          require('@/assets/mati.png'),
        ]
      }
    }
  }
</script>
