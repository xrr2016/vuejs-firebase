<template>
  <v-app>
    <!-- drawer -->
    <v-navigation-drawer temporary v-model="sideNav">
      <v-list>
        <v-list-tile v-for="item of menuItems" :key="item.title" :to="item.route">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!-- toolbar -->
    <v-toolbar class="primary">
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">
        <router-link to="/" tag="span" style="cursor: pointer;">Share</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn class="white--text" flat v-for="item of menuItems" :key="item.title" :to="item.route">
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
        { icon: 'explore', title: 'Shares', route: '/shares' },
        { icon: 'room', title: 'Share Something You Like', route: '/create_share' },
        { icon: 'person', title: 'Profile', route: '/profile' },
        { icon: 'face', title: 'Sign up', route: '/signup' },
        { icon: 'lock_open', title: 'Sign in', route: '/signin' }
      ]
    }
  }
}
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
