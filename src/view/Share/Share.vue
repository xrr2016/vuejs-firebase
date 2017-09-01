<template>
  <v-container>
    <v-layout row wrap v-if="loading">
      <v-flex xs12>
        <v-progress-circular v-if="loading" indeterminate :size="70" :width="7" class="blue--text"></v-progress-circular>
      </v-flex>
    </v-layout>
    <v-layout row wrap v-else>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h6 class="primary--text">{{ share.title }}</h6>
            <template v-if="userIsCreator">
              <v-spacer></v-spacer>
              <app-dialog :share="share"></app-dialog>
              <v-btn primary fab dark @click="goBack"><v-icon>arrow_back</v-icon></v-btn>
            </template>
          </v-card-title>
          <v-card-media :src="share.imgUrl" height="300px">
          </v-card-media>
          <v-card-text>
            <div class="info--text">{{ share.date }}</div>
            <app-edit-date-dialog :share="share" v-if="userIsCreator"></app-edit-date-dialog>
            <div class="black--text">{{ share.desc }}</div>
          </v-card-text>
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
    },
    userIsAuth () {
      return !!this.$store.getters.user
    },
    userIsCreator () {
      if (!this.userIsAuth) {
        return false
      }
      return this.$store.getters.user.id === this.share.creatorId
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
