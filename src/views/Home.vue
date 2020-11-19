<template>
<section>
  <TheHeader />
  <Busca />
  <div v-if="api.length">
    <ul class="lista">
      <li v-for="item in api" :key="item.id">
        <img :src="item.url" :alt="item.title">
        <span>{{item.title}}</span>
        <button class="favorito" @click="adicionarFavorito(item)">⭐</button>
      </li>
    </ul>
    <Paginacao
      :produtosTotal="totalItens"
      :produtosPorPagina="6"
    />
  </div>
  <div v-else class="sem-resultado">
    <p>Nenhum resultado encontrado para '{{this.$route.query.q}}'.</p>
  </div>
  <TheFooter />
</section>
</template>

<script>

import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import fetchData from "@/mixins/fetchData.js";
import Paginacao from "@/components/Paginacao.vue";
import Busca from "@/components/Busca.vue";

export default {
  name: 'Home',
  components: {
    TheHeader,
    TheFooter,
    Paginacao,
    Busca
  },
  methods: {
    isEqual(element, value){
      return element === value;
    },
    adicionarFavorito(item){
      event.target.classList.toggle("favorito-selecionado");
      const itemId = item.id;
      const lista = this.$store.state.favoritos;

      if(!lista.length){
        this.$store.state.favoritos.push(item);
      }else{
        const listaIds = lista.map(item => item.id);
        const isEqual = listaIds.some(item => itemId === item);
        if(isEqual){
          const itemIndex = lista.indexOf(item);
          lista.splice(itemIndex, 1);
        }else{    
            this.$store.state.favoritos.push(item);
        }
      }
    }
  },
  mixins: [fetchData],
  created(){
    this.fetchData(`${(this.$route.query._page) ? this.$route.query._page : ""}`, `${(this.$route.query.q) ? this.$route.query.q : ""}`);
    this.$router.push({
      query: {
        _page: 1
      },
    });
  },
  beforeRouteUpdate(to, from, next) {
    const hasSearch = !! to.query.q;
    if(hasSearch){
      this.fetchData(`${to.query._page}`, `${to.query.q}`);
    }else {
      this.fetchData(`${to.query._page}`);
    }
    next();
  }
}
</script>

<style scoped>
  ul.lista{
    max-width: 960px;
    margin: 50px auto;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;
    padding: 0 20px;
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
  ul.lista li .favorito{
    position: absolute;
    top: 10px;
    right: 10px;
    background: #fff;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: .3s;
  }
  ul.lista li .favorito:hover{
    transform: scale(.9);
  }
  ul.lista li .favorito:active{
    transform: scale(.8);
  }
  ul.lista li .favorito-selecionado{
    background: #000;
  }
  .sem-resultado{
    margin: 50px;
    text-align: center;
  }
  @media (max-width: 1000px){
    ul.lista{
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 600px){
    ul.lista{
      grid-template-columns: 1fr;
    }
  }
</style>