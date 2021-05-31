<template>
  <div class="header-container">
    <div class="container">
      <img src="@/assets/logo.svg">
      <div id="nav">
        <a
          :class="{ 'active': active === 0 }"
          href="#nosotros">Sobre Nosotros</a>
        <a
          :class="{ 'active': active === 1 }"
          href="#servicios">Servicios</a>
        <a
          :class="{ 'active': active === 2 }"
          href="#contactanos">Contactanos</a>

        <a href="https://xiondev20.wordpress.com">Blog</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        servicios: undefined,
        contactanos: undefined,
        offset: 0
      }
    },

    computed: {
      active() {
        switch (true) {
          case (this.offset < this.servicios) : return 0
          case (this.offset >= this.servicios && this.offset < this.contactanos) : return 1
          default : return 2
        }
      }
    },

    mounted () {
      this.setPositions()
      this.setOffset()
      window.onresize = () => this.setPositions()
      window.onscroll = () => this.setOffset()
    },

    methods: {
      setOffset() {
        this.offset = window.scrollY
      },

      setPositions() {
        this.servicios = document.getElementById('servicios').offsetTop - 120
        this.contactanos = document.getElementById('contactanos').offsetTop - 120
      }
    }
  }
</script>

<style lang="scss">
  .header-container {
    top: 0px;
    left: 0px;
    right: 0;
    background-color: #070415;
    position: fixed;
    z-index: 2000;

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 2rem;
      padding-bottom: 2rem;

      @media screen and (max-width: 670px) {
        flex-direction: column;
      }
    }

    img {
      width: auto;
      height: 2rem;

      @media screen and (max-width: 768px) {
        height: 1rem;
      }

      @media screen and (max-width: 670px) {
        margin-bottom: 2rem;
        height: 1.5rem;
      }
    }

    #nav {
      @media screen and (max-width: 670px) {
        border-top: 1px solid $gris-medio;
        padding-top: 1rem;
      }

      a {
        color: $blanco;
        font-weight: 600;

        &:not(:last-child) {
          margin-right: 5rem;

          @media screen and (max-width: 960px) {
            margin-right: 3rem;
          }
        }

        &:hover {
          color: $primary;
          text-decoration: none;
        }

        &.active {
          color: $primary;
        }
      }
    }
  }
</style>
