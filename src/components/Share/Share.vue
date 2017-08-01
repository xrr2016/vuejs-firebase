<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h5 class="primary--text">{{ share.title }}</h5>
          </v-card-title>
          <v-card-media :src="share.imgUrl" height="420px">
          </v-card-media>
          <v-card-text>
            <div class="info--text">{{ share.date }}</div>
            <div class="black--text">{{ share.desc }}</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn primary fab dark @click="goBack"><v-icon>arrow_back</v-icon></v-btn>
          </v-card-actions>
        </v-card>
        <!-- <v-card class="blue-grey darken-2 white--text" :img="share.imgUrl">
            <v-card-title primary-title>
              <div class="headline">{{ share.title }}</div>
              <div>{{ share.date }}</div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat dark>REGISTER</v-btn>
            </v-card-actions>
          </v-card> -->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    share () {
      return this.$store.getters.loadedShare(this.id)
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
