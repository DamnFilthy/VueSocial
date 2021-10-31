<template>
  <div id="nav">
    <router-link :to="{name:'home'}">Home</router-link> |
    <router-link :to="{name:'about'}">About</router-link> |
    <router-link :to="{name:'register'}">Register</router-link> |
    <router-link :to="{name:'login'}">Login</router-link> |
  </div>

  <router-view/>
</template>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
