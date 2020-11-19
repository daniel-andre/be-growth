export default {
  data(){
    return {
      api: null
    }
  },
  methods: {
    fetchFavoritos(){
      const lista = this.$store.state.favoritos;
      this.api = lista;
    }
  }
}