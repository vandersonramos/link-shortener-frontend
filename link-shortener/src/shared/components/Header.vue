<template>

    <header>
        <div id="logo">
            <router-link to="/">
                <img src="../../assets/logo.png" alt="URL Shortener">
            </router-link>
        </div>
    </header>

</template>

<script>
  export default {
    name: "Header",
  };
</script>

<style>

    header {
        text-align: center;
    }

    header #logo{
        padding: 25px 20px 20px;
    }

    a{
        color: #006cff;
        text-decoration: none;
    }

    img {
        width: 100px;
        height: auto;
        vertical-align: middle;
    }
</style>
