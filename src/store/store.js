import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { TypesStore } from "./types/store.types";

import axios from "axios";

export const store = new Vuex.Store({
  state: {
    //variables
    Language: "es",
    //cargando los estudiantes
    Students: [],
    PStudents: []
  },
  getters: {
    //obtener el valor de las variables
    [TypesStore.state.LANGUAGE]: state => state.Language,
    [TypesStore.state.STUDENTS]: state => state.Students,
    [TypesStore.state.PSTUDENTS]: state => state.PStudents
  },
  actions: {
    //Se llama la api y parte operacional
    [TypesStore.actions.GET_STUDENTS]: ({ commit }) => {
      axios.get("students").then(response => {
        console.log("hola")
        commit(TypesStore.mutations.SET_STUDENTS, response.data);
      });
    },

    [TypesStore.actions.POST_STUDENTS]: ({ commit }, datajson) => {
      axios.post('students', datajson)
                .then(function (response) {
                  commit(TypesStore.mutations.SETT_STUDENTS, response.data);
                })
                .catch(function (error) {
                  commit(TypesStore.mutations.SETT_STUDENTS, error);
                });
    },

    [TypesStore.actions.DEL_STUDENTS]: ({ commit }, id) => {
      axios.delete('students/' + id)
                .then(response => {
                  commit(TypesStore.mutations.DELSET_STUDENTS, response.data);
                });
    },

    [TypesStore.actions.PUST_STUDENTS]: ({ commit }, list) => {
      axios.put(`students/${list[0]}`, list[1])
                .then(function (response) {
                  console.log(`students/${list[0]}`)
                  console.log(`------------${list[1]}`)
                  commit(TypesStore.mutations.PUTSET_STUDENTS, response.data);
                })
                .catch(function (error) {
                  commit(TypesStore.mutations.PUTSET_STUDENTS, error);
                });
    }
  },
  mutations: {
    //cambio de valor a las variables

    //Obtener el valor de la variable lenguaje que viene por parametro
    [TypesStore.mutations.SET_LANGUAGE]: (state, Language) => {
      state.Language = Language;
    },
    [TypesStore.mutations.SET_STUDENTS]: (state, Students) => {
      state.Students = Students;
    },
    [TypesStore.mutations.SETT_STUDENTS]: (state, PStudents) => {
      state.PStudents = PStudents;
    }
  },
  modules: {
    //
  }
});


