<template>
    <div>
        <Header></Header>

        <div class="container">
            <div class="box-content" v-if="hasData">
               <section>
                   <h1>Your shortened URL</h1>
                   <p>Copy the shortened link and enjoy it.</p>
               </section>

                <section class="box-result">

                    <div class="form-url">
                        <input type="url" id="shorter-url" :value="makeLink(data.url_shorter)" readonly />
                        <div class="btn-go">
                            <input type="submit" v-on:click="copyToClipBoardUrl" value="Copy URL">
                        </div>
                    </div>

                    <div class="tip">
                        <div class="full-url margin-top-30">
                            Long URL:
                            <a v-bind:href="data.full_url" target="_blank" :title="data.full_url">
                                {{ data.full_url }}
                            </a>
                        </div>
                        <div class="full-url margin-top-30">
                            Shorter URL:
                            <a v-bind:href="data.url_shorter" target="_blank" :title="data.url_shorter">
                                {{ makeLink(data.url_shorter) }}
                            </a>
                        </div>
                        <br>
                        You may check
                        <router-link to="/views/analyze">the total clicks</router-link> of your shortened URL.<br/><br/>
                        Create a new <router-link to="/">shortened URL</router-link>.
                    </div>
                </section>
            </div>
        </div>
    </div>

</template>

<script>

  import Header from '@/shared/components/Header.vue';

  export default {
    name: 'Success',
    components: {
      Header
    },
    data () {
      return {
        hasData: false,
        data: []
      }
    },
    mounted: function() {
      let urlData = JSON.parse(sessionStorage.getItem('url_shorter'));

      if (urlData !== null) {
        this.hasData = true;
        this.data = urlData;
        sessionStorage.removeItem('url_shorter');
      } else {
        this.$router.push('home');
      }
    },

    methods: {

      makeLink: function (link) {
        return document.location.origin + '/' + link
      },

      copyToClipBoardUrl: function() {
        const itemToCopy = document.getElementById("shorter-url");
        itemToCopy.select();
        document.execCommand("copy");
        alert("Copied the url: " + itemToCopy.value);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

    .box-content{
        width: 50%;
        margin: 0 auto;
    }

    .box-result{
        box-shadow: 0 1px 4px #ccc;
        border-radius: 2px;
        padding: 40px 30px 5px;
        background: #fff;
    }

    .tip {
        padding: 0 50px;
        word-wrap: break-word;
    }

</style>
