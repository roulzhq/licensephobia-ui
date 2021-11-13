<script context="module">
	export const load = async ({ page }) => ({
		props: {
			key: page.path
		}
	});
</script>

<script lang="ts">
	import Nav from '$lib/Nav.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import '../app.scss';
	export let key;
</script>

<Nav />

<div class="background-gradient" />
<main>
	<PageTransition refresh={key}>
		<slot />
	</PageTransition>
</main>

<style lang="scss">
	main {
		height: 100vh;
		width: 100vw;
		margin: auto;
		overflow: hidden;
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
