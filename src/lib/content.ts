/**
 * Single source of truth for all site copy.
 *
 * Everything the pages render comes from here. Keeping the words in one
 * typed module (rather than inline in markup) means the same content can be
 * reused if/when sections are promoted into their own routes for SEO — see
 * the notes in README.md.
 */

export const site = {
	name: 'Pippa Ford',
	tagline: 'Creative Arts Psychotherapy',
	title: 'Pippa Ford — Creative Arts Psychotherapy',
	description:
		'Creative arts psychotherapy with Pippa Ford, HCPC-registered dramatherapist. Client-centred therapy integrating EMDR, somatic, creative and nature-based approaches for adults, children and young people.',
	url: 'https://www.pippaford.co.uk',
	email: 'pippaford76@gmail.com',
	credentials: 'Pippa Ford BA Hons, Dramatherapy MA',
	trainings: 'EMDR, Yoga & Mindfulness Therapy, Creative Clinical Supervision',
	hcpc: 'AS14736'
} as const;

export const nav = [
	{ label: 'About', href: '/#about' },
	{ label: 'Testimonials', href: '/#testimonials' },
	{ label: 'Services', href: '/#services' },
	{ label: 'FAQs', href: '/#faqs' },
	{ label: 'Contact', href: '/#contact' }
] as const;

export const hero = {
	heading: 'Pippa Ford',
	subheading: 'Creative Arts Psychotherapy',
	intro:
		'With years of clinical experience across diverse settings, I offer client-centred therapy that integrates EMDR, somatic, creative and nature-based approaches, in a safe, compassionate space for growth and healing.',
	image: '/images/hero-bg.webp'
} as const;

export const about = {
	heading: 'About',
	portrait: '/images/pippa-portrait.webp',
	portraitAlt: 'Pippa Ford, creative arts psychotherapist',
	paragraphs: [
		'As a creative arts psychotherapist, my practice is grounded in psychodynamic and humanistic frameworks, with a strong emphasis on trauma-informed care. I integrate creative, Jungian, IFS and somatic approaches as well as my training in yoga & mindfulness therapy and EMDR to support clients in accessing healing not just through insight, but through the body and the nervous system. My approach honours the complexity of each person’s story, drawing from depth-oriented frameworks and a relational, compassionate stance.',
		'I offer clinical supervision as part of my practice and recently undertook a year’s training in creative clinical supervision.',
		'I am also currently in training as an Eco-Depth Practitioner, weaving nature-based wisdom and ecological consciousness into the therapeutic space to support deeper connection, integration and transformation.'
	]
} as const;

export const testimonials = {
	heading: 'Testimonials',
	background: '/images/testimonials-bg.webp',
	items: [
		{
			quote:
				'Talking through my grief in sessions really helped me feel less overwhelmed - I’ve learned ways to cope that help me live a more meaningful life now',
			attribution: 'Former client'
		},
		{
			quote:
				'I looked forward to my sessions with Pippa - they were fun, and helped me feel calmer and more confident.',
			attribution: 'Former client (aged 12)'
		}
	]
} as const;

export const services = {
	heading: 'Therapeutic Approaches',
	items: [
		{
			slug: 'individual-therapy',
			title: 'Individual Therapy',
			body: 'Drawing on extensive clinical experience, I offer 1:1 therapy using a range of creative, somatic and trauma-informed approaches to create a treatment plan based on your goals.',
			image: '/images/service-individual.webp',
			alt: 'A quiet, softly lit room set up for one-to-one therapy sessions'
		},
		{
			slug: 'emdr',
			title: 'EMDR',
			body: 'Eye Movement Desensitisation Reprocessing Therapy (EMDR) is a proven, structured therapy that uses gentle guided eye movements to support your mind’s natural healing process.',
			image: '/images/service-emdr.webp',
			alt: 'Calm, still water — representing the settling process of EMDR therapy'
		},
		{
			slug: 'ecotherapy',
			title: 'Ecotherapy',
			body: 'Ecotherapy takes place outdoors, using nature as a co-therapist to support emotional regulation, connection and healing.',
			image: '/images/service-ecotherapy.webp',
			alt: 'A woodland path, the kind of setting used for nature-based therapy sessions'
		}
	]
} as const;

export const faqs = {
	heading: 'Your Questions, Answered',
	items: [
		{
			question: 'How are sessions facilitated?',
			answer:
				'I offer secure video sessions for clients who prefer the convenience of meeting from home or when travel is difficult. I also offer nature-based or walk & talk sessions at locations convenient for the client.'
		},
		{
			question: 'How long does therapy typically last?',
			answer:
				'Each client’s journey is unique. Some achieve their goals in a few months, while others benefit from ongoing support. We’ll review progress regularly and adjust the plan together.'
		},
		{
			question: 'Do you offer sessions for children as well as adults?',
			answer:
				'Absolutely. I have years of experience working with children both primary and secondary aged, and I hold a full DBS check. I am also able to work within schools if that is most appropriate for the young person.'
		}
	]
} as const;

export const contact = {
	heading: 'Get in touch',
	body: 'If you have a question, or would like to arrange an initial conversation, please get in touch by email.'
} as const;
