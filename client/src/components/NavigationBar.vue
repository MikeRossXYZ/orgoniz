<template>
  <div>
    <img id="logo" src="@/assets/LAZICC_logo.png" />
    <ul class="nav flex-column">
      <li class="nav-item">
        <router-link to="/">
          <font-awesome-icon class="nav-icon" icon="home" />Home
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about">
          <font-awesome-icon class="nav-icon" icon="calendar-alt" />Schedule
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NavigationBar extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#logo {
  max-width: 100%;
  margin-bottom: 1rem;
}

.nav {
  .nav-item {
    display: block;
    text-align: left;
    margin-bottom: 0.5rem;

    a {
      border-radius: 1rem;
      color: black;
      display: inline-block;
      font-size: 1.25rem;
      padding: 0.5rem 1.25rem;

      &:hover {
        color: white;
        background: black;
      }
    }
  }

  .nav-icon {
    margin-right: 1.25rem;
  }
}

</style>
