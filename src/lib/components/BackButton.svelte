<script lang="ts">
	function goBack() {
		history.back();
	}
</script>

<button on:click={goBack}>Back</button>

<style lang="scss">
	@import '../../mixins.scss';

	button {
		width: 10%;
		height: 100%;
		border: none;
		margin-top: 1%;
		background: #00ffc2;

		@include transition-smooth();

		&:hover {
			background: #00ff557e;
		}
	}
</style>
