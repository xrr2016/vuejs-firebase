<template>
  <v-app>
    <!-- drawer -->
    <v-navigation-drawer v-model="sideNav">
      <v-list>
        <v-list-tile v-for="item of menuItems" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!-- toolbar -->
    <v-toolbar class="primary">
      <v-toolbar-side-icon 
        @click.native.stop="sideNav = !sideNav"
        class="hidden-sm-and-up"
      ></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Share</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn class="white--text" flat v-for="item of menuItems" :key="item.title">
          <v-icon class="white--text" left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false,
      menuItems: [
        { icon: 'explore', title: 'Share' },
        { icon: 'room', title: 'Share Something You Like' },
        { icon: 'person', title: 'Profile' },
        { icon: 'face', title: 'Sign up' },
        { icon: 'lock_open', title: 'Sign in' }
      ]
    }
  }
}
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
