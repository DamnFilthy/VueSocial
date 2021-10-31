<template>
  <Topbar/>
  <router-view/>
</template>

<script>
  import Topbar from "./components/Topbar";

  export default {
    name: 'App',
    components: {
      Topbar
    },
  }
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
