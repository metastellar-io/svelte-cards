<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import type { Writable } from 'svelte/store';
	import { cn, getCurrentTimeStamp } from '$lib/utils';

	export let className: string | undefined = undefined;
	export let containerClassName: string | undefined = undefined;
	export let isMouseEntered = false;

	export let stopRecording = false;

	type Point = {
		x: number;
		y: number;
	};

	type TrackDataType = {
		point: Point;
		timestamp: number;
	};

	let recording = true;

	let mouseData: Writable<TrackDataType[]> = writable([]);
	// let mouseData = writable([]);
	let oldData: TrackDataType = {
		point: {
			x: 0,
			y: 0
		},
		timestamp: getCurrentTimeStamp()
	};

	const getDistance = ({
		oldData,
		newData
	}: {
		oldData: TrackDataType;
		newData: TrackDataType;
	}): number => {
		return Math.sqrt(
			Math.pow(Math.abs(oldData.point.x - newData.point.x), 2) +
				Math.pow(Math.abs(oldData.point.y - newData.point.y), 2)
		);
	};

	const getTimeInterval = ({
		oldData,
		newData
	}: {
		oldData: TrackDataType;
		newData: TrackDataType;
	}) => {
		return newData.timestamp - oldData.timestamp;
	};

	const recordMouseMovement = (
		oldData: TrackDataType,
		event: MouseEvent,
		distanceThreshold: number,
		timeThreshold: number,
		recordingFlag: boolean
	): TrackDataType => {
		if (recordingFlag) {
			const newData: TrackDataType = {
				point: {
					x: event.clientX,
					y: event.clientY
				},
				timestamp: getCurrentTimeStamp()
			};
			const distance = getDistance({ oldData, newData });
			const timeInterval = getTimeInterval({ oldData, newData });
			console.log('distance-time interval', distance, timeInterval);
			if (distance >= distanceThreshold && timeInterval > timeThreshold) {
				mouseData.update((data) => [
					...data,
					{
						point: newData.point,
						timestamp: timeInterval
					}
				]);
				mouseData.subscribe((value) => {
					console.log(value);
				});
				return newData;
			}
		}
		return oldData;
	};
	let containerRef: HTMLDivElement;

	// const handleMouseMove = (e: MouseEvent) => {
	// 	if (!containerRef) return;
	// 	const { left, top, width, height } = containerRef.getBoundingClientRect();
	// 	const x = (e.clientX - left - width / 2) / 25;
	// 	const y = (e.clientY - top - height / 2) / 25;
	// 	containerRef.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
	// };

	function handleMouseMove(event: MouseEvent): void {
		const temp = recordMouseMovement(oldData, event, 10, 10000, true);
		oldData = { point: temp.point, timestamp: temp.timestamp };
	}

	const handleMouseEnter = (e: MouseEvent) => {
		isMouseEntered = true;
		if (!containerRef) return;
	};

	const handleMouseLeave = (e: MouseEvent) => {
		if (!containerRef) return;
		isMouseEntered = false;
		containerRef.style.transform = `rotateY(0deg) rotateX(0deg)`;
	};

	// onMount(() => {
	// 	window.addEventListener('mousemove', handleMouseMove);
	// 	return () => {
	// 		window.removeEventListener('mousemove', handleMouseMove);
	// 	};
	// });

	$: if (stopRecording) {
		recording = false;
	}
</script>

<div
	class={cn('flex items-center justify-center py-20', containerClassName)}
	style="perspective: 1000px;"
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		bind:this={containerRef}
		on:mouseenter={handleMouseEnter}
		on:mousemove={handleMouseMove}
		on:mouseleave={handleMouseLeave}
		class={cn(
			'relative flex items-center justify-center transition-all duration-200 ease-linear',
			className
		)}
		style="transform-style: preserve-3d;"
	>
		<slot />
	</div>
</div>
