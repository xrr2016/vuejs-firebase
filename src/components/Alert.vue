<template>
  <v-alert warning dismissible hide-icon @input="onClose" :value="true">
    Something goes worn!
  </v-alert>
</template>

<script>
  export default {
    methods: {
      onClose () {
        this.$emit('dismissed')
      }
    }
  }
</script>
