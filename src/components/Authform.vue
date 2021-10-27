<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <form @submit.prevent="onSubmit" :disabled="isSubmitting">
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
                v-model="email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
                v-model="pass"
              />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Authform',
  data() {
    return {
    email: '',
    pass: ''
    }
  },
  methods: {
    onSubmit() {
      console.log('submitted form'),
      this.$store
          .dispatch('register', {
            email: this.email, 
            password: this.pass
      }).then(user => {
        console.log('successfully register user', user)
        this.$router.push({name: 'home'})
      })

    }
  },
  computed: {
    isSubmitting() {
      return this.$store.state.auth.isSubmiting
    }
  }
}
</script>

<style scoped>
.row {
  width: 900px;
}
.form-group {
    padding: 30px 0;
}
.form-control{
  border: solid 1px rgb(66, 63, 63);
}

</style>