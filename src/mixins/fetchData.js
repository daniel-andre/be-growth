export default {
  data(){
    return {
      total: 6,
      pagina: 1,
      totalItens: null,
      api: null
    }
  },
  methods: {
    async fetchData(pagina = 1, busca = ""){
      if(!this.totalItens){
        const url = await fetch(`https://jsonplaceholder.typicode.com/photos`);
        const response = await url.json();
        this.totalItens = Object.keys(response).length;
      }

      this.pagina = pagina;

      const url = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${this.total}&_page=${this.pagina}&q=${busca}`);
      const response = await url.json();
      this.api = response;
    }
  }
}