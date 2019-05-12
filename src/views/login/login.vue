<template>
  <div>
    <input type="text" v-model="email"/>
    <input type="password" v-model="password"/>
    <button @click="login">xxxxx</button>
    <br/>
    {{getUserData}}
  </div>
</template>
<script>
import { mapActions, mapGetters, Store } from 'vuex'
export default {
  data: () => {
    return {
      email: '',
      password: ''
    }
  },
  mounted () {
    console.log(this.$store)
  },
  computed: {
    ...mapGetters({
      getUserData: 'Login/getUserData'
    })
  },
  methods: {
    ...mapActions({
      loginAction: 'Login/login'
    }),
    login() {
      // this.$store.Login.actions.login(this.email, this.password)
      this.loginAction({email: this.email, password: this.password})
    }
  }
}
</script>
