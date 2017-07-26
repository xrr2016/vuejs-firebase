<template>
  <v-container>
    <v-layout row wrap class="mt-2">
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large to="/shares" class="accent white--text">Explore Shares</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large to="/create_share" class="info">Create New Share</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12>
        <v-carousel>
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
    return {
      shares: [
        { imgUrl: 'http://www.tianya999.com/uploads/allimg/130604/2290-130604153503.jpg', id: '5655081d-3ca5-4bd5-8cda-f0f787597b56', title: 'data-warehouse' },
        { imgUrl: 'http://www.tianya999.com/uploads/allimg/130604/2290-130604153453.jpg', id: '25dc2138-8adf-4ebd-adb1-cde63cb463c1', title: 'Implementation' },
        { imgUrl: 'http://img.tuku.com/upload/picture/2015/01/5nHwAbI.jpg', id: '366cb5e6-9842-4d51-9105-ad9049c7050a', title: 'platforms Sleek blue' },
        { imgUrl: 'http://img.tuku.com/upload/picture/2015/01/70uy62Y.jpg', id: 'febcada1-bf4b-44f6-92dc-225e705980a1', title: 'Croatian Kuna' }
      ]
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
