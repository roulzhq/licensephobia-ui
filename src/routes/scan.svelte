<script>
	import { packages } from '../store';
	import PackageTile from '$lib/components/PackageTile.svelte';
</script>

<div class="package-viewer page">
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

<style lang="scss">
	.package-viewer {
		&-headline {
			display: flex;
			align-items: center;
		}

		&-body {
			position: relative;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-auto-rows: 120px;
			gap: 10px;
			padding: 0 10px 0 0;
			overflow-x: hidden;
			overflow-y: auto;
		}

		@media (max-width: 1024px) {
			.package-viewer-body {
				grid-template-columns: repeat(2, 1fr);
			}
		}

		@media (max-width: 540px) {
			.package-viewer-body {
				grid-template-columns: repeat(1, 1fr);
			}
		}
	}
</style>
