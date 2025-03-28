<script>
	import { Card, Timeline, TimelineItem } from 'flowbite-svelte';

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

	let exps = [
		{
			date: 'July 2020 - September 2024',
			title: 'Senior Software Engineer | Xendit',
			imgAlt: 'xendit',
			imgSrc: '/images/xendit.svg',
			desc: `Under Onboarding Team, i develop and optimize both frontend and backend systems to enhance
				the user registration experience. My work focuses on improving UX, streamlining workflows,
				and increasing conversion rates. I also manage an internal admin dashboard to support
				onboarding operations. Collaborating closely with product managers and designers, I leverage
				A/B testing with LaunchDarkly to drive data-informed decisions and create seamless,
				high-performing onboarding experiences.`
		},
		{
			date: 'June 2019 - February 2020',
			title: 'Senior Software Engineer | Ayannah',
			imgAlt: 'ayannah',
			imgSrc: '/images/ayannah.svg',
			desc: `Design and implement scalable backend architectures, ensuring performance, security, and
				maintainability for the lending platform. Beyond coding, I mentor junior engineers, foster
				best practices, and drive technical decisions to create a robust and efficient financial
				platform.`
		},
		{
			date: 'March 2018 - Mei 2019',
			title: 'Software Engineer | Alterra',
			imgAlt: 'alterra',
			imgSrc: '/images/alterra.svg',
			desc: `Sepulsa rebranded. My job descs and scopes are still the same.`
		},
		{
			date: 'June 2016 - March 2018',
			title: 'Software Engineer | Sepulsa',
			imgAlt: 'sepulsa',
			imgSrc: '/images/sepulsa.svg',
			desc: `I develop and maintain APIs to facilitate seamless transactions and integrations with
				third-party services like BCA and CIMB. I primarily work with Drupal for backend development
				while utilizing Golang and Python for payment microservices. My responsibilities include
				building scalable APIs, conducting unit tests, and performing end-to-end testing using
				Python Robot Framework to ensure system reliability and efficiency.`
		},
		{
			date: 'January 2015 - May 2016',
			title: 'IT Staff | Coldwell Banker Indonesia',
			imgAlt: 'coldwell-banker',
			imgSrc: '/images/coldwell-banker.svg',
			desc: `I provided technical support for staff, ensuring the smooth operation of IT equipment and
				software. In addition to troubleshooting and maintenance, I took the initiative to develop
				the company’s profile website using Drupal, enhancing its online presence and accessibility.`
		},
		{
			date: 'June 2014 - November 2014',
			title: 'Junior Web Developer | Maven Lab',
			imgAlt: 'maven-lab',
			imgSrc: '/images/maven-lab.svg',
			desc: `I worked on the NTUC Plus website in Singapore, leveraging their Drupal website to develop
				new features, resolve bugs, and ensure site stability. My role involved maintaining the
				platform, optimizing performance, and contributing to a seamless user experience.`
		}
	];
</script>

<Card class="my-2 justify-self-center bg-gray-100/50 md:min-w-2xl lg:min-w-4xl dark:bg-gray-800/50">
	<p class="mb-4 text-2xl">Job Experience</p>
	<Timeline order="vertical">
		{#each exps as { date, title, imgAlt: alt, imgSrc: src, desc }, index (index)}
			<TimelineItem {date} {title}>
				<svelte:fragment slot="icon">
					<img {alt} {src} class={companyLogoClass} />
				</svelte:fragment>
				<p>{desc}</p>
			</TimelineItem>
		{/each}
	</Timeline>
</Card>
<Card class="my-2 justify-self-center bg-gray-100/50 md:min-w-2xl lg:min-w-4xl dark:bg-gray-800/50">
	<p class="mb-4 text-2xl">Educations</p>
	<Timeline order="vertical">
		<TimelineItem date="2010-2014" title="Bina Nusantara University | Bachelor of Computer Science">
			<svelte:fragment slot="icon">
				<img alt="binus" src="/images/binus.svg" class={companyLogoClass} />
			</svelte:fragment>
		</TimelineItem>
		<TimelineItem date="2004-2010" title="Gembala Baik High School | Junior and Senior High School">
			<svelte:fragment slot="icon">
				<img alt="gb" src="/images/gembala-baik.svg" class={companyLogoClass} />
			</svelte:fragment>
		</TimelineItem>
	</Timeline>
</Card>
