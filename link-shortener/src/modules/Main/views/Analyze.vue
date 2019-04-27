<template>
    <div>
        <Header></Header>

        <div class="container">
            <div class="analyze_box-content">
                <section>
                    <h1>URL Click Counter</h1>
                    <p>Enter the URL below to find out how many clicks it has received so far.</p>
                </section>

                <section class="analyze_box">
                    <form v-on:submit="checkViews">
                        <div class="form-url margin-top-30">
                            <input type="url"
                                   pattern="https?://.+"
                                   required
                                   autocomplete="off"
                                   v-model="url"
                                   placeholder="Enter the short URL here" />
                            <div class="btn-go">
                                <input type="submit" value="Check Views">
                            </div>
                        </div>
                    </form>
                </section>

                <section v-if="hasData">
                    <h1>URL Total Clicks</h1>
                    <p>Clicks that your link has received so far.</p>
                    <div class="url_views">{{ totalViews }}</div>
                </section>
            </div>
        </div>
    </div>

</template>

<script>

  import Header from '@/shared/components/Header.vue';
  import { API_URL_CHECK_VIEWS } from '@/Services/API';

  export default {
    name: 'Analyze',
    components: {
      Header
    },
    data () {
      return {
        url: null,
        hasData: false,
        totalViews: 0
      }
    },
    methods: {

      checkViews: async function(event) {
        event.preventDefault();

        const url = this.url.match(/([^\/]*)\/*$/)[1];
        const response = await fetch(API_URL_CHECK_VIEWS + url, {method: 'GET'});
        const content = await response.json();

        if (content.total_views !== null) {
           this.hasData = true;
           this.totalViews = content.total_views;
        } else {
           alert('Url not found!');
           window.location.reload(true);
        }
      }
    }
  }
</script>

<style>

    section.analyze_box {
        margin: 0 auto 20px auto;
        box-shadow: 0 1px 4px #ccc;
        border-radius: 2px;
        padding: 10px 30px 40px;
        background: #fff;
        text-align: center;
    }

    section.analyze_box h1{
        margin: 10px auto 30px auto
    }

    .analyze_box-content{
        width: 50%;
        margin: 0 auto;
    }

    .url_views{
        display: inline-block;
        background: #fff;
        padding: 20px 40px;
        border-radius: 3px;
        font-size: 60px;
    }

</style>
