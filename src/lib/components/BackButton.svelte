<script lang="ts">
	import { packages } from '../../store';

	export let type: 'home' | 'back' = 'back';

	function goBack() {
		if (type === 'back') {
			history.back();
		}
		if (type === 'home') {
			packages.reset();
			history.back();
		}
	}
</script>

<button on:click={goBack}>Back</button>

<style lang="scss">
	@import '../../mixins.scss';

	button {
		width: 100px;
		height: 100%;
		border-radius: 8px;
		border: none;
		background: #04f5bd;

		@include transition-smooth();

		&:hover {
			background: #00ffc3;
		}
	}
</style>
