<script lang="ts">
	import { fly } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { library } from '@fortawesome/fontawesome-svg-core';
	import {
		faCheckCircle,
		faExclamationCircle,
		faQuestionCircle
	} from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon } from 'fontawesome-svelte';

	export let id = '';
	export let name = '';
	export let versionText = '';
	export let licenseTag = '';
	export let description = '';
	export let linkURL = '';
	export let found = false;
	export let known = false;

	library.add(faCheckCircle, faExclamationCircle, faQuestionCircle);

	function redirect() {
		goto(`/package/npm/${id}`);
	}
</script>

<div class="package-tile" in:fly={{ y: 50, duration: 800 }} on:click={redirect}>
	<div class="package-tile-body">
		<p class="ver-text">{versionText}</p>
		<h2>{name}</h2>
		<p class="description">{description}</p>
	</div>
	<div class="package-tile-footer">
		<a rel="external" href={linkURL} target="_blank" on:click={(e) => e.stopPropagation()}>
			visit website
		</a>
		<button>More details</button>
	</div>

	<div class="license-badge">
		{#if !found && !known}
			<FontAwesomeIcon icon={faExclamationCircle} />
			{'UNDEFINED'}
		{:else if !found}
			<FontAwesomeIcon icon={faExclamationCircle} />
		{:else if !known}
			<FontAwesomeIcon icon={faQuestionCircle} />
		{:else}
			<FontAwesomeIcon style="fill:aqua" class="icon" icon={faCheckCircle} />
		{/if}
		{licenseTag}
	</div>
</div>

<style lang="scss">
	.package-tile {
		background-color: #fcfcfc;
		border-radius: 6px;
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: 1fr auto;
		box-shadow: 3px 2px 6px 2px #00000033;
		transition: all 100ms ease-in-out;
		cursor: pointer;
		position: relative;
		padding: 8px;
		overflow: hidden;

		&:hover {
			box-shadow: 3px 2px 6px 2px #00000044;
			background-color: #ffffff;
		}

		.package-tile-body {
			.package-tile:hover {
				box-shadow: 3px 2px 6px 2px #00000044;
			}

			.ver-text {
				font-size: 11px;
				margin: 0;
			}

			h2 {
				font-size: 18px;
				margin: 0;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			.description {
				grid-row: 3;
				font-size: 14px;
				margin: 0;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}

		.package-tile-footer {
			display: flex;
			justify-content: space-between;
			align-items: center;

			button {
				border: 0px;
				font-size: 13px;
				padding: 6px;
			}
		}
	}

	.license-badge {
		background-color: #f2f2f2;
		position: absolute;
		top: 10px;
		right: 10px;
		font-size: 14px;
		padding: 6px;
	}

	.icon path {
		fill: #15d277;
	}
</style>
