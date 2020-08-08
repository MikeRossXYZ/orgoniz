<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <navigation-bar></navigation-bar>
        </div>
        <div id="content-view" class="col-lg-9">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#content-view {
  border-right: 1px solid #ababab;
  border-left: 1px solid #ababab;
  padding: 2rem 0;
}
</style>

<script>
// @ is an alias to /src
import NavigationBar from '@/components/NavigationBar.vue'

export default {
  name: 'Home',
  components: {
    NavigationBar
  }
}
</script>
