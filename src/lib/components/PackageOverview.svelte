<script>
	import Tag from '$lib/components/Tag.svelte';
</script>

<div class="overview">
	<h2>Overview</h2>
	<div class="overview-list">
		<div class="overview-list-permissions">
			<h3>Permissions</h3>
			<Tag type="success">Commercial Use</Tag>
			<Tag type="success">Distribution</Tag>
			<Tag type="success">Modification</Tag>
			<Tag type="success">Patent use</Tag>
			<Tag type="success">Private use</Tag>
		</div>
		<div class="overview-list-conditions">
			<h3>Conditions</h3>
			<Tag type="info">Disclose source</Tag>
			<Tag type="info">License notice</Tag>
			<Tag type="info">Copyright notice</Tag>
			<Tag type="info">Network use is distribution</Tag>
			<Tag type="info">Same license</Tag>
			<Tag type="info">State changes</Tag>
		</div>
		<div class="overview-list-limitations">
			<h3>Limitations</h3>
			<Tag type="error">Liability</Tag>
			<Tag type="error">Warranty</Tag>
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
		&-permissions {
		}
		&-conditions {
		}
		&-limitations {
		}
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
