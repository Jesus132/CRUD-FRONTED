<template>
  <div>
    <b-form>
      <b-form-group
        id="input-group-1"
        label="Code:"
        label-for="input-1">
        <b-form-input 
          id="input-1" 
          v-model="form.code" 
          required 
          placeholder="Enter code">
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-button @click="POST_STUDENTS(form)">Add</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>

     <b-table :items="STUDENTS" :fields="fields" striped responsive="sm">
      <template v-slot:cell(show_details)="row">
        <b-button @click="DEL_STUDENTS(row.item.id)" size="sm" class="mr-2">
          Remove
        </b-button>
        <b-button @click="PUST_STUDENTS([row.item.id, form])" >
          Update
        </b-button>
      </template>
    </b-table>
 

  </div>
</template>

<script>
//Importar los types que se van a utilizar
import { TypesStore } from "./../store/types/store.types";
//mapgetter la variable que necesito para obtener el estado
//map actions la action GET_students
import { mapActions, mapGetters } from "vuex";


export default {
  data() {
      return {
        fields:['id','name','code','show_details'],
        form: {
          code: '',
          name: '',
        },
      }
    },
  methods: {
    ...mapActions({
      GET_STUDENTS: TypesStore.actions.GET_STUDENTS,
      POST_STUDENTS: TypesStore.actions.POST_STUDENTS,
      DEL_STUDENTS: TypesStore.actions.DEL_STUDENTS,
      PUST_STUDENTS: TypesStore.actions.PUST_STUDENTS,
    })

  },
  computed: {
    ...mapGetters({
      STUDENTS: TypesStore.state.STUDENTS,
      PSTUDENTS: TypesStore.state.PSTUDENTS
      
    })
  },
  mounted() {
    this.GET_STUDENTS();
  },


};
</script>

<style scoped>
</style>