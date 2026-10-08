interface Experience {
	role: string;
	employer: string;
	location: string;
	period: string;
	highlights: string[];
}

interface Education {
	qualification: string;
	institution: string;
	period: string;
	detail: string | null;
}

interface Achievement {
	result: string;
	event: string;
	period: string;
	detail: string;
}

interface SkillGroup {
	category: string;
	skills: string[];
}

export const profile = {
	name: 'Mathew Kennedy-Brewer',
	role: 'Junior software developer',
	focus: 'backend-focused full stack',
	location: 'Dundee, NY',
	email: 'mathewkennedy.dev@proton.me',
	phone: '(315) 418-7657',
	phoneHref: 'tel:+13154187657',
	github: 'https://github.com/Mystery2099',
	githubLabel: 'github.com/Mystery2099',
	summary:
		'Application Software Development student with hands-on IT support experience. I build and troubleshoot software, with a focus on backend systems, developer tooling, and making complex things easier to use.'
};

export const experience = [
	{
		role: 'IT Help Desk Technician',
		employer: 'Alfred State College',
		location: 'Alfred, NY',
		period: '2023 – Present',
		highlights: [
			'Diagnose and resolve Windows, networking, software, hardware, account-access, and peripheral issues for students and staff.',
			'Configure loaner laptops and end-user devices. Document failures and escalate infrastructure issues with clear findings.',
			'Guide users through fixes and coordinate cross-team tickets.'
		]
	},
	{
		role: 'Housekeeper',
		employer: 'Glenora Wine Cellars',
		location: 'Dundee, NY',
		period: '2022 – 2024',
		highlights: [
			'Prepared guest rooms and shared spaces while meeting time-sensitive quality standards across three seasons.'
		]
	}
] satisfies Experience[];

export const education = [
	{
		qualification: 'B.Tech. Application Software Development',
		institution: 'Alfred State College',
		period: 'Aug 2023 – Present',
		detail: 'Application development and complete web development sequence'
	},
	{
		qualification: 'A.A.S. Information Technology',
		institution: 'Alfred State College',
		period: 'May 2025',
		detail: null
	},
	{
		qualification: 'Computer Technology',
		institution: 'Finger Lakes Technical & Career Center',
		period: 'Aug 2021 – Jun 2023',
		detail: null
	}
] satisfies Education[];

export const achievements = [
	{
		result: '98th national percentile',
		event: 'National Cyber League Individual Game',
		period: 'Spring 2026',
		detail: 'Placed 206th of 7,010 with 2,855 of 3,000 points, up from the 91st percentile.'
	},
	{
		result: '17th of 3,634 teams',
		event: 'National Cyber League Team Game',
		period: 'Spring 2026',
		detail: 'Helped the team earn a perfect 3,000-point score.'
	}
] satisfies Achievement[];

export const skillGroups = [
	{
		category: 'Languages',
		skills: ['Java', 'Kotlin', 'C#', 'TypeScript', 'JavaScript', 'Python', 'PHP', 'SQL']
	},
	{
		category: 'Web',
		skills: ['Svelte', 'SvelteKit', 'HTML', 'CSS', 'Tailwind CSS', 'REST APIs']
	},
	{
		category: 'Developer tools',
		skills: ['Git', 'Linux', 'Docker', 'PowerShell', 'pnpm', 'Bun', 'AI coding agents']
	},
	{
		category: 'Systems support',
		skills: ['Windows', 'macOS', 'Linux', 'networking', 'account access', 'device deployment']
	},
	{
		category: 'Security',
		skills: [
			'Traffic analysis',
			'web application testing',
			'log analysis',
			'scanning and reconnaissance'
		]
	}
] satisfies SkillGroup[];

export const certifications = [
	{ name: 'TestOut Network Pro', year: 2023 },
	{ name: 'TestOut PC Pro', year: 2022 }
];
