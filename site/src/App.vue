<template>
	<div>
		<div>{{ titulo }}</div>
		<ul>
			<li v-for="menu of listaMenu">
				<a v-bind:href="menu.link">{{ menu.nome }}</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "Minha primeira SPA",
      listaMenu: []
    };
  },

  created() {
    //utilizando o VueResource $http
    this.$http.get("http://localhost:3000/lista-menu")
      .then(response => response.json())
      .then(lista => this.listaMenu = lista);
  }
};
</script>

<style lang="scss">
</style>
