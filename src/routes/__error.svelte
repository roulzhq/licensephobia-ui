<script context="module" lang="ts">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ error, status }) {
		return {
			props: {
				status: status,
				error: error.message
			}
		};
	}
</script>

<script>
	export let status;
	export let error;
</script>

<div class="error-page">
	<h1>{status}</h1>
	<p>{error}</p>
</div>

<style lang="scss">
	.error-page {
		display: flex;
		justify-content: center;
		align-self: center;
		flex-flow: column;
		height: 100vh;
		width: 80%;
		margin: auto;
		text-align: center;

		h1 {
			font-size: 3em;
		}
	}
</style>
