<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <div v-if="isSubmitting"><h3>Loading...</h3></div>
          <div class="errors" v-for="error in errors" :key="error">{{ error }}</div>
          <form id="form" @submit.prevent="onSubmit" :disabled="isSubmitting">
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
                v-model="email"
                @click="checkForm"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
                v-model="pass"
                @click="checkForm"
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
import {actionTypes} from '@/store/modules/auth'
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
      this.errors = []
      const res = this.checkForm(event)
      if (res == true) {
        console.log('submitted form'),
        this.$store.dispatch(actionTypes.register, {email: this.email, password: this.pass})
        .then(user => {
          console.log('successfully registration', user);
        })
      } else {
          console.log(this.errors)
      }
    },
    checkForm (e) {
      this.errors = []
      if (!this.email) {
        this.errors.push('Укажите электронную почту.');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Некорректный адрес электронной почты.');
      }
      if (!this.pass) {
        this.errors.push('Укажите пароль.');
      } else if (this.pass.length < 8) {
          this.errors.push('Минимальная дилинна пароля 8 знаков')
      } else if (!this.validPass(this.pass)) {
        this.errors.push('Пароль должен содержать минимум 1 заглавную букву и 1 цифру')
      }
      e.preventDefault();
      if (!this.errors.length) {
        return true;
      } else {
         return this.errors
      }
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
      return this.$store.state.auth.isSubmitting
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
h3 {
  color: #42b983
}
.errors {
  color: red;
}

</style>