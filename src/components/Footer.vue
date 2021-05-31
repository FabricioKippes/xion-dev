<template>
  <div id="footer">
    <span v-text="copyright" />
    <span
      class="mx-3"
      v-text="'-'" />
    <img src="@/assets/logo.svg">
  </div>
</template>

<script>
  export default {
    computed: {
      copyright() {
        return "Copyright © " + new Date().getFullYear()
      }
    }
  }
</script>

<style lang="scss">
  #footer {
    display: flex;
    justify-content: center;
    background-color: #070415;
    padding: 2rem;
    align-items: baseline;

    img {
      max-height: .9rem;
      width: auto;
    }

    span {
      color: $primary;
      font-weight: 600;
      font-size: 1rem;
    }
  }
</style>
