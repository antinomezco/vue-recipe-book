<template>
  <v-app dark>
    <NotificationBar />
    <TheHeader />
    <TheBody />
    <TheFooter />
  </v-app>
</template>

<script>
import NotificationBar from '@/components/NotificationBar'
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'
import TheBody from '@/components/TheBody'
export default {
  components: {
    NotificationBar,
    TheFooter,
    TheHeader,
    TheBody
  }
}
</script>

<style type="text/css">
  body {
  font-family: Montserrat;
}
body, html {
  margin: 0px; padding: 0px;
  color: #e8e8e8ff;
}
h2, h3, h1, h4 {
  margin-top: 5px; margin-bottom: 5px;
}
a, a:focus, a:visited, a:hover {
  color: #000; text-decoration: none;
}
</style>
