<script lang="ts">
	import { Button, ButtonGroup, Card, Input, InputAddon, Li, List, Tooltip } from 'flowbite-svelte';
	import { FilterSolid, ObjectsColumnSolid, RectangleListSolid } from 'flowbite-svelte-icons';
	import { Id, Gb, Jp } from 'svelte-flags';

	import { stacks } from './skillStacks.svelte';
	import { whatIdo } from './whatIDo.svelte';

	let skillFilter = $state('');
	let viewMode = $state('grid');

	let items = $derived(
		stacks.filter((item) => {
			if (skillFilter === '') return true;
			return item.tags.some((tag) => tag.includes(skillFilter)) || item.alt.includes(skillFilter);
		})
	);

	let listViewModeButtonColor = $derived(viewMode === 'list' ? 'primary' : 'dark');
	let gridViewModeButtonColor = $derived(viewMode === 'grid' ? 'primary' : 'dark');
</script>

<div class="place-content-center pr-2 md:flex lg:flex">
	<Card class="m-2 max-h-150 bg-gray-300/50 md:min-w-xl lg:min-w-2xl dark:bg-gray-600/50">
		<div class="flex">
			<p class="mb-8 flex-1 text-xl font-black dark:text-white">Tech Stacks & Tools i use</p>
			<div class="flex-1 text-right">
				<div class="text-right">
					<Button
						class="mx-1 my-2 size-8"
						color={listViewModeButtonColor as Button['color']}
						on:click={() => (viewMode = 'list')}><RectangleListSolid /></Button
					>
					<Button
						class="mx-1 my-2 size-8"
						color={gridViewModeButtonColor as Button['color']}
						on:click={() => (viewMode = 'grid')}><ObjectsColumnSolid /></Button
					>
				</div>
				<ButtonGroup class="mb-4">
					<InputAddon>
						<FilterSolid class="h-4 w-4 text-gray-500 dark:text-gray-400" />
					</InputAddon>
					<Tooltip defaultClass="">Filter</Tooltip>
					<Input id="skill-filter" placeholder="e.g: automation" bind:value={skillFilter} />
				</ButtonGroup>
			</div>
		</div>
		{#if viewMode === 'list'}
			<div class="snap-y overflow-y-scroll">
				{#each items as { ref, src, alt, tags }, index (index)}
					<a href={ref} target="_blank" class="m-2 flex snap-center hover:pl-2">
						<img {src} {alt} class="mr-4 size-20" />
						<span>
							<p class="text-lg">{alt} | {ref.length < 28 ? ref : ref.substring(0, 28) + '...'}</p>
							{#each tags as string[] as tag, index (index)}
								<Button size="xs" color="blue" pill class="m-1">{tag}</Button>
							{/each}
						</span>
					</a>
				{/each}
			</div>
		{:else}
			<div
				class="grid-auto-flow grid snap-y grid-cols-3 gap-8 overflow-x-hidden overflow-y-scroll md:grid-cols-4 lg:grid-cols-5"
			>
				{#each items as { ref, src, alt }, index (index)}
					<div class="snap-center hover:scale-108">
						<a href={ref} target="_blank">
							<img {src} {alt} class="size-20" />
						</a>
						<Tooltip defaultClass="">
							{alt}
						</Tooltip>
					</div>
				{/each}
			</div>
		{/if}
	</Card>
	<div>
		<Card class="m-2 h-fit bg-gray-100/50 dark:bg-gray-800/50">
			<p class="mb-8 text-xl font-black dark:text-white">Spoken Languages</p>
			<div class="flex">
				<Id class="mr-4" /> Indonesia - Native
			</div>
			<div class="flex">
				<Gb class="mr-4" /> English - Professional
			</div>
			<div class="flex">
				<Jp class="mr-4" /> Japanese - Beginner
			</div>
		</Card>
		<Card class="m-2 h-fit bg-gray-100/50 dark:bg-gray-800/50">
			<p class="mb-8 text-xl font-black dark:text-white">What i do</p>
			<List tag="ul" class="list-outside pl-4">
				{#each whatIdo as iDo}
					<Li>{iDo}</Li>
				{/each}
			</List>
		</Card>
	</div>
</div>
