<template>
  <v-dialog persistent v-model="editDialog">
    <v-btn primary slot="activator">Edit Date</v-btn>
    <v-card>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title>Edit Date</v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs12>
            <v-date-picker v-model="editableDate" actions style="width: 100%;">
              <template scope="{save, cancel}">
                <v-btn class="blue--text darken-1" flat
                  @click.native="editDialog = false">Close</v-btn>
                <v-btn class="blue--text darken-1" flat
                  @click.native="handleSave">Save</v-btn>
              </template>
            </v-date-picker>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  created () {
    this.editableDate = new Date(this.share.date)
  },
  props: ['share'],
  data () {
    return {
      editDialog: false,
      editableDate: null
    }
  },
  methods: {
    handleSave () {
      const d = new Date(this.share.date)
      const D = new Date(this.editableDate)
      const day = D.getUTCDate()
      const month = D.getUTCMonth()
      const year = D.getUTCFullYear()
      d.setUTCDate(day)
      d.setUTCMonth(month)
      d.setUTCFullYear(year)
      this.$store.dispatch('updateShare', {
        id: this.share.id,
        date: d
      })
    }
  }
}
</script>
