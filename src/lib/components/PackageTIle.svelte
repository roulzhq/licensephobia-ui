<script>
	import { fly } from 'svelte/transition';

	export let versionText = '12.0.1';
	export let licenseTag = 'MIT';
	export let pkgName = '@angular/core';
	export let description = 'Angular: The core framework';
	export let linkURL = '';
</script>

<div class="package-tile" in:fly={{ y: 50, duration: 800 }}>
	<div class="package-tile-body">
		<p class="ver-text">{versionText}</p>
		<h2>{pkgName}</h2>
		<p class="description">{description}</p>
	</div>
	<div class="package-tile-footer">
		<a rel="external" href={linkURL} target="_blank">Visit website</a>
		<button>More details</button>
	</div>

	<div class="license-badge">{licenseTag}</div>
</div>

<style lang="scss">
	.package-tile {
		background-color: #ffffff;
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

		.package-tile-body {
			.package-tile:hover {
				box-shadow: 3px 2px 6px 2px #00000044;
			}

			.package-tile-footer {
				display: flex;
				justify-content: space-between;
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
			a {
				text-decoration: underline;
				font-size: 13px;
				margin: 0;
			}

			button {
				margin-right: 12%;
				border: 0px;
				font-size: 13px;
				margin: 0;
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
</style>
