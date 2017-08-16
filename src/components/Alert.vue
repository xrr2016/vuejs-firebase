<template>
  <v-alert icon="warning" error dismissible hide-icon @input="onClose" :value="true">
    {{ msg }}
  </v-alert>
</template>

<script>
  export default {
    props: ['msg'],
    methods: {
      onClose () {
        this.$emit('dismissed')
      }
    }
  }
</script>
