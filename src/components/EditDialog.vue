<template>
  <v-dialog width="350" persistent v-model="showDialog">
    <v-btn fab primary slot="activator">
      <v-icon class="white--text">edit</v-icon>
    </v-btn>
    <v-card>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title>Edit</v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-text>
              <v-text-field name="title" label="Tilte" id="title" v-model="title" required></v-text-field>
              <v-text-field name="desc" label="Description" id="desc" v-model="desc" multi-line rows="2" required></v-text-field>
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-actions>
              <v-btn flat @click="showDialog = false">Close</v-btn>    
              <v-btn flat primary @click="saveChanges">Save</v-btn>    
            </v-card-actions> 
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['share'],
  data () {
    return {
      title: this.share.title,
      desc: this.share.desc,
      showDialog: false
    }
  },
  methods: {
    saveChanges () {
      if (this.title.trim() || this.desc.trim()) {
        this.showDialog = false
        this.$store.dispatch('updateShare', {
          title: this.title,
          desc: this.desc,
          id: this.share.id
        })
      }
    }
  }
}
</script>

<style>

</style>
