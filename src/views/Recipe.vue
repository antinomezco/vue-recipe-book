<template>
  <div class="home">
    <TheRecipe/>
    <TheFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import TheRecipe from '@/components/TheRecipe.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'Home',
  components: {
    TheRecipe,
    TheFooter
  }
}
</script>

<style scoped>
</style>