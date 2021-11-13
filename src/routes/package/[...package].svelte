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
</script>

<svelte:head>
	<title>Package {packageDetails.name} | Licensephobia</title>
</svelte:head>

<div class="package-detail page">
	<h1>Details:</h1>

	<div>
		<p>Package manager: {packageDetails.manager}</p>
		<p>Package: {packageDetails.name}</p>
	</div>
</div>
