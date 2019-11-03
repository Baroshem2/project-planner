<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
  import Navbar from '@/components/layout/Navbar';
  export default {
    name: 'app',
    components: {
      Navbar
    }
}
</script>

<style lang="scss">
html {
  min-height: 100%;
}

body {
  min-height: 100%;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: url(/img/drive.jpg) no-repeat;
  background-size: 100%;
  background-position: center;
  min-height: 100%;
  background-color: #232323;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

input[type=text]:not(.browser-default):focus:not([readonly]),
input[type=email]:not(.browser-default):focus:not([readonly]),
input[type=password]:not(.browser-default):focus:not([readonly]),
textarea.materialize-textarea:focus:not([readonly]){
  border-color:	#FF5DCA;
  box-shadow: none;
}

input[type=text]:not(.browser-default):focus:not([readonly]) + label,
textarea.materialize-textarea:focus:not([readonly]) + label,
input[type=email]:not(.browser-default):focus:not([readonly]) + label,
input[type=password]:not(.browser-default):focus:not([readonly]) + label{
  color: 	#FF5DCA !important;

}
</style>
