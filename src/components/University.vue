<template>
  <div>
    <img :src="Url"
      img-alt="Image"
      tag="article"
      style="max-width: 20rem;">
      <p>Your email address: {{ Name }}</p>
    <button href="#" variant="primary">Go somewhere</button>
  </div>
</template>
<script>
  export default {
    props: {
      Url: String,
      Name: String
    },
    method: {
    }
  }
</script>
<style scoped>
  div {
    width: 20%;
  }
</style>