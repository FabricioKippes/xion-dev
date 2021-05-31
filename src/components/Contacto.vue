<template>
  <div class="container">
    <a id="contactanos" />
    <!--Header /-->
    <h1>Contactanos</h1>
    <hr>
    <div class="row mt-5">
      <div class="col-md-12 col-lg-4 mb-5 mt-lg-0">
        <div class="datos h-100">
          <span>
            <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
            French 414
          </span>
          <span>
            <font-awesome-icon :icon="['far', 'envelope']" />
            consultas@xion.dev
          </span>
          <span>
            <font-awesome-icon :icon="['fas', 'mobile-alt']" />
            362 401-2345
          </span>
        </div>
      </div>
      <div class="col-md-12 col-lg-4 mb-5 mt-lg-0">
        <b-form
          ref="contactForm"
          @submit.prevent="onSubmit">
          <b-form-input
            v-model="form.name"
            placeholder="Nombre"
            required />

          <b-form-input
            v-model="form.email"
            placeholder="Email"
            required
            type="email" />

          <b-form-textarea
            v-model="form.message"
            placeholder="Mensaje"
            rows="3" />

          <b-button
            class="mt-3"
            type="submit"
            variant="dark">
            Enviar
          </b-button>
        </b-form>
      </div>
      <div class="col-md-12 col-lg-4 mb-5 mt-lg-0">
        <div class="redes">
          <a
            v-for="red in redes"
            :key="red"
            :class="red"
            href="#">
            <font-awesome-icon :icon="['fab', red]" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        form: {
          email: '',
          name: '',
          mensaje: ''
        },
        redes: ['facebook', 'instagram', 'twitter']
      }
    },
    methods: {
      onSubmit () {
        axios.post('/api/mail', this.form)
          .then(() => {
            this.mostrarMensaje('tu mensaje ha sido enviado', 'success')
            this.$refs.contactForm.reset()
          })
          .catch(() => {
            this.mostrarMensaje('ha ocurrido un error, vuelve a intentarlo', 'danger')
          })
      },

      mostrarMensaje (mensaje, variant) {
        this.$bvToast.toast(mensaje, {
          variant: variant,
          toaster: 'b-toaster-bottom-right',
          solid: true,
          autoHideDelay: 5000,
          appendToast: true
        })
      }
    }
  }
</script>
<style lang="scss">
  .datos {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    border-right: 2px solid $gris-medio;
    height: 100%;

    span {
      margin: 1rem 4rem 1rem 0;
      font-weight: bold;

      svg {
        margin-right: .5rem;
      }
    }

    @media screen and (max-width: 991px) {
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      border-right: none;
      border-bottom: 2px solid $gris-medio;

      span {
        margin: 0 2rem 2rem;
      }
    }

    @media screen and (max-width: 676px) {
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
    }
  }

  .redes {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border-left: 2px solid $gris-medio;
    height: 100%;

    a {
      margin: .5rem 4rem;
      font-size: 2rem;
      color: $negro;
      width: 2rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;

      &.instagram, &.twitter {
        background-color: $negro;
        border-radius: 50%;
        font-size: 1.4rem;
        color: $blanco;

        &:hover {
          background-color: $primary;
        }
      }
    }

     @media screen and (max-width: 991px) {
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border-left: none;
      border-top: 2px solid $gris-medio;

      a {
        margin: 2rem 2rem 0;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    .form-control {
      margin: .5rem 0;
    }
  }
</style>
