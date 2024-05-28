<script lang="ts">
	import { CardContainer, CardBody, CardItem } from '$lib/ui/card';

	let isMouseEntered = false;
</script>

<CardContainer bind:isMouseEntered className="inter-var">
	<CardBody
		className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6   "
	>
		<CardItem
			{isMouseEntered}
			translateZ="50"
			className="text-xl font-bold text-neutral-600 dark:text-white"
		>
			Wallet
		</CardItem>
		<CardItem {isMouseEntered} translateZ="100" className="w-full mt-4">
			<img
				src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				height="1000"
				width="1000"
				class="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
				alt="thumbnail"
			/>
		</CardItem>

		<CardItem
			{isMouseEntered}
			translateZ="50"
			className="text-sm  text-neutral-600 dark:text-white my-5"
			><p>
				Standard chunk of Lorem Ipsum used since the 1500s is showed below for those interested.
			</p>
			<p>
				Standard chunk of Lorem Ipsum used since the 1500s is showed below for those interested.
			</p></CardItem
		>
	</CardBody>
</CardContainer>
