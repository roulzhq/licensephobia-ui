<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { goto } from '$app/navigation';

	import { scanPackage } from '../api';
	import { scanning } from '../store';

	import PackageUpload from '$lib/components/PackageUpload.svelte';
	import PackageSearch from '$lib/components/PackageSearch.svelte';

	function onUploadStarted(files: File[]) {
		const file = files[0];

		scanning.set(true);
		scanPackage(file);
		goto('/scan');
	}

	function onPackageSearched(search: string) {
		const packageName = encodeURIComponent(search);

		goto(`/package/npm/${packageName}`);
	}
</script>

<svelte:head>
	<title>Home | Licensephobia</title>
</svelte:head>

<div class="home">
	<h1>
		Don't be afraid of
		<span class="package-manager-badge">Nodejs</span> licenses anymore!
	</h1>

	<div class="actions">
		<PackageSearch onSearch={onPackageSearched} />
		<span>or</span>
		<PackageUpload onFileUploaded={onUploadStarted} />
	</div>
</div>

<style lang="scss">
	.home {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-flow: column;

		h1 {
			margin-bottom: 200px;
			z-index: 1;
		}

		.actions {
			display: flex;
			justify-content: space-between;
			align-items: center;

			span {
				box-shadow: 3px 2px 6px 2px #21212144;
				padding: 6px 20px;
				border-radius: 25px;
				background-color: #fefefe;
				margin: 0 50px;
			}
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
	}
</style>
