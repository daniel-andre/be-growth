<template>
  <section>
    <TheHeader />
    <div class="div-title">
      <div class="title">
        <h1>Favoritos</h1>
      </div>
    </div>
    <div v-if="api.length">
      <ul class="lista">
        <li v-for="item in api" :key="item.id">
          <img :src="item.url" :alt="item.title">
          <span>{{item.title}}</span>
        </li>
      </ul>
    </div>
    <div v-else class="sem-resultado">
      <p>Nenhum favorito selecionado.</p>
    </div>
    <TheFooter />
  </section>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import fetchFavoritos from "@/mixins/fetchFavoritos.js";

export default {
  name: "Favorito",
  components: {
    TheHeader,
    TheFooter
  },
  mixins: [fetchFavoritos],
  created(){
    this.fetchFavoritos();
  }
}
</script>

<style scoped>
  .div-title{
    background: rgba(142, 157, 174, .4);
    padding: 50px;
    text-align: center;
    font-size: 30px;
  }
  .title{
    max-width: 960px;
    margin: 0 auto;
  }
  ul.lista{
    max-width: 960px;
    margin: 50px auto;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;
  }
  ul.lista li{
    position: relative;
    border: 1px solid #ccc;
  }
  ul.lista li img{
    max-width: 100%;
    display: block;
  }
  ul.lista li span{
    display: block;
    padding: 20px 10px;
  }
  .sem-resultado{
    margin: 50px;
    text-align: center;
  }
</style>