<template>
  <footer>
    <p>Feito com ❤ por <a href="https://github.com/daniel-andre" target="_blank">Daniel</a></p>
  </footer>
</template>

<script>
export default {
  name: "TheFooter"
}
</script>

<style scoped>
  footer{
    background: #000;
    padding: 20px;
  }
  footer p{
    text-align: center;
  }
  footer p, footer a{
    color: white;
  }
</style>