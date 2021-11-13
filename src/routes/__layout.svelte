<script lang="ts">
	import Nav from '$lib/Nav.svelte';
	import '../app.scss';
</script>

<Nav />

<div class="background-gradient" />
<main>
	<slot />
</main>

<style lang="scss">
	main {
		height: 100vh;
		margin: auto;
	}

	.background-gradient {
		position: fixed;
		top: 0;
		right: 0;
		width: 50%;
		height: 100%;
		z-index: -1;
		clip-path: polygon(35% 0, 100% 0, 100% 100%, 0% 100%);
		background: linear-gradient(#00ff557e 0%, #00ffc2 100%);
	}
</style>
