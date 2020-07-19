<template>
  <div>
    {{this.$route.params}}
    <!-- <v-card>
      <v-card-title>{{ $route.params.item.nombre }}</v-card-title>
      <v-img
        :src="require(`@/static/images/${$route.params.item.image}`)"
        height="194"
        width="452"
      />
      <v-card-text>
        <p>Servings: {{ $route.params.item.servings }}</p>
        <p>Prep Time: {{ $route.params.item.preptime }}</p>
        <p>Cook Time: {{ $route.params.item.cooktime }}</p>
      </v-card-text>
      <v-card-text style="height: auto;" class="ingredientlist">
        <ul v-for="(ingredient, index) in $route.params.item.ingredients" :key="index">
          <div v-if="ingredient.Unit==='section'">
            <h2>{{ingredient.Name}}</h2>
          </div>
          <div v-else>
            <li>{{ ingredient.DisplayQuantity }} {{ ingredient.Unit }} {{ ingredient.Name }}</li>
          </div>
        </ul>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text style="height: 300px;">
        <p v-for="(desc, index) in $route.params.item.descripcion" :key="index">{{ desc }}</p>
      </v-card-text>
    </v-card> -->
  </div>
</template>

<script>
import RecipeMixin from '../mixins/Recipe'
export default {
  mixins: [RecipeMixin],
  data: () => ({
    currentPage: '',
    items: []
  }),
  mounted(){ 
    this.$route.params;
  }
}
</script>

<style scoped>
.ingredientlist {
    border: 1px solid var(--grey-lightest);
    border-radius: 5px;
        border-bottom-right-radius: 5px;
    padding: 1rem;
    position: relative;
    border-bottom-right-radius: 60px 5px;
    box-shadow: 0 2px 3px 0 rgba(0,0,0,.075);
    background: -moz-linear-gradient(-45deg,var(--stickynoteColor-light) 81%,var(--stickynoteColor-light) 82%,var(--stickynoteColor-light) 82%,var(--stickynoteColor-dark) 100%);
    background: -webkit-gradient(linear,left top,right bottom,color-stop(81%,var(--stickynoteColor-light)),color-stop(82%,var(--stickynoteColor-light)),color-stop(82%,var(--stickynoteColor-light)),color-stop(100%,var(--stickynoteColor-dark)));
    background: -webkit-linear-gradient(-45deg,var(--stickynoteColor-light) 81%,var(--stickynoteColor-light) 82%,var(--stickynoteColor-light) 82%,var(--stickynoteColor-dark) 100%);
    background: -o-linear-gradient(-45deg,var(--stickynoteColor-light) 81%,var(--stickynoteColor-light) 82%,var(--stickynoteColor-light) 82%,var(--stickynoteColor-dark) 100%);
    background: -ms-linear-gradient(-45deg,var(--stickynoteColor-light) 81%,var(--stickynoteColor-light) 82%,var(--stickynoteColor-light) 82%,var(--stickynoteColor-dark) 100%);
    background: linear-gradient(135deg,var(--stickynoteColor-light) 81%,var(--stickynoteColor-light) 82%,var(--stickynoteColor-light) 82%,var(--stickynoteColor-dark) 100%);
    cursor: default;
}
.lg-col-6 {
    width: 50%;
}
.sm-col-6 {
    width: 50%;
}
.sm-col {
    float: left;
    box-sizing: border-box;
}
* {
    outline: 0;
}
</style>