<script>
  import {
    Card,
    Timeline,
    TimelineItem
  } from 'flowbite-svelte';

  let companyLogoClass = [
    "flex",
    "absolute",
    "-start-3",
    "justify-center",
    "items-center",
    "w-6",
    "h-6",
    "bg-primary-200",
    "rounded-full",
    "ring-8",
    "ring-white",
    "dark:ring-gray-900",
    "dark:bg-primary-900"
  ].join(' ');
</script>

<Card class="m-8 min-w-4xl justify-self-center">
  <Timeline order="vertical">
    <TimelineItem date="July 2020 - September 2024" title="Senior Software Engineer | Xendit">
      <svelte:fragment slot="icon">
        <img alt="xendit" src="/images/xendit.svg"
          class={companyLogoClass}
        />
      </svelte:fragment>
      <p>
        Under Onboarding Team, i develop and optimize both frontend and backend systems to enhance the user registration experience. My work focuses on improving UX, streamlining workflows, and increasing conversion rates. I also manage an internal admin dashboard to support onboarding operations. Collaborating closely with product managers and designers, I leverage A/B testing with LaunchDarkly to drive data-informed decisions and create seamless, high-performing onboarding experiences.
      </p>
    </TimelineItem>
    <TimelineItem date="Jun 2019 - February 2020" title="Senior Software Engineer | Ayannah">
      <svelte:fragment slot="icon">
        <img alt="xendit" src="/images/ayannah.svg"
          class={companyLogoClass}
        />
      </svelte:fragment>
      <p>
        Design and implement scalable backend architectures, ensuring performance, security, and maintainability for the lending platform. Beyond coding, I mentor junior engineers, foster best practices, and drive technical decisions to create a robust and efficient financial platform.
      </p>
    </TimelineItem>
  </Timeline>
</Card>