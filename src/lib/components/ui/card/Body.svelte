<script lang="ts">
	import { cn } from '$lib/utils';

	export let className: string;
</script>

<div
	class={cn(
		'h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d] card-body',
		className
	)}
>
	<slot />
</div>
