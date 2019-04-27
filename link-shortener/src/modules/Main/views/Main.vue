<template>
    <div>
        <Header></Header>

        <section class="main_box">
            <h1>Paste the URL to be shortened</h1>

            <form v-on:submit="shorten">
                <div class="form-url">
                    <input type="url"
                           pattern="https?://.+"
                           required
                           autocomplete="off"
                           v-model="url"
                           placeholder="https://wwww.example.com" />
                    <div class="btn-go">
                        <input type="submit" value="Shorten URL">
                    </div>
                </div>
            </form>

            <p class="text-intro">
                URL Shortener lets you shorten a long link making it easy to remember.<br>
                Would you like to know how many times a short URL has been used?
                <router-link to="/views/analyze">click here to know</router-link>
            </p>
        </section>

    </div>
</template>

<script>

import Header from '@/shared/components/Header.vue';
import { API_URL_CREATE } from '@/Services/API';

export default {
  name: 'Main',
  components: {
    Header
  },
  data () {
    return {
      url: null
    }
  },
  methods: {
    shorten: async function (event) {
      event.preventDefault();

      const data = {'url': this.url};

      const response = await fetch(API_URL_CREATE, {
          method: 'POST',
          body: JSON.stringify(data)
      });

      const content = await response.json();

      if (content) {
          sessionStorage.setItem('url_shorter', JSON.stringify(content));
          this.$router.push('success');
      } else {
          alert('An error occurred on the server.');
          window.location.reload(true);
      }
    }
  }
}
</script>

<style>

    section.main_box {
        margin: 0 auto 20px auto;
        max-width: 700px;
        box-shadow: 0 1px 4px #ccc;
        border-radius: 2px;
        padding: 10px 30px 5px;
        background: #fff;
        text-align: center;
    }

    section.main_box h1{
        margin: 10px auto 30px auto
    }

    .text-intro {
        margin: 25px auto 40px;
        text-align: center;
    }
</style>
