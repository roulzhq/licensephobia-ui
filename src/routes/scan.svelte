<script>
	import { packages } from '../store';
	import PackageTile from '$lib/components/PackageTile.svelte';
</script>

<div class="package-viewer">
	<h1 class="package-viewer-headline">Your package.json</h1>

	<div class="package-viewer-body">
		{#each $packages as pkg}
			<PackageTile
				versionText={pkg.version.used}
				licenseTag={pkg.license.type}
				pkgName={pkg.name}
				description={pkg.description}
				linkURL={pkg.url}
			/>
		{/each}
	</div>
</div>

<style>
	.package-viewer {
		display: grid;
		grid-template-rows: 1fr 5fr;
		height: 100%;
		width: 80%;
		padding: 50px 0;
		margin: auto;
	}

	.package-viewer-headline {
		display: flex;
		align-items: center;
	}

	.package-viewer-body {
		position: relative;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-auto-rows: 100px;
		gap: 10px;
		padding: 20px 0;
		overflow-x: hidden;
		overflow-y: auto;
	}
</style>
