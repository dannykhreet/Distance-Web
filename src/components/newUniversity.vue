<template>
  <div id="signup">
    <div class="signup-form">
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="email">Mail</label>
          <input
                  type="email"
                  id="email"
                  v-model="email">
        </div>
        <div class="input">
          <label for="name">Name</label>
          <input
                  type="text"
                  id="name"
                  v-model="name">
        </div>
         <div class="input">
          <label for="location">Location</label>
          <input
                  type="text"
                  id="location"
                  v-model="location">
        </div>
        <div class="input">
          <label for="universityType">University Type</label>
          <select id="universityType" v-model="universityType">
            <option value="private">Private</option>
            <option value="goverment">Goverment</option>
          </select>
        </div>
         <div class="input">
          <label for="Image">Image</label>
          <input
                  type="file"
                  id="Image"
                  ref="fileInput"
                  accept="image/*"
                  @change="onFilePicked">
        </div>
         <img :src="imageUrl" height="150">
        <div class="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import { actionTypes as newuniverstiyActionTypes } from '../Store/modules/newUniversityModule.js'

  export default {
    data () {
      return {
        email: '',
        name: '',
        universityType: 'private',
        location: '',
        imageUrl: '',
        image: null
      }
    },
    methods: {
       onFilePicked ( event ) {
        const files = event.target.files
        let filename = files[0].name
        if (filename.lastIndexOf('.') <= 0) {
          return alert('Please add a valid file!')
        }
        const fileReader = new FileReader()
        fileReader.addEventListener('load', () => {
          this.imageUrl = fileReader.result
        })
        fileReader.readAsDataURL(files[0])
        this.image = files[0]
      },
      onSubmit () {
        if (!this.image) {
            return
          }
          let univsersityData = {
            Name: this.name,
            location: this.location,
            image: this.image,
            email: this.email,
          }
          debugger
          let self = this
          self.$store.dispatch(newuniverstiyActionTypes.SEND_UNIVERSITY , univsersityData)
          debugger
          // this.$store.dispatch('createMeetup', univsersityData)
          // this.$router.push('/meetups')

        }
      },
   }
</script>

<style scoped>
  .signup-form {
    width: 400px;
    margin: 30px auto;
    border: 1px solid #eee;
    padding: 20px;
    box-shadow: 0 2px 3px #ccc;
  }

  .input {
    margin: 10px auto;
  }

  .input label {
    display: block;
    color: #4e4e4e;
    margin-bottom: 6px;
  }

  .input.inline label {
    display: inline;
  }

  .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  .input.inline input {
    width: auto;
  }

  .input input:focus {
    outline: none;
    border: 1px solid #521751;
    background-color: #eee;
  }

  .input select {
    border: 1px solid #ccc;
    font: inherit;
  }



  .submit button {
    border: 1px solid #521751;
    color: #521751;
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
  }

  .submit button:hover,
  .submit button:active {
    background-color: #521751;
    color: white;
  }

  .submit button[disabled],
  .submit button[disabled]:hover,
  .submit button[disabled]:active {
    border: 1px solid #ccc;
    background-color: transparent;
    color: #ccc;
    cursor: not-allowed;
  }
</style>