<template>
  <div>
    <v-container fluid>
      <v-data-iterator
        :items="items"
        :search="search"
        :page="page"
        :items-per-page.sync="itemsPerPage"
        item-key="nombre"
        :single-expand="true"
        :sort-by="sortBy.toLowerCase()"
        :sort-desc="sortDesc"
        hide-default-footer
      >
        <template v-slot:header>
          <v-toolbar
            dark
            color="blue darken-3"
            class="mb-1"
          >
            <v-text-field
              v-model="search"
              clearable
              flat
              solo-inverted
              hide-details
              label="Search"
            ></v-text-field>
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <v-spacer></v-spacer>
              <v-btn-toggle
                v-model="sortDesc"
                mandatory
              >
                <v-btn
                  large
                  depressed
                  color="blue"
                  :value="false"
                >
                  <v-icon>mdi-arrow-up</v-icon>
                </v-btn>
                <v-btn
                  large
                  color="blue"
                  :value="true"
                >
                  <v-icon>mdi-arrow-down</v-icon>
                </v-btn>
              </v-btn-toggle>
            </template>
          </v-toolbar>
        </template>
        <template v-slot:default="{ items }">
          <v-row>
            <v-col
              v-for="item in items"
              :key="item.nombre"
              cols="12"
              sm="6"
              md="4"
              lg="3"
            >
              <v-card>
                <!--<v-card-title class="subheading font-weight-bold">-->
                <!--  {{ item.nombre }}-->
                <!--</v-card-title>-->
                <v-row justify="center">
                  <v-dialog v-model="dialog" scrollable max-width="50%">
                    <template v-slot:activator="{ on, attrs }">
                    <v-card>
                      <v-img
                        :src="require(`@/static/${item.image}`)"
                        height="194"
                        width="452"
                        v-bind="attrs"
                        v-on="on"
                        style="cursor: pointer"
                      >
                        <h2 class="text-left white--text" style="padding-left: 8px; padding-top: 150px; -webkit-text-stroke: 1px black;">{{ item.nombre }}</h2>
                      </v-img>
                    </v-card>
                    </template>
                    <v-card>
                      <v-card-title>
                        {{ item.nombre }}
                      </v-card-title>
                      <v-card-text>
                        <p>
                          Servings: {{ item.servings }}
                        </p>
                        <p>
                          Prep Time: {{ item.preptime }}
                        </p>
                        <p>
                          Cook Time: {{ item.cooktime }}
                        </p>
                      </v-card-text>
                      <v-card-text style="height: auto;">
                        <ul v-for="(ingredient, index) in item.ingredients" :key="index">
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
                        <p v-for="(desc, index) in item.descripcion" :key="index">
                          {{ desc }}
                        </p>
                      </v-card-text>
                      <v-divider></v-divider>
                      <v-card-actions>
                        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </template>
        <template v-slot:footer>
          <v-row class="mt-2" align="center" justify="center">
            <span class="grey--text">Items per page</span>
            <v-menu offset-y>
              <template v-slot:activator="{ on }">
                <v-btn
                  dark
                  color="primary"
                  class="ml-2"
                  v-on="on"
                >
                  {{ itemsPerPage }}
                  <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(number, index) in itemsPerPageArray"
                  :key="index"
                  @click="updateItemsPerPage(number)"
                >
                  <v-list-item-title>{{ number }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-spacer></v-spacer>
            <span
              class="mr-4
              grey--text"
            >
              Page {{ page }} of {{ numberOfPages }}
            </span>
            <v-btn
              fab
              dark
              color="blue darken-3"
              class="mr-1"
              @click="formerPage"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn
              fab
              dark
              color="blue darken-3"
              class="ml-1"
              @click="nextPage"
            >
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-row>
        </template>
      </v-data-iterator>
    </v-container>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/database";
var firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN, 
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const cookingRef = database.ref("cooking");
export var cookingRefexp = cookingRef;
export default {
  name: 'TheRecipePreview',
  data: () => ({
    itemsPerPageArray: [4, 8, 12],
    search: '',
    filter: {},
    sortDesc: false,
    page: 1,
    itemsPerPage: 8,
    sortBy: 'nombre',
    keys: [
      'Nombre',
      'Category',
      'Ingredient',
      'Descripcion',
      'Weblink'
    ],
    items: [],
    items2: [
      { nombre: 'Pork chops', category: 'american', ingredient: 'pork', descripcion: 'porkchop recipe instructions', weblink: 'enlace 1', image:'spicyporkchops.jpg' },
      { nombre: 'Lasagna', category: 'italian', ingredient: 'beef', descripcion: 'lasaga recipe', weblink: 'enlace 2', image:'lasagna.jpg' }
    ]
  }),
  computed: {
    numberOfPages () {
      return Math.ceil(this.items.length / this.itemsPerPage)
    },
    filteredKeys () {
      return this.keys.filter(key => key !== 'Nombre')
    }
  },
  methods: {
    nextPage () {
      if (this.page + 1 <= this.numberOfPages) this.page += 1
    },
    formerPage () {
      if (this.page - 1 >= 1) this.page -= 1
    },
    updateItemsPerPage (number) {
      this.itemsPerPage = number
    }
  },
  created() {
  cookingRefexp.once("value", items => {
    items.forEach(item => {
      this.items.push({
        id: item.ref.key,
        nombre: item.child("nombre").val(),
        category: item.child("category").val(),
        ingredients: item.child("ingredients").val(),
        notes: item.child("notes").val(),
        servings: item.child("servings").val(),
        preptime: item.child("preptime").val(),
        cooktime: item.child("cooktime").val(),
        descripcion: item.child("descripcion").val(),
        image: item.child("image").val(),
      });
    });
  });
  }
}
</script>

<style scoped>
.separacion{
  padding: 10px;
}
.card {display:inline-block;}
</style>
