<script lang="ts">
	import type { PackageManager } from 'src/types';
	import { page } from '$app/stores';
	import { get } from 'svelte/store';

	function getPackageDetails(pkg: string) {
		const parts = pkg.split('/');

		if (parts.length === 2) {
			const packageManager: PackageManager = parts[0] as PackageManager;
			const packageName = parts[1];

			return { packageManager, packageName };
		}

		throw new Error('Could not ');
	}

	const currentPage = get(page);

	const packageDetails = getPackageDetails(currentPage.params.package);
</script>

<div class="package-detail page">
	<h1>Details:</h1>

	<div>
		<p>Package manager: {packageDetails.packageManager}</p>
		<p>Package: {packageDetails.packageName}</p>
	</div>
</div>
