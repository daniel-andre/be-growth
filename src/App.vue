<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
  *{
    box-sizing: border-box;
    font-family: 'Open Sans';
  }
  html, body, p, ul, li, h1, h2{
    margin: 0;
    padding: 0;
  }
  #app{
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
</style>
