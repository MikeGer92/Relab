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
  errors: [],
  data() {
    return {
      email: '',
      pass: ''
    }
  },
  methods: {
    onSubmit() {
      const res = this.checkForm(event)
      if (res) {
        console.log('submitted form'),
        this.$store.dispatch('register', {email: this.email, password: this.pass})
        .then(user => {
          console.log('successfully registration', user);
          window.location.href = 'http://127.0.0.1:8080/';
        })
      } else {
        console.log('Ошибки в форме регистрации')
      }
    },
    checkForm (e) {
      this.errors = [];
      if (!this.email) {
        this.errors.push('Укажите электронную почту.');
        console.log('Укажите электронную почту.')
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Укажите корректный адрес электронной почты.');
      }
      if (!this.pass) {
        this.errors.push('Укажите пароль.');
        console.log('Укажите пароль.')
      } else if (!this.validPass(this.pass)) {
        this.errors.push('Введите корректный пароль')
      }

      if (!this.errors.length) {
        return true;
      }
      e.preventDefault();

    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validPass: function (pass) {
      var re = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/;
      return re.test(pass);
    }

  },
  
  computed: {
    isSubmitting() {
      return this.$store.state.auth.isSubmiting
    },
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