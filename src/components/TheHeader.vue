<template>
  <header>
    <router-link to="/" tag="span" class="logo">
      <a class="text-logo" data-type="group" data-dynamic-mod="true">Be<span style="font-weight: 300;" class="span12">Growth</span></a>
    </router-link>
    <router-link :to="{name: 'Favoritos'}" tag="button" class="button-favorito">Favoritos</router-link>
  </header>
</template>

<script>
export default {
  name: "TheHeader"
}
</script>

<style scoped>
  header{
    background: #000;
    padding: 20px;
    display: flex;
    align-content: center;
    justify-content: space-between;
  }
  .text-logo{
    text-decoration: none;
    font-size: 1.6rem;
    line-height: 100%;
    color: #fff;
    font-weight: 600;
    text-transform: uppercase;
  }
  .logo{
    display: flex;
    align-items: center;
  }
  .button-favorito{
    background: white;
    border: none;
    color: black;
    padding: 10px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }
</style>