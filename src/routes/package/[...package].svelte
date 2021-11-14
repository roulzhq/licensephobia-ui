<script context="module" lang="ts">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ page, fetch, session, stuff }) {
		// A rather hacky solution to only split the string once by a slash.
		// Package names can still contain slashes, and we want to allow them in the URL unescaped for now, I guess.
		// Internally, the URLs will be escaped tho

		const parts = page.params.package.split(/\/(.+)/);

		const manager: PackageManager = parts[0] as PackageManager;

		if (manager !== PackageManager.NPM) {
			return {
				status: 404,
				error: new Error(
					'Currently, only the NPM package manager is supported. We will add others soon!'
				)
			};
		}

		return {
			status: 200
		};
	}
</script>

<script lang="ts">
	import { PackageManager } from '../../types';
	import { page } from '$app/stores';
	import { get } from 'svelte/store';
	import BackButton from '$lib/components/BackButton.svelte';

	import { packages } from '../../store';
	import { resourceLimits } from 'worker_threads';

	const error: string = '';

	function getPackageDetails(pkg: string) {
		// A rather hacky solution to only split the string once by a slash.
		// Package names can still contain slashes, and we want to allow them in the URL unescaped for now, I guess.
		// Internally, the URLs will be escaped tho
		const parts = pkg.split(/\/(.+)/);

		const manager: PackageManager = parts[0] as PackageManager;

		if (manager !== PackageManager.NPM) {
			throw new Error(
				'Currently, only the NPM package manager is supported. We will add others soon!'
			);
		}

		const name = parts[1];

		return { manager, name };
	}

	const currentPage = get(page);

	const packageDetails = getPackageDetails(currentPage.params.package);

	let searchedPackage = $packages.filter(function (iPackage) {
		return iPackage.name == packageDetails.name;
	});
</script>

<svelte:head>
	<title>Package {packageDetails.name} | Licensephobia</title>
</svelte:head>
<!-- {#each $packages.get as iPackage}
	{packageResults.push(iPackage)}
	{console.log(packageResults)}
{/each} -->
<div class="package-detail page">
	<BackButton />
	<h1>Details:</h1>

	<div class="package-details">
		<h2>{packageDetails.name}</h2>
		<p>{packageDetails.manager}</p>
		<p>{searchedPackage[0].version.used}</p>
		<p>{searchedPackage[0].url}</p>
		<h4>{searchedPackage[0].description}</h4>
		<!-- <p>{pkg.version.used}</p> -->
	</div>
	<div class="package-summary" />
</div>

<style lang="scss">
	.package-details {
		display: grid;
		grid-template-columns: 3fr 1fr 1fr 2fr;
		grid-template-rows: 0.3fr 0.2fr;
	}

	.package-summary {
		height: 70%;
		width: 100%;
	}
</style>
