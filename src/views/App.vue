<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import EmptyLayout from '../layouts/EmptyLayout';
import MainLayout from '../layouts/MainLayout';

export default {
  name: 'App',
  components: {
    EmptyLayout, MainLayout
  },
  data() {
    return {
      isAuth: false
    }
  },
  computed: {
    layout() {
      console.log(this.$route.meta);
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
}
</script>

