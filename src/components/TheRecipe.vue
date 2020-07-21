<template>
  <v-app>
    <div class="main-container">
      <div class="container">  
        <div class="xs-p1">
          <div v-for="item in items" :key="item.url">
            <div v-if="item.url === currentPage">
              <v-img
                :src="require(`@/static/images/${item.image}`)"
                height="194"
                width="452"
                class="left"
              >
                <div class="my-2 logo absolute no-line-height top-2 z4 izq">
                  <v-btn 
                  depressed large
                  href="/"
                  >
                    Back
                  </v-btn>
                </div>
              </v-img>
              <v-card-title>{{ item.nombre }}</v-card-title>
              <hr>
              <v-card-text class="text-left">
                <p>Servings: {{ item.servings }}</p>
                <p>Prep Time: {{ item.preptime }}</p>
                <p>Cook Time: {{ item.cooktime }}</p>
              </v-card-text>
              <hr>
              <div class="list">
                <div class="mt3 izq recipe">
                  <v-card raised color="yellow">
                    <v-card-text style="height: auto;" class="sm-col sm-col-6 lg-col-6 ingredientlist">
                    <h1>Ingredients</h1>
                    <br>
                    <ul v-for="(ingredient, index) in item.ingredients" :key="index">
                      <div v-if="ingredient.Unit==='section'">
                        <h2>{{ingredient.Name}}</h2>
                      </div>
                      <div v-else>
                        <li>{{ ingredient.DisplayQuantity }} {{ ingredient.Unit }} {{ ingredient.Name }}</li>
                      </div>
                    </ul>
                    </v-card-text>
                  </v-card>
                  <v-divider></v-divider>
                  <v-card-text style="height: auto;" class="sm-col sm-col-6 lg-col-6 instructionlist">
                    <h1>Directions</h1>
                    <br>
                    <p v-for="(desc, index) in item.descripcion" :key="index">{{ desc }}</p>
                  </v-card-text>
                </div>
                <v-card-text v-if="item.notes" style="height: auto; width:auto;" class="izq notes lg-col-12 md-col-12 sm-col">
                  <h2>Notes</h2>
                  <br>
                  <p v-for="(note, index) in item.notes" :key="index">{{ note }}</p>
                </v-card-text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import RecipeMixin from '../mixins/Recipe'
export default {
  mixins: [RecipeMixin],
  data: () => ({
    currentPage: '',
    items: []
  }),
  created: function(){
    this.currentPage = window.location.pathname.match(/\w+$/g).join();
  }
}
</script>

<style scoped>
.container {
  max-width: 64em;
  margin-left: auto;
  margin-right: auto;
}
.main-container {
  min-height: 100vh;
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 2.5rem;
}
.xs-p1 {
  padding: .5rem;
}
.mt3 {
    margin-top: 2rem;
}
.recipe {
  display: flex;
  flex-wrap: wrap;
}
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
.instructionlist {
    padding: 1rem;
    cursor: default;
}
.lg-col-6 {
    width: 50%;
}
.sm-col-6 {
    width: auto;
}
.sm-col {
    float: left;
    box-sizing: border-box;
}
.notes {
    padding: 1rem;
}
.lg-col-12 {
    width: 100%;
}
.md-col-12 {
    width: 100%;
}
.izq {
  text-align: left;
}
</style>