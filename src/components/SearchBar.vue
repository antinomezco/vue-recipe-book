<template>
  <div>
    <b-form-select v-model="selected" :options="options" />
    <b-form-select v-model="selected" :options="options" size="sm" class="mt-3" />
    <b-form-input v-model="text" placeholder="Enter your name" />
    <div class="mt-2">
      Value: {{ text }}
    </div>
  </div>
</template>

<script>
// import TheRecipePreview from './TheRecipePreview.vue'
export default {
  // components: { TheRecipePreview },
  data () {
    return {
      selected: null,
      text: '',
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ]
    }
  }
}
</script>
