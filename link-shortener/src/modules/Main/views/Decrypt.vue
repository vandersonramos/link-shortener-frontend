<template>
</template>

<script>

  import { API_URL_VALIDATE } from '@/Services/API';

  export default {
    name: 'Decrypt',

    async created () {

      const urlShorter = this.$route.params.url_key;
      const response = await fetch(API_URL_VALIDATE + urlShorter, {method: 'GET'});
      const content = await response.json();

      if (content.redirect_to !== null) {
         return window.location.href = content.redirect_to;
      }
      return this.$router.push('/');
    }
  }
</script>
