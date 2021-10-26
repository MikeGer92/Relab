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
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
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
  methods: {
    onSubmit() {
      console.log('submitted form'),
      this.$store.dispatch('register', {user: 'mikeman2021@list.ru', password: 'a26Oct2021'
      }).then(user => {
        console.log('successfully register user', user)
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