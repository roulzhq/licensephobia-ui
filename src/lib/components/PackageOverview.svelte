<script>
	import Tag from '$lib/components/Tag.svelte';
	import { summary } from '../../store';
</script>

<div class="overview">
	<h2>Overview</h2>
	<div class="overview-list">
		<div class="overview-list-permissions">
			<h3>Permissions</h3>
			{#each $summary.conditions.permissions as permission}
				<Tag type="success">{permission}</Tag>
			{/each}
		</div>
		<div class="overview-list-conditions">
			<h3>Conditions</h3>
			{#each $summary.conditions.conditions as condition}
				<Tag type="info">{condition}</Tag>
			{/each}
		</div>
		<div class="overview-list-limitations">
			<h3>Limitations</h3>
			{#each $summary.conditions.limitations as limitation}
				<Tag type="error">{limitation}</Tag>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	h2 {
		grid-row: 1;
		font-size: 24px;
		padding-left: 1%;
		padding-top: 0.5%;
		margin: 0%;
	}

	h3 {
		font-size: 18px;
		margin: 6px 0px;
	}

	.overview-list {
		display: grid;
		grid-row: 2;
		grid-template-columns: 1fr 1fr 1fr;
		padding-left: 1%;
	}
	.overview {
		display: grid;
		grid-template-rows: 0.2fr 2fr;
		border-radius: 6px;
		background-color: #fcfcfc;
		box-shadow: 3px 2px 6px 2px #00000033;
		transition: all 100ms ease-in-out;
		margin-left: 10px;
		margin-right: 16px;
	}
</style>
