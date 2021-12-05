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
	import { PackageManager, PackageDetailResult } from '../../types';
	import { page } from '$app/stores';
	import { get } from 'svelte/store';

	import BackButton from '$lib/components/BackButton.svelte';

	import { searchPackage } from '../../api';

	let searchedPackage: PackageDetailResult = null;

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
				<div class="detail-no-background">
					<h1>{searchedPackage.package.name}</h1>
				</div>
				<div class="detail-background">
					<p>{packageDetails.manager}</p>
				</div>
				<div class="detail-background">
					<p>{searchedPackage.package.latestVersion}</p>
				</div>
				<div class="detail-background">
					<a
						rel="external"
						href={searchedPackage.package.homepage}
						target="_blank"
						on:click={(e) => e.stopPropagation()}>{searchedPackage.package.homepage}</a
					>
				</div>
			</div>
			<div class="package-description">
				<h4>{searchedPackage.package.description}</h4>
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
		grid-template-rows: 0.2fr 0.2fr;
	}

	.package-header {
		display: flex;
	}

	.package-summary {
		height: 90%;
		width: 60%;
		margin-top: 25px;
		background-color: #ffffff;
		grid-row: span 2;
		box-shadow: 3px 2px 6px 2px #00000033;
	}

	.package-header a {
		margin-top: 22px;
	}

	.package-header p {
		margin-top: 22px;
	}

	.detail-background {
		background-color: #ffffff;
		margin-top: 30px;
		margin-right: 20px;
		height: 25%;

		p {
			margin: 0px;
			padding: 0px 5px;
		}

		a {
			margin: 0px;
			padding: 0px 5px;
		}
	}

	h4 {
		margin: 0;
	}

	.detail-no-background {
		margin-right: 20px;
		margin-top: 5px;
		margin-bottom: 5px;
	}
</style>
