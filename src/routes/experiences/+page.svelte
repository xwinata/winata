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
		'ring-8',
		'ring-gray-200',
		'dark:ring-gray-900',
		'dark:bg-gray-100'
	].join(' ');
</script>

<Card class="lg:min-w-6xl justify-self-center">
	<Timeline order="vertical">
		<TimelineItem date="July 2020 - September 2024" title="Senior Software Engineer | Xendit">
			<svelte:fragment slot="icon">
				<img alt="xendit" src="/images/xendit.svg" class={companyLogoClass} />
			</svelte:fragment>
			<p>
				Under Onboarding Team, i develop and optimize both frontend and backend systems to enhance
				the user registration experience. My work focuses on improving UX, streamlining workflows,
				and increasing conversion rates. I also manage an internal admin dashboard to support
				onboarding operations. Collaborating closely with product managers and designers, I leverage
				A/B testing with LaunchDarkly to drive data-informed decisions and create seamless,
				high-performing onboarding experiences.
			</p>
		</TimelineItem>
		<TimelineItem date="June 2019 - February 2020" title="Senior Software Engineer | Ayannah">
			<svelte:fragment slot="icon">
				<img alt="ayannah" src="/images/ayannah.svg" class={companyLogoClass} />
			</svelte:fragment>
			<p>
				Design and implement scalable backend architectures, ensuring performance, security, and
				maintainability for the lending platform. Beyond coding, I mentor junior engineers, foster
				best practices, and drive technical decisions to create a robust and efficient financial
				platform.
			</p>
		</TimelineItem>
		<TimelineItem date="March 2018 - Mei 2019" title="Software Engineer | Alterra">
			<svelte:fragment slot="icon">
				<img alt="alterra" src="/images/alterra.svg" class={companyLogoClass} />
			</svelte:fragment>
			<p>Sepulsa rebranded. My job descs and scopes are still the same.</p>
		</TimelineItem>
		<TimelineItem date="June 2016 - March 2018" title="Software Engineer | Sepulsa">
			<svelte:fragment slot="icon">
				<img alt="sepulsa" src="/images/sepulsa.svg" class={companyLogoClass} />
			</svelte:fragment>
			<p>
				I develop and maintain APIs to facilitate seamless transactions and integrations with
				third-party services like BCA and CIMB. I primarily work with Drupal for backend development
				while utilizing Golang and Python for payment microservices. My responsibilities include
				building scalable APIs, conducting unit tests, and performing end-to-end testing using
				Python Robot Framework to ensure system reliability and efficiency.
			</p>
		</TimelineItem>
		<TimelineItem date="January 2015 - May 2016" title="IT Staff | Coldwell Banker Indonesia">
			<svelte:fragment slot="icon">
				<img alt="coldwell-banker" src="/images/coldwell-banker.svg" class={companyLogoClass} />
			</svelte:fragment>
			<p>
				I provided technical support for staff, ensuring the smooth operation of IT equipment and
				software. In addition to troubleshooting and maintenance, I took the initiative to develop
				the company’s profile website using Drupal, enhancing its online presence and accessibility.
			</p>
		</TimelineItem>
		<TimelineItem date="June 2014 - November 2014" title="Junior Web Developer | Maven Lab">
			<svelte:fragment slot="icon">
				<img alt="maven-lab" src="/images/maven-lab.svg" class={companyLogoClass} />
			</svelte:fragment>
			<p>
				I worked on the NTUC Plus website in Singapore, leveraging Drupal to develop new features,
				resolve bugs, and ensure site stability. My role involved maintaining the platform,
				optimizing performance, and contributing to a seamless user experience.
			</p>
		</TimelineItem>
	</Timeline>
</Card>
