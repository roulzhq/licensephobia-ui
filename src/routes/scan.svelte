<script context="module">
	export const ssr = false;
</script>

<script lang="ts">
	import BackButton from '../lib/components/BackButton.svelte';
	import { goto } from '$app/navigation';
	import PackageTile from '../lib/components/PackageTile.svelte';
	import { get } from 'svelte/store';
	import PackageOverview from '$lib/components/PackageOverview.svelte';

	import { packages, scanning } from '../store';

	console.log(scanning);

	if (!get(scanning)) {
		goto('/', { replaceState: true });
	}
</script>

<svelte:head>
	<title>Scan Results | Licensephobia</title>
</svelte:head>

<div class="package-viewer page">
	<BackButton type="home" />
	<h1 class="package-viewer-headline">Your package.json</h1>

	<PackageOverview />

	<div class="package-viewer-body">
		{#each $packages as pkg}
			<PackageTile
				versionText={pkg.data.version}
				licenseTag={pkg.data.package.license.type}
				name={pkg.data.found ? pkg.data.package.name : pkg.data.name}
				id={pkg.data.package.id}
				description={pkg.data.package.description}
				linkURL={pkg.data.package.homepage}
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
			padding: 0 10px 10px 10px;
			margin-top: 15px;
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
