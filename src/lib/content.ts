/**
 * Single source of truth for all site copy.
 *
 * ─────────────────────────────────────────────────────────────────────────
 *  DRAFT COPY — NEEDS PIPPA'S APPROVAL BEFORE PUBLISHING
 *
 *  Everything below the original Squarespace text was drafted to expand the
 *  site, written in Pippa's voice from her stated modalities. It describes a
 *  regulated clinical practice she is professionally accountable for, so she
 *  must read and correct it before it goes live — particularly anything
 *  describing what a session involves or who an approach suits.
 *
 *  Verbatim from the old site (safe): hero.intro, about.paragraphs,
 *  testimonials, the three service `summary` fields, and the original three
 *  FAQ answers.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const site = {
	name: 'Pippa Ford',
	tagline: 'Creative Arts Psychotherapy',
	title: 'Pippa Ford — Creative Arts Psychotherapy',
	description:
		'Online and telephone creative arts psychotherapy with Pippa Ford, HCPC-registered dramatherapist. Client-centred therapy integrating EMDR, somatic, creative and nature-based approaches for adults, children and young people, available UK-wide.',
	url: 'https://www.pippaford.co.uk',
	email: 'pippaford76@gmail.com',

	/**
	 * The practice is remote-first — sessions run online and by telephone, so
	 * it serves the whole UK rather than one town. Deliberately no locality:
	 * naming one would narrow the reach rather than widen it.
	 */
	areaServed: 'United Kingdom',
	deliveryModes: 'Online and telephone sessions, UK-wide',

	credentials: 'Pippa Ford BA Hons, Dramatherapy MA',
	trainings: 'EMDR, Yoga & Mindfulness Therapy, Creative Clinical Supervision',
	hcpc: 'AS14736'
} as const;

export const nav = [
	{ label: 'About', href: '/about' },
	{ label: 'Approach', href: '/approach' },
	{ label: 'Therapy', href: '/services' },
	{ label: 'Supervision', href: '/supervision' },
	{ label: 'Contact', href: '/contact' }
] as const;

export const hero = {
	heading: 'Pippa Ford',
	subheading: 'Creative Arts Psychotherapy',
	intro:
		'With years of clinical experience across diverse settings, I offer client-centred therapy that integrates EMDR, somatic, creative and nature-based approaches, in a safe, compassionate space for growth and healing.',
	image: { base: '/images/hero-bg', widths: [800, 1400, 1792], width: 1792, height: 1024 },
	imageAlt: 'A still lake at sunrise, mist lying between distant hills'
} as const;

/* ========================================================================
   About
   ===================================================================== */

export const about = {
	title: 'About',
	lede: 'I am a creative arts psychotherapist and HCPC-registered dramatherapist, working with adults, children and young people across the UK.',
	portrait: { base: '/images/pippa-portrait', widths: [600, 1200], width: 1200, height: 1599 },
	portraitAlt: 'Pippa Ford, creative arts psychotherapist',

	/** Verbatim from the previous site. */
	paragraphs: [
		'As a creative arts psychotherapist, my practice is grounded in psychodynamic and humanistic frameworks, with a strong emphasis on trauma-informed care. I integrate creative, Jungian, IFS and somatic approaches as well as my training in yoga & mindfulness therapy and EMDR to support clients in accessing healing not just through insight, but through the body and the nervous system. My approach honours the complexity of each person’s story, drawing from depth-oriented frameworks and a relational, compassionate stance.',
		'I offer clinical supervision as part of my practice and recently undertook a year’s training in creative clinical supervision.',
		'I am also currently in training as an Eco-Depth Practitioner, weaving nature-based wisdom and ecological consciousness into the therapeutic space to support deeper connection, integration and transformation.'
	],

	/** DRAFT — expands on the above. */
	extended: [
		{
			heading: 'How I came to this work',
			body: [
				'I trained as a dramatherapist because I kept meeting people for whom talking alone was not enough. Some had no words yet for what had happened to them. Others had told their story so many times it had gone flat, rehearsed, held at arm’s length. The creative arts therapies offer another route in — through image, metaphor, movement, story and play — and often reach what conversation cannot.',
				'Since qualifying I have worked across a range of settings, with adults, with children in primary and secondary schools, and with young people navigating difficulties that had not yet found language. That breadth has taught me that there is no single correct way to do this work. What helps one person feel safe enough to begin can feel intrusive to another.'
			]
		},
		{
			heading: 'How I work',
			body: [
				'I do not arrive with a fixed programme. We begin by finding out what you are hoping for, what has already been tried, and what pace feels manageable. From there I draw on whichever approaches seem to fit — and I will say plainly when I think something else, or someone else, would serve you better.',
				'My training is integrative rather than single-model: psychodynamic and humanistic foundations, Jungian and Internal Family Systems perspectives, somatic and nervous-system work, yoga and mindfulness therapy, EMDR, and now eco-depth practice. In practice this means the work can move between talking, noticing what is happening in the body, creative exploration, and structured trauma processing, depending on what is needed.',
				'What stays constant is the relationship. Depth-oriented work asks something of a person, and it is the quality of the therapeutic relationship — not the technique — that makes that possible.'
			]
		},
		{
			heading: 'Training and registration',
			body: [
				'I hold a BA (Hons) and an MA in Dramatherapy, and I am registered with the Health and Care Professions Council under number AS14736. HCPC registration is a legal requirement to practise as a dramatherapist in the UK and can be verified on their public register.',
				'My continuing training includes EMDR, yoga and mindfulness therapy, and a year’s training in creative clinical supervision. I am currently training as an Eco-Depth Practitioner. I hold a full DBS check and work within regular clinical supervision, as required of all registered practitioners.'
			]
		}
	]
} as const;

/* ========================================================================
   Approach — the four influences
   ===================================================================== */

export const approach = {
	title: 'My approach',
	lede: 'Four strands shape how I work. They are not separate methods so much as different ways of paying attention, and most sessions draw on more than one.',
	intro:
		'People often want to know what a therapist actually does — what the words on a website translate into once you are in the room, or on the call. What follows is an honest account of the traditions I draw on and what each contributes.',

	items: [
		{
			slug: 'dramatherapy',
			images: [
				{
					base: '/images/approach-dramatherapy',
					widths: [600, 1200],
					width: 1200,
					height: 800,
					alt: 'A watercolour and ink painting: dark brushed forms along the base beneath washes of pink, green and blue'
				},
				{
					base: '/images/approach-dramatherapy-2',
					widths: [600, 1200],
					width: 1200,
					height: 800,
					alt: 'A small clay figure set into the bark of a tree, ringed with moss and seed heads'
				}
			],
			title: 'Dramatherapy',
			summary:
				'Working through image, metaphor, story and play, so that difficult material can be approached at a safe distance.',
			body: [
				'Dramatherapy is a recognised allied health profession in the UK, regulated by the HCPC. It uses the tools of drama and story — character, role, metaphor, image, play, movement — as the medium of therapy rather than as a diversion from it.',
				'Its central idea is often called *aesthetic distance*. Approaching something painful directly can be overwhelming. Approaching it through a story, an image or a character creates just enough separation to make it bearable, while keeping it close enough to matter. A child who cannot say what frightens them at home may show it in play. An adult who cannot describe grief may find an image for it, and find that the image speaks.',
				'This is not performance, and it requires no acting ability or artistic skill whatsoever. It is a way of externalising something so that we can both look at it together, rather than you having to hold it alone and unseen. Some people work almost entirely in words and use metaphor only occasionally; others find that the creative work carries most of the weight. Both are legitimate.',
				'Working online does not preclude this. Image, story, writing, objects to hand, and drawing all translate well to video, and there is something about doing this work from your own space that some people find steadying.'
			]
		},
		{
			slug: 'eco-depth-psychology',
			images: [
				{
					base: '/images/approach-eco-depth',
					widths: [600, 1200],
					width: 1200,
					height: 800,
					alt: 'Catkins and green berries arranged as a radiating mandala on wet ground'
				}
			],
			title: 'Eco-depth psychology',
			summary:
				'Taking seriously that human distress does not occur in isolation from the living world we are part of.',
			body: [
				'Depth psychology attends to what lies beneath ordinary awareness — the dreams, images, patterns and inherited stories that shape a life without being chosen. Ecopsychology holds that the human psyche is not sealed off from the rest of the living world, and that the modern experience of separation from it carries a psychological cost.',
				'Eco-depth practice brings these together. It treats the natural world not as scenery or as a wellbeing intervention, but as a genuine participant in the work — what is sometimes described as nature as co-therapist. Attention widens beyond the individual to include the relationships a person is embedded in, including the more-than-human ones.',
				'In practice this can mean working with the sense of self as ecological rather than isolated; noticing how the body settles in the presence of weather, water, trees or open ground; and using the cycles evident in the living world — decay, dormancy, regeneration — as ways of thinking about periods in a life that feel stuck or finished.',
				'It also means having somewhere to put climate grief and ecological anxiety. These are increasingly common, particularly among younger people, and they are frequently dismissed as irrational or catastrophising. They are neither. They are proportionate responses to a real situation, and they raise genuinely existential questions about meaning, mortality and what it is reasonable to hope for. Therapy cannot resolve those questions. It can stop someone carrying them alone.'
			]
		},
		{
			slug: 'somatic-approaches',
			images: [
				{
					base: '/images/approach-somatic',
					widths: [600, 1200],
					width: 1200,
					height: 800,
					alt: 'A hand resting on wet shingle at the edge of the sea, foam breaking around it'
				}
			],
			title: 'Somatic approaches',
			summary: 'Attending to the body and the nervous system, not only to thoughts and narrative.',
			body: [
				'A great deal of what we carry is held in the body rather than in memory as we usually think of it. Tension that never quite releases; a startle response that fires at nothing; exhaustion that sleep does not touch; the sense of being braced against something that is no longer there.',
				'Somatic work attends to this directly. It involves slowing down enough to notice sensation — tightness, temperature, restlessness, the impulse to move or to withdraw — and treating those signals as meaningful rather than as noise to be talked over. Much of the time we are working with the nervous system’s regulation: how readily it moves into alarm, and what helps it settle.',
				'This is where my training in yoga and mindfulness therapy comes in, though it is not a yoga class. It is closer to learning the particular signals of your own body, and building some capacity to influence them, so that strong feeling becomes something you can stay present to rather than something that takes you over.',
				'Pace matters enormously here. Going too quickly into bodily experience can itself be destabilising, particularly for people with trauma histories. We work at a speed that keeps you within what you can tolerate, and you set that pace, not me.'
			]
		},
		{
			slug: 'trauma-informed-practice',
			images: [
				{
					base: '/images/approach-trauma-informed',
					widths: [600, 1200],
					width: 1200,
					height: 800,
					alt: 'Dried earth cracked into plates, the fissures running deep between them'
				}
			],
			title: 'Trauma-informed practice',
			summary:
				'Assuming that difficulty may have a history, and working in ways that do not repeat it.',
			body: [
				'Trauma-informed practice is not a technique. It is a stance that runs underneath everything else, and it starts from a shift in the question — from *what is wrong with this person* to *what has happened to this person, and what did they have to do to survive it*.',
				'Read that way, a great many behaviours that look like problems turn out to be adaptations. Hypervigilance made sense somewhere. Shutting down made sense somewhere. Difficulty trusting a therapist makes sense if trust has previously been dangerous. The work is not to strip these away but to understand what they were for, and to find out whether they are still needed.',
				'In practice this means several things. That you retain choice and control over the pace and direction of the work, because the loss of both is often central to what happened. That I explain what I am suggesting and why, rather than working on you. That we build enough stability before approaching difficult material, rather than plunging into the story on the assumption that telling it is automatically healing — it is not, and it can retraumatise.',
				'It also means paying attention to my own responses and holding this work in regular supervision, which is a professional requirement and a genuine safeguard rather than a formality.'
			]
		}
	]
} as const;

/* ========================================================================
   Therapy services
   ===================================================================== */

export const services = {
	heading: 'Therapeutic Approaches',
	title: 'Therapy',
	lede: 'Three ways of working, often combined rather than chosen between. What suits you is something we work out together at the start.',

	items: [
		{
			slug: 'individual-therapy',
			title: 'Individual Therapy',
			/** Verbatim from the previous site. */
			summary:
				'Drawing on extensive clinical experience, I offer 1:1 therapy using a range of creative, somatic and trauma-informed approaches to create a treatment plan based on your goals.',
			image: { base: '/images/service-individual', widths: [400, 800], width: 800, height: 1067 },
			alt: 'White stones resting on a shingle beach, the sea and open sky beyond',
			body: [
				'One-to-one therapy is the foundation of my practice. Sessions run for fifty minutes, usually weekly at the same time, which gives the work a reliable rhythm — and that reliability tends to matter more than people expect.',
				'We begin with an initial conversation about what has brought you, what you are hoping might change, and anything you have already tried. I will explain how I work and answer questions. There is no obligation to continue after that first conversation, and it is entirely reasonable to speak to more than one therapist before deciding. Fit matters more than credentials.',
				'From there the shape of the work depends on you. For some people it stays largely conversational, with creative or somatic work used occasionally. For others the creative work becomes central. Some come with a clearly defined difficulty; others arrive with a diffuse sense that something is not right, which is an equally valid place to start.',
				'We review how things are going at regular intervals rather than drifting. If the work is not helping, I would rather know and either change approach or help you find someone better suited.'
			],
			suitedFor: [
				'Anxiety, low mood and periods of feeling stuck',
				'Grief and bereavement',
				'Trauma, including experiences from childhood',
				'Difficulties with self-worth, identity or life transitions',
				'A sense that something is wrong that is hard to put into words'
			]
		},
		{
			slug: 'emdr',
			title: 'EMDR',
			/** Verbatim from the previous site. */
			summary:
				'Eye Movement Desensitisation Reprocessing Therapy (EMDR) is a proven, structured therapy that uses gentle guided eye movements to support your mind’s natural healing process.',
			image: { base: '/images/service-emdr', widths: [400, 800], width: 800, height: 1067 },
			alt: 'A soft, diffuse sunset, the light spreading through cloud',
			body: [
				'EMDR — Eye Movement Desensitisation and Reprocessing — is a structured therapy developed specifically for traumatic memory. It is recommended by NICE for post-traumatic stress disorder in adults, and it is among the more thoroughly researched trauma treatments available.',
				'The working idea is that some memories do not get processed and filed in the ordinary way. Instead they stay raw and current, so that remembering feels less like recalling something over than reliving it. EMDR appears to help the brain complete that processing, so the memory becomes something that happened rather than something still happening.',
				'Sessions involve bringing a memory to mind while following a repeated left-right movement or sound, in short sets, pausing between each to notice whatever has shifted. It is a strange procedure to describe and considerably less strange to do. You remain in control throughout, you are not hypnotised, and you do not have to narrate the memory in detail — which is a relief to many people.',
				'EMDR is not a quick fix and it is not the right starting point for everyone. It follows a defined protocol that begins with preparation and stabilisation, and we do not move to processing until there is enough steadiness to make that safe. That preparation phase is not a delay before the real work; it is part of it.',
				'EMDR can be delivered effectively online, using on-screen movement or sound in place of in-person cues.'
			],
			suitedFor: [
				'Single-incident trauma — accidents, assault, medical events, sudden loss',
				'Post-traumatic stress symptoms: flashbacks, nightmares, hypervigilance',
				'Distressing memories that remain vivid and intrusive',
				'Childhood experiences that continue to intrude on the present'
			]
		},
		{
			slug: 'ecotherapy',
			title: 'Ecotherapy',
			/** Verbatim from the previous site. */
			summary:
				'Ecotherapy takes place outdoors, using nature as a co-therapist to support emotional regulation, connection and healing.',
			image: { base: '/images/service-ecotherapy', widths: [400, 800], width: 800, height: 1067 },
			alt: 'Sticks laid out in a radiating pattern on grass scattered with small purple flowers',
			body: [
				'Ecotherapy moves the work into the living world rather than a consulting room. This is not therapy that happens to occur outside; the setting is part of the method.',
				'Several things change when the work moves outdoors. Sitting face to face can be confronting, particularly for people who find eye contact difficult or who are approaching something shaming — walking side by side, attention on the path ahead, often makes speech easier. The body tends to settle in the presence of trees, water and open ground, which supports the nervous-system work described under somatic approaches. And the living world supplies its own metaphors: seasons, weather, decay and regrowth, all of which give shape to experiences that resist direct description.',
				'Sessions might involve walking and talking, or periods of stillness and sensory attention in one place, or work with what is present — landscape, weather, materials found to hand. The pace is generally slower than indoor work, and that slowness is deliberate.',
				'There are real practical considerations, and I would rather set them out plainly. Outdoor sessions cannot offer the same guaranteed privacy as a closed room, so we agree in advance how to handle being overheard or meeting someone you know. Weather, terrain, accessibility and physical comfort all need discussing beforehand. Ecotherapy is not suitable or appealing for everyone, and it is entirely reasonable to decline it.',
				'I should also be straightforward that ecotherapy requires meeting in person, and my practice is currently online and by telephone. If this way of working interests you, please ask when you get in touch and I will tell you honestly what is possible.'
			],
			suitedFor: [
				'People who find face-to-face conversation in a room difficult',
				'Anxiety and rumination that ease with movement',
				'Climate grief and ecological distress',
				'A sense of disconnection — from self, others, or place'
			]
		}
	]
} as const;

/* ========================================================================
   Supervision
   ===================================================================== */

export const supervision = {
	title: 'Clinical supervision',
	lede: 'Creative and eco-informed supervision for therapists, arts therapists and practitioners in related roles.',
	body: [
		'Alongside client work I offer clinical supervision, having completed a year’s training in creative clinical supervision. Supervision is a professional requirement for registered practitioners, but at its best it is considerably more than a compliance exercise — it is one of the few places where the actual difficulty of this work can be spoken about honestly.',
		'My approach to supervision reflects my approach to therapy. There is room for the creative and the image-based, for what is happening in your body as you describe a piece of work, and for what a case is stirring in you personally. Material that feels unspeakable in other professional settings — dislike of a client, a mistake, a session that went badly, the wish that someone would not turn up — is precisely what supervision is for.',
		'I am also interested in eco-informed supervision: taking the reflective process outdoors, or bringing ecological thinking to bear on practitioner sustainability. Burnout and secondary traumatic stress are widespread and under-acknowledged in this field, and the traditional indoor hour is not always the most useful container for looking at them.',
		'I supervise individually. If you are considering supervision, do get in touch and we can discuss whether I am the right fit for your practice.'
	],
	suitedFor: [
		'Dramatherapists and other arts therapists',
		'Counsellors and psychotherapists working creatively or somatically',
		'Practitioners developing nature-based or outdoor practice',
		'Anyone wanting supervision with room for the creative and the embodied'
	]
} as const;

/* ========================================================================
   Who I work with
   ===================================================================== */

export const whoIWorkWith = {
	title: 'Who I work with',
	groups: [
		{
			title: 'Adults',
			body: 'Individual therapy for adults at any stage of life — whether you arrive with something specific in mind or with a more diffuse sense that something needs attention.'
		},
		{
			title: 'Children and young people',
			body: 'I have years of experience with children of primary and secondary age. Creative approaches are often particularly well suited to young people, who may have no wish to sit and discuss their feelings and no reason to. I hold a full DBS check and can work with schools where that is the most appropriate route.'
		},
		{
			title: 'Practitioners',
			body: 'Clinical supervision for therapists and arts therapists, with particular interest in creative and eco-informed approaches.'
		}
	]
} as const;

/* ========================================================================
   Testimonials — verbatim from the previous site
   ===================================================================== */

export const testimonials = {
	heading: 'Testimonials',
	image: { base: '/images/testimonials-bg', widths: [600, 1200], width: 1200, height: 675 },
	imageAlt: 'The sea seen from a chalk cliff, low cloud lying along the horizon',
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

/* ========================================================================
   FAQs
   ===================================================================== */

export const faqs = {
	heading: 'Your Questions, Answered',
	title: 'Frequently asked questions',
	items: [
		{
			/** Original question; answer expanded — CHECK: telephone was missing. */
			question: 'How are sessions facilitated?',
			answer:
				'I offer secure video sessions and telephone sessions for clients across the UK. Video suits most people, but the telephone is a genuine alternative rather than a lesser option — some people speak more freely without being seen, and it removes any difficulty with screens or connection quality.'
		},
		{
			/** Verbatim from the previous site. */
			question: 'How long does therapy typically last?',
			answer:
				'Each client’s journey is unique. Some achieve their goals in a few months, while others benefit from ongoing support. We’ll review progress regularly and adjust the plan together.'
		},
		{
			/** Verbatim from the previous site. */
			question: 'Do you offer sessions for children as well as adults?',
			answer:
				'Absolutely. I have years of experience working with children both primary and secondary aged, and I hold a full DBS check. I am also able to work within schools if that is most appropriate for the young person.'
		},
		{
			question: 'Do I need to be creative or artistic?',
			answer:
				'No, and it makes no difference at all. Creative approaches in therapy are not about producing anything good — nothing is judged, kept or shown to anyone. Many clients work largely through conversation and use creative methods only occasionally. Others find the creative work becomes central. Both are entirely normal.'
		},
		{
			question: 'What happens in a first session?',
			answer:
				'Mostly conversation. I will ask what has brought you, what you are hoping might change, and something about your circumstances and history. You can share as much or as little as you wish. I will explain how I work and answer any questions, and we will decide together whether to continue. There is no obligation to commit beyond that first conversation.'
		},
		{
			question: 'Is what I say confidential?',
			answer:
				'Yes, with the limits every registered therapist works within. If I believed you or someone else — particularly a child — was at serious risk of harm, I might need to share information to keep people safe. I would always aim to discuss this with you first wherever possible. I also discuss my work in regular clinical supervision, which is a professional requirement; your identity is not shared there.'
		},
		{
			question: 'How do I know if therapy is right for me?',
			answer:
				'Often you do not until you try. It is worth knowing that fit with a particular therapist matters more to outcomes than the specific model used, so it is sensible to speak to more than one person before deciding. If I do not think I am the right practitioner for what you need, I will say so and try to point you somewhere more useful.'
		},
		{
			question: 'What if I am in crisis?',
			answer:
				'This site is not an emergency service and I cannot respond to urgent messages. If you need help now, please contact your GP, call NHS 111, or call the Samaritans free on 116 123 at any hour. In an emergency, go to A&E or call 999.'
		}
	]
} as const;

/* ========================================================================
   Contact
   ===================================================================== */

export const contact = {
	title: 'Get in touch',
	heading: 'Get in touch',
	body: 'I work with clients across the UK through secure online and telephone sessions. If you have a question, or would like to arrange an initial conversation, please get in touch by email.',
	detail: [
		'There is no need to explain everything in a first email. A sentence or two about what you are looking for is plenty, and we can take it from there.',
		'I aim to respond within a few working days. If you have not heard back within a week, please do send a follow-up — emails occasionally go astray.'
	],
	crisis: {
		heading: 'If you need help now',
		body: 'This site is not an emergency service. If you are in crisis or need urgent support, contact your GP, call NHS 111, or call the Samaritans free on 116 123, at any time of day or night. In an emergency, go to A&E or call 999.'
	}
} as const;
