<template>
  <v-container>
    <v-layout row v-if="error">
      <v-flex xs12 sm6 offset-sm3>
        <app-alert @dismissed="onDismissed" :msg="error.message"></app-alert>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field name="email" label="mail" id="email" v-model="email"
                      type="email" required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field name="password" label="password" id="password" v-model="password"
                      type="password" required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field name="confirmPassword" label="Comfirm Password"        id="comfirmPassword" v-model="confirmPassword" type="password"
                    :rules="[comparePassword]">
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row style="justify-content: flex-end;">
                  <v-btn type="submit" @click.native="handleSubmit" :loading="loading" 
                    :disabled="loading" primary>
                    注册<span slot="loader" class="custom-loader"><v-icon light>cached</v-icon></span>
                  </v-btn>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  computed: {
    comparePassword () {
      return this.password === this.confirmPassword ? true : '密码不相等。'
    },
    user () {
      return this.$store.getters.user
    },
    error () {
      return this.$store.getters.error
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  watch: {
    user (value) {
      if (value) {
        this.$router.push('/')
      }
    }
  },
  methods: {
    handleSubmit (event) {
      this.$store.dispatch('signUserUp', {
        email: this.email,
        password: this.password
      })
    },
    onDismissed () {
      this.$store.dispatch('clearError')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

