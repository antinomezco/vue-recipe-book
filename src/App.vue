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
}
h2, h3, h1, h4 {
  margin-top: 5px; margin-bottom: 5px;
}
a, a:focus, a:visited, a:hover {
  color: #000; text-decoration: none;
}
.issue, .yellow {
  background: #F1C21A;
}
.down, .red {
  background: #CD5C5C;
}
.up, .green {
  background: #2EE779;
}
</style>
