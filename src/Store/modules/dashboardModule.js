import axios from 'axios'

export const actionTypes = {
  LOAD_UNIVERSITY: 'LOAD_UNIVERSITY'
}

export const mutationTypes = {
  LOAD_UNIVERSITY: 'LOAD_UNIVERSITY'
}

const state = {
  universityItems: {}
}

export const getters = {
  universityItems: (state) => { return state.universityItems }
}

const actions = {
  [actionTypes.LOAD_UNIVERSITY] ({ commit }) {
    return axios.get('/university.json')
    .then(response => {
      commit(mutationTypes.LOAD_UNIVERSITY, response.data)
    })
    .catch(error => console.log(error))
  }
}
const mutations = {
  [mutationTypes.LOAD_UNIVERSITY] (state, universityItems) {
    let universities = []
    for (let key in universityItems) {
      let university = universityItems[key]
      university.Id = key
      universities.push(university)
    }
    state.universityItems = universityItems
  }
}

export const module = {
  actions,
  mutations,
  state,
  getters
}
