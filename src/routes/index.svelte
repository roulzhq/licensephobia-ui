<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import PackageUpload from '$lib/components/PackageUpload.svelte';
	import PackageSearch from '$lib/components/PackageSearch.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="home">
	<h1>
		Don't be afraid of your
		<span class="package-manager-badge">Nodejs</span> licenses anymore!
	</h1>

	<div class="actions">
		<PackageSearch />
		<span>or</span>
		<PackageUpload />
	</div>
</div>

<style>
	.home {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-flow: column;
	}
	h1 {
		margin-bottom: 200px;
		z-index: 1;
	}

	.actions {
		display: flex;
		justify-content: space-between;
		width: 50%;
		align-items: center;
	}
	.actions span {
		box-shadow: 3px 2px 6px 2px #21212144;
		padding: 6px 20px;
		border-radius: 25px;
		background-color: #fefefe;
	}
	.package-manager-badge {
		vertical-align: middle;
		box-shadow: 3px 2px 6px 2px #21212144;
		border-radius: 25px;
		font-size: 16px;
		padding: 6px 20px;
		margin: 0 16px;
		background-color: #fefefe;
	}
</style>
