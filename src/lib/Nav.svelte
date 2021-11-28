<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav>
	<img src="../../static/favicon.svg" />
	<a sveltekit:prefetch class="title" href="/">Licensephobia</a>
</nav>

<style lang="scss">
	nav {
		height: 100%;
		background-color: #fefefe7c;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 2;
		height: 50px;
		width: 100vw;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #afafaf;
		padding: 0 20px;

		.title {
			margin: 0;
			display: inline-block;
			color: var(--primary-font);
			text-transform: uppercase;
			letter-spacing: 2px;
			font-size: 24px;
			font-weight: bold;
			text-decoration: none;
		}
	}

	img {
		width: 2em;
		height: 2em;
		margin-bottom: -6px;
	}
</style>
