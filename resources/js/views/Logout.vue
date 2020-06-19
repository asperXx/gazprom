<template>
  <h2>Logged Out</h2>
</template>
<script>
  import axios from 'axios'
  import store from './../store'
  export default {
    computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
    created () {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
        axios.post('/api/auth/signout', {
          headers: {
            'X-CSRF-TOKEN': window.Laravel.csrfToken
          }
        })
        .then(res => console.log(res))

        this.$store.dispatch('logout')
        
        .then(() => {
          this.$router.push('/login')
        })
    },
  }
</script>