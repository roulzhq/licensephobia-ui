<script lang="ts">
	import type { PackageManager } from 'src/types';
	import { page } from '$app/stores';
	import { get } from 'svelte/store';

	function getPackageDetails(pkg: string) {
		console.log(pkg);

		// A rather hacky solution to only split the string once by a slash.
		// Package names can still contain slashes, and we want to allow them in the URL unescaped for now, I guess.
		// Internally, the URLs will be escaped tho
		const parts = pkg.split(/\/(.+)/);

		const packageManager: PackageManager = parts[0] as PackageManager;
		const packageName = parts[1];

		return { packageManager, packageName };
	}

	const currentPage = get(page);

	const packageDetails = getPackageDetails(currentPage.params.package);
</script>

<svelte:head>
	<title>Package details | Licensephobia</title>
</svelte:head>

<div class="package-detail page">
	<h1>Details:</h1>

	<div>
		<p>Package manager: {packageDetails.packageManager}</p>
		<p>Package: {packageDetails.packageName}</p>
	</div>
</div>
