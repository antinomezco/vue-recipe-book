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
              url: item.child("url").val(),
            });
          });
        });
    }
}