<template>
  <ul v-if="paginasTotal > 1" class="paginacao">
    <li v-for="pagina in paginas" :key="pagina">
      <router-link :to="{query: query(pagina)}">{{pagina}}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    produtosPorPagina: {
      type: Number,
      default: 1,
    },
    produtosTotal: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    query(pagina) {
      return {
        ...this.$route.query,
        _page: pagina,
      };
    },
  },
  computed: {
    paginas() {
      const current = Number(this.$route.query._page);
      const range = 5;
      const offset = Math.ceil(range / 2);
      const total = this.paginasTotal;
      const pagesArray = [];
      for (let i = 1; i <= total; i++) {
        pagesArray.push(i);
      }
      pagesArray.splice(0, current - offset);
      pagesArray.splice(range, total);
      return pagesArray;
    },
    paginasTotal() {
      const total = this.produtosTotal / this.produtosPorPagina;
      return total !== Infinity ? Math.ceil(total) : 0;
    },
  },
};
</script>

<style scoped>
  ul{
    max-width: 960px;
    margin: 0 auto;
    margin-bottom: 50px;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ul li{
    display: block;
  }
  ul li:not(:last-child){
    margin-right: 10px;
  }
  ul li a{
    text-decoration: none;
    background: rgba(0, 0, 0, .5);
    color: white;
    font-weight: bold;
    padding: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ul li a.router-link-exact-active{
    background: #000;
  }
</style>