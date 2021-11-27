<script lang="ts">
	export let type: 'info' | 'success' | 'error' = 'info';
</script>

<div class="tag tag-{type}">
	<div class="circle-tag circle-tag-{type}" />
	<slot />
</div>

<style lang="scss">
	.tag {
		border-radius: 12px;
		border-width: 1px;
		border-style: solid;
		font-size: 11px;
		padding: 4px 10px 4px 8px;
		display: inline-block;
		margin: 2.5px;

		&-info {
			border-color: #5bbfde;
			background-color: #dbf1fe;
		}
		&-success {
			border-color: #6ee7b7;
			background-color: #d1fae5;
		}
		&-error {
			border-color: #f87171;
			background-color: #fee2e2;
		}
	}

	.circle-tag {
		height: 8px;
		width: 8px;
		border-radius: 50%;
		display: inline-block;
		&-info {
			background-color: #5bbfde;
		}
		&-success {
			background-color: #6ee7b7;
		}
		&-error {
			background-color: #f87171;
		}
	}
</style>
