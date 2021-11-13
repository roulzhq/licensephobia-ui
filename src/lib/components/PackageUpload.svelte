<script lang="ts">
	export let onFileUploaded = (files: File[]) => {};

	let files;

	const uploadClick = async () => {
		onFileUploaded(files);
	};
</script>

<div class="package-upload">
	<input type="file" id="uploadJson" name="uploadJson" accept=".json,application/json" bind:files />

	<button on:click={uploadClick}>Upload</button>
</div>

<style>
	.package-upload {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 60px;
	}
	input,
	button {
		display: block;
		position: relative;
		width: 300px;
		margin: auto;
		cursor: pointer;
		border: 0;
		height: 60px;
		outline: 0;
	}
	input {
		border-radius: 10px 0 0 10px;
	}
	button {
		width: 100px;
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
		content: 'Upload';
		border-radius: 0px 10px 10px 0;
	}
	input:hover:after,
	button:hover:after {
		background-color: #f1f1f1;
	}
</style>
