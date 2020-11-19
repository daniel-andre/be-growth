<template>
  <form>
    <div class="busca">
      <input
        name="busca"
        id="busca"
        type="text"
        v-model="busca"
        placeholder="Pesquisar por um produto..."
      />
      <input
        type="submit"
        id="lupa"
        value="Buscar"
        @click.prevent="buscarProdutos"
      />
    </div>
  </form>
</template>

<script>
export default {
  name: "Busca",
  data() {
    return {
      busca: "",
    };
  },
  methods: {
    buscarProdutos() {
      this.$router.push({
        query: {
          q: this.busca,
          _page: 1
        },
      });
    },
  },
};
</script>

<style scoped>
  form{
    background: rgba(142, 157, 174, .4);
    padding: 50px;
    text-align: center;
  }
  form div{
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    box-shadow: 0 6px 12px rgba(30,60,90,.2);
  }
  form input{
    padding: 20px;
    border: none;
    font-size: 16px;
  }
  form input:nth-child(1){
    flex: 3;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  form input:nth-child(2){
    flex: 1;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background: #000;
    color: white;
    font-size: 20px;
    cursor: pointer;
    transition: .3s;
  }
  form input:nth-child(2):hover{
    background: rgba(0, 0, 0, .7);
  }
  @media (max-width: 600px){
    form{
      padding: 50px 20px;
    }
  }
</style>