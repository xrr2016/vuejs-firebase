<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <form>
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
                <v-layout row>
                  <v-flex xs12>
                    <v-btn type="submit" @click="handleSubmit($event)">注册</v-btn>
                  </v-flex>
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
      return this.password === this.confirmPassword ? '' : '密码不相等。'
    }
  },
  methods: {
    handleSubmit (event) {
      event.preventDefault()
      console.log({
        email: this.email,
        password: this.password,
        confirm: this.confirmPassword
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

