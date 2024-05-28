<script lang="ts">
	import CardSample from '$lib/components/card/CardSample.svelte';
	import { Checkbox } from '$lib/components/ui/checkbox/index';
	import { Label } from '$lib/components/ui/label/index';
	let isMouseTrackRecordProps = false;
	let isTransformProps = false;
	let isItemHoverTransformProps = false;

	function handleCheck1Change(v: any) {
		isMouseTrackRecordProps = v;
	}
	function handleCheck2Change(v: any) {
		isTransformProps = v;
	}
	function handleCheck3Change(v: any) {
		isItemHoverTransformProps = v;
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<section class="mx-auto px-6 sm:px-8 md:px-28 lg:px-20 xl:px-0 max-w-screen-lg">
	<div
		class="py-24 md:py-32 flex flex-col justify-center h-full min-h-screen gap-6 xs:gap-7 xs:mt-0"
	>
		<div class="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
			<div>
				<div class="flex items-center space-x-2 mt-3">
					<Label>
						<Checkbox
							bind:checked={isMouseTrackRecordProps}
							onCheckedChange={(v) => {
								handleCheck1Change(v);
							}}
						/>
						Apply to record track when mouse move
					</Label>
				</div>
				<div class="flex items-center space-x-2 mt-3">
					<Label>
						<Checkbox
							bind:checked={isTransformProps}
							onCheckedChange={(v) => {
								handleCheck2Change(v);
							}}
						/>
						Apply to change transtrom when hover card
					</Label>
				</div>
				<div class="flex items-center space-x-2 mt-3">
					<Label>
						<Checkbox
							bind:checked={isItemHoverTransformProps}
							onCheckedChange={(v) => {
								handleCheck3Change(v);
							}}
						/>
						Apply to change transtrom when hover card item
					</Label>
				</div>
			</div>
			<div>
				<CardSample {isMouseTrackRecordProps} {isTransformProps} {isItemHoverTransformProps} />
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
