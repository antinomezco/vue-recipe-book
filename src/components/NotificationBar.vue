<template>
  <div>
    <div
      v-for="i in notificationErrors"
      :key="i.id"
      :class="'full-background ' + i.color"
    >
      {{ i.text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotificationBar',
  data: () => ({
    notificationErrors: [{ color: 'red', id: 0, text: 'Things to do: 1) add data, 2) prettify 3) add ability to change portions 4) allow to add/edit recipes' }]
  })
}
</script>

<style scoped>
.full-background {
  padding: 10px;
  z-index: 0;
  position: relative;
  text-align: center;
  color: white;
}
</style>
