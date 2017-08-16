<template>
  <v-container>
    <v-layout row wrap class="mt-2">
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn block  to="/shares" class="accent white--text">Explore Shares</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn block  to="/create_share" class="info">Create New Share</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12>
        <v-carousel style="height: 400px;">
          <v-carousel-item 
            v-for="share in shares" 
            :src="share.imgUrl" 
            :key="share.id"
            @click="onLoadShare(share.id)"
            style="cursor: pointer;"
            >
            <div class="title">{{ share.title }}</div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12 class="text-xs-center">Share Something You Like!</v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    shares () {
      return this.$store.getters.featureShares
    }
  },
  methods: {
    onLoadShare (id) {
      this.$router.push(`/share/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  position: absolute;
  bottom: 80px;
  color: #fff;
  font-size: 2em;
  background: rgba(0, 0, 0, .5);
  padding: 10px 40px;
}
</style>
