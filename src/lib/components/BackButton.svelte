<script lang="ts">
	function goBack() {
		history.back();
	}
</script>

<button on:click={goBack}>Back</button>

<style lang="scss">
	@import '../../mixins.scss';

	button {
		width: 100px;
		height: 100%;
		border: none;
		background: #04f5bd;

		@include transition-smooth();

		&:hover {
			background: #00ffc3;
		}
	}
</style>
