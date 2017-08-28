<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 xl4 offset-sm3 offset-xl4>
        <h4 class="primary--text">Create a share</h4>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="handleSubmit">
          <v-layout row>
            <v-flex xs12 sm6 xl4 offset-sm3 offset-xl4>
              <v-text-field name="title" label="Tilte" id="title" v-model="title" required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 xl4 offset-sm3 offset-xl4>
              <v-text-field name="desc" label="Description" id="desc" v-model="desc" multi-line rows="2" required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 xl4 offset-sm3 offset-xl4>
              <v-text-field name="imgUrl" label="Image Url" id="img-url" v-model="imgUrl" required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 xl4 offset-sm3 offset-xl4>
              <img :src="imgUrl" height="120" v-if="imgUrl">
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 xl4 offset-sm3 offset-xl4>
              <v-btn 
               class="primary" 
               :disabled="!formIsValid"
               type="submit"
               >Create Share</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (!vm.$store.getters.user) {
        console.log('未登录')
        vm.$router.push('/login')
      }
    })
  },
  data () {
    return {
      title: '',
      desc: '',
      imgUrl: ''
    }
  },
  computed: {
    formIsValid () {
      return this.title !== '' && this.desc !== '' && this.imgUrl !== ''
    }
  },
  methods: {
    handleSubmit () {
      if (!this.formIsValid) {
        return false
      }
      const share = {
        title: this.title,
        desc: this.desc,
        imgUrl: this.imgUrl,
        date: new Date().toLocaleString()
      }
      this.$store.dispatch('createShare', share)
      this.$router.push('/shares')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

