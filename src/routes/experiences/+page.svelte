<script>
	import { Card, Li, List, Timeline, TimelineItem } from 'flowbite-svelte';
	import { exps } from './experiences.svelte';

	let companyLogoClass = [
		'flex',
		'absolute',
		'-start-3',
		'justify-center',
		'items-center',
		'w-6',
		'h-6',
		'bg-gray-200',
		'rounded-full',
		'ring-2',
		'ring-gray-200'
	].join(' ');
</script>

<Card class="my-2 justify-self-center bg-gray-100/50 md:min-w-2xl lg:min-w-4xl dark:bg-gray-800/50">
	<p class="mb-4 text-2xl">Job Experiences</p>
	<Timeline order="vertical">
		{#each exps as { date, title, imgAlt: alt, imgSrc: src, items }, index (index)}
			<TimelineItem {date} {title}>
				<svelte:fragment slot="icon">
					<img {alt} {src} class={companyLogoClass} />
				</svelte:fragment>
				<List class="list-outside">
					{#each items as item}
						<Li>{item}</Li>	
					{/each}
				</List>
			</TimelineItem>
		{/each}
	</Timeline>
</Card>
<Card class="my-2 justify-self-center bg-gray-100/50 md:min-w-2xl lg:min-w-4xl dark:bg-gray-800/50">
	<p class="mb-4 text-2xl">Educations</p>
	<Timeline order="vertical">
		<TimelineItem date="Aug 2010 - April 2014" title="Bina Nusantara University | Bachelor of Computer Science">
			<svelte:fragment slot="icon">
				<img alt="binus" src="/images/binus.svg" class={companyLogoClass} />
			</svelte:fragment>
		</TimelineItem>
	</Timeline>
</Card>
