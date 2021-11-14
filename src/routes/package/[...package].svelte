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
	import { PackageManager, PackageResult } from '../../types';
	import { page } from '$app/stores';
	import { get } from 'svelte/store';

	import BackButton from '$lib/components/BackButton.svelte';

	import { searchPackage } from '../../api';

	let searchedPackage: PackageResult = null;

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

	searchPackage(packageDetails.manager, packageDetails.name).then((res) => {
		searchedPackage = res;
	});
</script>

<svelte:head>
	<title>Package {packageDetails.name} | Licensephobia</title>
</svelte:head>

{#if searchedPackage}
	<div class="package-detail page">
		<BackButton />

		<div class="package-details">
			<div class="package-header">
				<h1>{searchedPackage.name}</h1>
				<p>{packageDetails.manager}</p>
				<p>{searchedPackage.version}</p>
				<a
					rel="external"
					href={searchedPackage.url}
					target="_blank"
					on:click={(e) => e.stopPropagation()}>{searchedPackage.url}</a
				>
			</div>
			<div class="package-description">
				<h4>{searchedPackage.description}</h4>
			</div>
		</div>
		<div class="package-summary" />
	</div>
{:else}
	loading...
{/if}

<style lang="scss">
	.package-details {
		display: grid;
		grid-template-rows: 0.3fr 0.2fr;
	}

	.package-header {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr 1.5fr;
	}

	.package-summary {
		height: 70%;
		width: 100%;
	}
</style>
