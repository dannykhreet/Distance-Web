import axios from 'axios'
import * as firebase from 'firebase'

export const actionTypes = {
  SEND_UNIVERSITY: 'SEND_UNIVERSITY'
}

export const mutationTypes = {
  SEND_UNIVERSITY: 'SEND_UNIVERSITY'
}

const state = {
  universityItem: {}
}

export const getters = {
  universityItem: (state) => { return state.universityItem }
}

// return axios.post('/university.json', university)
const actions = {
  [actionTypes.SEND_UNIVERSITY] ({ commit } , university) {
    debugger
    const univsersity = {
        Name: university.Name,
        Location: university.location,
        email: university.email,
      }
      let imageUrl
      let key
    firebase.database().ref('university').push(univsersity)
        .then((data) => {
          key = data.key
          return key
          debugger
        })
      .then(key => {
        const filename = university.image.name
        const ext = filename.slice(filename.lastIndexOf('.'))
        return firebase.storage().ref('university/' + key + '.' + ext).put(university.image)
        debugger
      })
      .then(filedata => {
        debugger
        let imagePath = filedata.metadata.fullPath;
        // creating ref to our image file and get the url
        return firebase.storage().ref().child(imagePath).getDownloadURL();
        debugger
      })
      .then(url => {
        imageUrl = url;
        debugger
        return firebase.database().ref('university').child(key).update({Url: imageUrl});
      })
      .then(() => {
              // commit(mutationTypes.SEND_UNIVERSITY, response)
              debugger
      })
      .catch(error => console.log(error))
  }
}
const mutations = {
  [mutationTypes.SEND_UNIVERSITY] (state, universityItem) {
    debugger
    state.universityItem = universityItem
  }
}

export const module = {
  actions,
  mutations,
  state,
  getters
}
