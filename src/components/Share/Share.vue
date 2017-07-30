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
             <!-- <div class="info--text">{{ share.}}</div>  -->
            <div>{{ share.date }}</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="primary">REGISTER</v-btn>
          </v-card-actions>
        </v-card>
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
  }
}
</script>
