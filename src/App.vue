<template>
  <div>
    <HelloWorld />
    <DashboardLayout/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import DashboardLayout from './views/Layout/DashboardLayout.vue'
export default {
  components: {
    HelloWorld,
    DashboardLayout
  }
}
</script>

<style lang="scss" scoped></style>