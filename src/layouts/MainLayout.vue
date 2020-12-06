<template>
  <div class="app-main-layout">
    <NavBar />
    <main class="app-content">
      <div class="container">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from '../components/NavBar/NavBar';

export default {
  name: 'main-layout',
  components: {
    NavBar
  },
  data: () => ({
    loading: true
  }),
}
</script>