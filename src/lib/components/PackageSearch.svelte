<script lang="ts">
	import { onMount } from 'svelte';
	import { globals } from '../../globals';

	export let onSearch = (search: string) => {};

	let searchString = '';
	let preview = [];
	let socket;

	onMount(() => {
		socket = new WebSocket(`${globals.api.ws}/searchPreview`);

		socket.onopen = () => {
			console.log('open');
		};

		socket.onmessage = (e) => {
			const data: { name: string }[] = JSON.parse(e.data);

			preview = data.map((i) => i.name);
		};

		socket.onclose = (e) => {
			console.log(e);
		};
	});

	const onSubmit = async () => {
		socket.close();
		onSearch(searchString);
	};

	function debounce(func, timeout = 200) {
		let timer;

		return (...args) => {
			clearTimeout(timer);
			timer = setTimeout(() => {
				func.apply(this, args);
			}, timeout);
		};
	}

	const onInput = (e: Event) => {
		searchString = (e.target as HTMLInputElement).value;

		const request = {
			packageManager: 'npm',
			name: searchString
		};

		socket.send(JSON.stringify(request));
	};

	const onKeypress = (e) => {
		if (e.charCode === 13) onSubmit();
	};

	const search = (search) => {
		searchString = search;
		onSubmit();
	};
</script>

<div class="package-search">
	<input
		type="text"
		value={searchString}
		on:input={debounce(onInput)}
		on:keypress={onKeypress}
		placeholder="Search package"
	/>

	<button on:click={onSubmit}>SEARCH</button>

	{#if preview.length !== 0}
		<div class="preview">
			<ul>
				{#each preview as item}
					<li on:click={search(item)}>{item}</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>

<style lang="scss">
	.package-search {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 60px;
		position: relative;
		z-index: 1;

		.preview {
			position: absolute;
			width: 100%;
			bottom: -5px;
			transform: translateY(100%);
			background: #fefefe;
			box-shadow: 3px 2px 6px 2px #21212144;

			ul {
				margin: 0;
				padding: 0;
				list-style-type: none;

				li {
					padding: 8px;
					cursor: pointer;

					&:hover {
						background-color: #fafafa;
					}
				}
			}
		}
	}
	input,
	button {
		display: block;
		position: relative;
		width: 300px;
		margin: auto;
		border: 0;
		height: 60px;
		outline: 0;
	}
	input {
		border-radius: 10px 0 0 10px;
		padding: 0 0 0 16px;
		cursor: text;
	}
	button {
		width: 100px;
		cursor: pointer;
	}
	input:after {
		border-radius: 10px 0 0 10px;
	}
	input:after,
	button:after {
		transition: 200ms all ease;
		background-color: #fcfcfc;
		border: 1px solid #afafaf;
		line-height: 60px;
		color: #252525;
		font-size: 1.5em;
		text-align: center;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: block;
		content: 'Select package.json';
	}
	button:after {
		content: 'Search';
		border-radius: 0px 10px 10px 0;
	}
	input:hover:after,
	button:hover:after {
		background-color: #f1f1f1;
	}
</style>
