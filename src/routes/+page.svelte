<script lang="ts">
	import {
		achievements,
		certifications,
		education,
		experience,
		profile,
		skillGroups
	} from '#lib/resume.js';

	const title = `${profile.name} | Junior Software Developer`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={`${profile.name}. ${profile.summary}`} />
	<meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
	<meta name="theme-color" content="#eff1f5" media="(prefers-color-scheme: light)" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={profile.summary} />
	<meta name="twitter:card" content="summary" />
</svelte:head>

<a class="skip-link" href="#resume">Skip to resume</a>

<main id="resume" tabindex="-1">
	<fieldset class="theme">
		<legend>Theme</legend>
		{#each ['system', 'light', 'dark'] as theme (theme)}
			<label>
				<input type="radio" name="theme" id={`theme-${theme}`} checked={theme === 'system'} />
				<span>{theme[0].toUpperCase() + theme.slice(1)}</span>
			</label>
		{/each}
	</fieldset>

	<header class="grid">
		<div class="identity">
			<h1>
				{#each profile.name.split(' ') as part, i (i)}<span>{part}</span>{' '}{/each}
			</h1>
			<p class="role">
				<span>{profile.role}</span><span class="role-separator">{', '}</span><span class="focus"
					>{profile.focus}</span
				>
			</p>
		</div>
		<div class="summary">
			<h2 class="print-only">Professional summary</h2>
			<p>{profile.summary}</p>
		</div>
		<address class="contact">
			<ul>
				<li class="email"><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
				<li class="phone"><a href={profile.phoneHref}>{profile.phone}</a></li>
				<li class="github"><a href={profile.github}>{profile.githubLabel}</a></li>
				<li class="location">{profile.location}</li>
			</ul>
			<a class="download" href="/resume.pdf" download="Mathew_Kennedy-Brewer_Resume.pdf"
				>Download PDF</a
			>
		</address>
	</header>

	<div class="grid body">
		<div class="main">
			<section class="experience" aria-labelledby="experience-heading">
				<h2 id="experience-heading">Experience</h2>
				{#each experience as job (job.employer)}
					<article class="entry">
						<p class="date">{job.period}</p>
						<div>
							<div class="entry-title">
								<h3>{job.role}</h3>
								<p class="detail">{job.employer}, {job.location}</p>
							</div>
							<ul>
								{#each job.highlights as highlight (highlight)}<li>{highlight}</li>{/each}
							</ul>
						</div>
					</article>
				{/each}
			</section>

			<section class="achievements" aria-labelledby="achievements-heading">
				<h2 id="achievements-heading">Cybersecurity achievements</h2>
				{#each achievements as achievement (achievement.result)}
					<article class="entry">
						<p class="date">{achievement.period}</p>
						<div>
							<h3>{achievement.result}</h3>
							<p class="detail">{achievement.event}</p>
							<p class="description">{achievement.detail}</p>
						</div>
					</article>
				{/each}
				<ul class="print-only">
					{#each achievements as achievement (achievement.result)}
						<li>
							{achievement.result} in the {achievement.period}
							{achievement.event}. {achievement.detail}
						</li>
					{/each}
				</ul>
			</section>

			<section class="education" aria-labelledby="education-heading">
				<h2 id="education-heading">Education</h2>
				{#each education as study (study.qualification)}
					<article class="entry">
						<p class="date">{study.period}</p>
						<div>
							<div class="entry-title">
								<h3>{study.qualification}</h3>
								<p class="detail">{study.institution}</p>
							</div>
							{#if study.detail}<p class="description">{study.detail}</p>{/if}
						</div>
					</article>
				{/each}
			</section>
		</div>

		<aside aria-label="Skills and certifications">
			<section class="skills" aria-labelledby="skills-heading">
				<h2 id="skills-heading">Technical skills</h2>
				<dl>
					{#each skillGroups as group (group.category)}
						<div class="skill-group">
							<dt>{group.category}</dt>
							<dd>{group.skills.join(', ')}</dd>
						</div>
					{/each}
				</dl>
			</section>
			<section class="certifications-section" aria-labelledby="certifications-heading">
				<h2 id="certifications-heading">Certifications</h2>
				<ul class="certifications">
					{#each certifications as certification (certification.name)}
						<li>{certification.name} <span class="year">{certification.year}</span></li>
					{/each}
				</ul>
			</section>
		</aside>
	</div>

	<footer>
		Reach me at <a href={`mailto:${profile.email}`}>{profile.email}</a> or
		<a href={profile.phoneHref}>{profile.phone}</a>.
	</footer>
</main>

<style>
	main {
		--side: 16.5rem;
		--gap: 4.5rem;
		--gutter: 9rem;
		max-width: 1140px;
		margin: 0 auto;
		padding: 5rem 2.25rem 6rem;
	}
	main:focus {
		outline: none;
	}
	h1,
	h2,
	h3,
	p,
	dl,
	ul {
		margin: 0;
	}
	h1,
	h2,
	h3,
	dt {
		color: var(--ink);
	}

	.theme {
		display: flex;
		justify-content: flex-end;
		gap: 0.25rem;
		margin: -2.5rem 0 1.5rem;
		padding: 0;
		border: 0;
		font-size: 0.8125rem;
	}
	.theme legend {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip-path: inset(50%);
		white-space: nowrap;
	}
	.theme label {
		position: relative;
	}
	.theme input {
		position: absolute;
		opacity: 0;
		pointer-events: none;
	}
	.theme span {
		display: block;
		padding: 0.2rem 0.7rem;
		border: 1px solid transparent;
		border-radius: 999px;
		color: var(--muted);
		cursor: pointer;
	}
	.theme span:hover {
		color: var(--ink);
	}
	.theme input:checked + span {
		border-color: var(--line);
		color: var(--ink);
	}
	.theme input:focus-visible + span {
		outline: 2px solid var(--accent);
		outline-offset: 2px;
	}

	.grid {
		display: grid;
		grid-template-columns: minmax(0, 1fr) var(--side);
		column-gap: var(--gap);
	}

	header {
		row-gap: 2rem;
		padding-bottom: 2.75rem;
		border-bottom: 1px solid var(--line);
	}
	.identity {
		grid-column: 1 / -1;
	}
	h1 {
		font-size: clamp(2.25rem, 1rem + 5.4vw, 4.6rem);
		font-stretch: 125%;
		font-weight: 800;
		line-height: 0.98;
		letter-spacing: -0.03em;
	}
	h1 span {
		white-space: nowrap;
	}
	.role {
		margin-top: 1rem;
		font-size: 1.2rem;
		font-stretch: 110%;
		font-weight: 500;
		color: var(--accent);
	}
	.print-only {
		display: none;
	}
	.summary {
		max-width: 34em;
		font-size: 1.1875rem;
		line-height: 1.6;
		align-self: start;
	}
	.contact {
		font-style: normal;
		font-size: 0.9rem;
		border-left: 1px solid var(--line);
		padding-left: 1.75rem;
	}
	.contact ul {
		list-style: none;
		padding: 0;
	}
	.contact li + li {
		margin-top: 0.2rem;
	}
	.contact a {
		color: var(--ink);
	}
	.location {
		color: var(--muted);
	}
	.contact .download {
		display: inline-block;
		margin-top: 1.1rem;
		padding: 0.45rem 0.95rem;
		border: 1px solid var(--accent);
		border-radius: 999px;
		color: var(--accent);
		font-weight: 600;
		text-decoration: none;
		transition:
			background-color 120ms ease,
			color 120ms ease;
	}
	.contact .download:hover {
		background: var(--accent);
		color: var(--bg);
	}

	.body {
		margin-top: 3rem;
	}
	section + section {
		margin-top: 3rem;
	}
	h2 {
		margin-bottom: 1.4rem;
		font-size: 1.0625rem;
		font-stretch: 115%;
		font-weight: 700;
		letter-spacing: -0.005em;
		color: var(--accent);
	}
	h3 {
		font-size: 1.0625rem;
		font-weight: 600;
		line-height: 1.4;
	}

	.entry {
		display: grid;
		grid-template-columns: var(--gutter) minmax(0, 1fr);
		column-gap: 1.5rem;
		align-items: baseline;
	}
	.entry + .entry {
		margin-top: 1.75rem;
	}
	.date {
		font-size: 0.875rem;
		color: var(--muted);
		font-variant-numeric: tabular-nums;
		white-space: nowrap;
	}
	.detail {
		margin-top: 0.1rem;
		font-size: 0.9rem;
		color: var(--muted);
	}
	.description {
		margin-top: 0.5rem;
		max-width: 40em;
	}
	.entry ul {
		max-width: 40em;
		margin-top: 0.6rem;
		padding-left: 1.1rem;
	}
	.entry li::marker {
		color: var(--muted);
	}
	.entry li + li {
		margin-top: 0.35rem;
	}

	aside {
		border-left: 1px solid var(--line);
		padding-left: 1.75rem;
	}
	.skill-group {
		font-size: 0.9rem;
	}
	.skill-group + .skill-group {
		margin-top: 1.1rem;
	}
	dt {
		font-weight: 600;
	}
	dd {
		margin: 0.15rem 0 0;
	}
	.certifications {
		list-style: none;
		padding: 0;
		font-size: 0.9rem;
	}
	.certifications li {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
	}
	.certifications li + li {
		margin-top: 0.35rem;
	}
	.year {
		color: var(--muted);
		font-variant-numeric: tabular-nums;
	}

	footer {
		margin-top: 4rem;
		padding-top: 1.5rem;
		border-top: 1px solid var(--line);
		font-size: 0.9rem;
		color: var(--muted);
	}
	footer a {
		color: var(--ink);
	}

	@media screen and (max-width: 960px) {
		main {
			--side: 15rem;
			--gap: 2.5rem;
		}
		.entry {
			grid-template-columns: minmax(0, 1fr);
		}
		.date {
			margin-bottom: 0.1rem;
		}
	}

	@media screen and (max-width: 760px) {
		main {
			padding: 3rem 1.375rem 4rem;
		}
		.theme {
			margin-top: -2rem;
		}
		.grid {
			grid-template-columns: minmax(0, 1fr);
		}
		header {
			row-gap: 1.75rem;
		}
		.contact {
			border-left: 0;
			padding-left: 0;
		}
		aside {
			margin-top: 3rem;
			padding: 2.5rem 0 0;
			border-left: 0;
			border-top: 1px solid var(--line);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.contact .download {
			transition: none;
		}
	}

	@media print {
		main {
			max-width: none;
			padding: 0;
		}
		.theme,
		.role-separator,
		.contact .download,
		.achievements .entry,
		footer {
			display: none;
		}
		.print-only {
			display: block;
		}
		h1,
		h2,
		.role {
			font-stretch: normal;
			font-weight: 700;
			letter-spacing: 0;
			line-height: 1.15;
		}

		.grid {
			display: flex;
			flex-direction: column;
		}
		header {
			row-gap: 0;
			padding-bottom: 0;
			border-bottom: 0;
		}
		.identity {
			text-align: center;
		}
		h1 {
			margin-bottom: 1pt;
			font-size: 21pt;
			text-transform: uppercase;
		}
		.role {
			margin: 0 0 2pt;
			font-size: 11pt;
			text-transform: capitalize;
		}
		.focus::before {
			content: '\a0\a0|\a0\a0';
		}
		.contact {
			padding: 0;
			border: 0;
			font-size: inherit;
			line-height: 1.15;
			color: var(--muted);
		}
		.contact ul {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		}
		.contact li + li {
			margin-top: 0;
		}
		.contact li:not(.location)::before {
			content: '\a0\a0|\a0\a0';
		}
		.contact a {
			color: inherit;
		}
		.location {
			order: -1;
		}
		.email {
			order: 1;
		}
		.github {
			order: 2;
		}
		.summary {
			order: 1;
			max-width: none;
			font-size: inherit;
			line-height: inherit;
		}

		.body {
			margin-top: 0;
		}
		.main,
		aside {
			display: contents;
		}
		.skills {
			order: 1;
		}
		.experience {
			order: 2;
		}
		.achievements {
			order: 3;
		}
		.education {
			order: 4;
		}
		.certifications-section {
			order: 5;
		}
		section + section {
			margin-top: 0;
		}
		h2 {
			margin: 8pt 0 3pt;
			padding-bottom: 2pt;
			border-bottom: 1pt solid var(--accent);
			font-size: 11pt;
			text-transform: uppercase;
			break-after: avoid;
		}
		.summary p,
		.skill-group,
		.description {
			margin: 0 0 2pt;
		}

		.skill-group {
			font-size: inherit;
		}
		.skill-group + .skill-group {
			margin-top: 0;
		}
		dt,
		dd {
			display: inline;
		}
		dt {
			font-weight: 700;
			text-transform: capitalize;
		}
		dt::after {
			content: ': ';
		}
		dd {
			margin: 0;
		}

		.entry {
			grid-template-columns: minmax(0, 1fr) auto;
			column-gap: 12pt;
			break-inside: avoid;
		}
		.entry + .entry {
			margin-top: 3pt;
		}
		.entry > div {
			display: contents;
		}
		.entry-title {
			grid-area: 1 / 1;
			line-height: 1.15;
		}
		.date {
			grid-area: 1 / 2;
			font-size: inherit;
			font-style: italic;
		}
		.entry ul,
		.description {
			grid-column: 1 / -1;
			max-width: none;
		}
		.entry-title h3,
		.entry-title .detail {
			display: inline;
			margin: 0;
			font-size: inherit;
			font-weight: 700;
			line-height: inherit;
			color: var(--ink);
		}
		.entry-title .detail::before {
			content: ' - ';
		}
		.education .description {
			font-style: italic;
			color: var(--muted);
		}
		.entry ul,
		.achievements ul {
			margin: 0;
			padding-left: 13pt;
			list-style-type: '\2022\a0';
		}
		.entry ul li,
		.achievements li {
			margin: 0 0 1.5pt;
			line-height: 1.17;
		}
		.entry li::marker {
			color: inherit;
		}

		.certifications {
			display: flex;
			flex-wrap: wrap;
			font-size: inherit;
			font-weight: 700;
			color: var(--ink);
		}
		.certifications li {
			display: block;
		}
		.certifications li + li {
			margin-top: 0;
		}
		.certifications li + li::before {
			content: '\a0\a0|\a0\a0';
		}
		.year {
			color: inherit;
		}
		.year::before {
			content: '(';
		}
		.year::after {
			content: ')';
		}
	}
</style>
