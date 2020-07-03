<template>
  <header>
    <div class="full-background">
      <!--<nav>-->
      <!--  <a class="hover">Home</a>-->
      <!--  <a class="hover">About</a>-->
      <!--  <a class="hover">Login</a>-->
      <!--</nav>-->
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style scoped>
.full-background {
  padding-bottom: 30px;
  background-color: #6072b5;
}
.rightfloat {
  float: right;
  margin-top: 24px;
  margin-right: 26px;
}
.hover:hover {
  background-color: rgba(232, 232, 232, 0.8);
  cursor: pointer;
}
@media only screen and (max-width: 750px) {
  .inner {
    width: 100%;
  }
}
</style>
