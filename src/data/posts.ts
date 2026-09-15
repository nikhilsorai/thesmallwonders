export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  titleTag: string;
  meta: string;
  target: string;
  author: string;
  datePublished: string;
  readingTime: string;
  excerpt: string;
  content: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'why-okrs-fail-in-growing-companies',
    title: 'Why OKRs fail in growing companies — and the question nobody asks',
    titleTag: 'Why OKRs Fail in Growing Companies — And the Question Nobody Asks',
    meta: "Most OKR programmes die by the second quarter. Not because the goals were wrong, but because nobody asked who would carry them. Here's what actually goes wrong.",
    target: 'why OKRs fail',
    author: 'Ekta Das',
    datePublished: '2026-09-15',
    readingTime: '5 min read',
    excerpt: 'Most OKR programmes die by the second quarter. Not because the goals were wrong, but because nobody asked who would carry them.',
    content: [
      'A founder I worked with runs a cake business. Four outlets, ninety people, about ₹7 crore a year. Good product — people drive across the city for the celebration orders.',
      'Last year she decided to grow, and she did what a good business book told her to. She wrote down a goal:\n\n> **Grow revenue by 40% this year.**\n\nClear. Measurable. The management team agreed. Everyone nodded.',
      '## What happened next',
      '**Month one.** Everyone pushed. Sales went up. She felt good.',
      '**Month three.** Custom orders were arriving all day — on WhatsApp, on Instagram, by phone to each outlet, through the website. Every outlet manager was answering messages between serving customers. Two people started staying late. Nobody complained, because nobody wants to be the person who complains.',
      "**Month five.** Mistakes started. A wedding order for 200 people was confirmed at one outlet and produced at another. A regular customer's anniversary cake went out with the wrong name. A ₹40,000 corporate order was quoted twice, at two different prices, by two different people.\n\nNone of this had ever happened before.",
      '**Month six.** Her head baker of six years resigned. She said she was tired. The founder was shocked — she had never mentioned being unhappy.',
      '**Month nine.** Someone told her about an AI tool that handles WhatsApp orders. She bought it. It cost money and took three weeks to set up. Almost nobody used it. The outlet managers said it was confusing and went back to their notebooks.',
      '**Month twelve.** Revenue grew 11%. Not 40%. Two senior people had gone, and replacing the head baker took four months. She was exhausted, and still paying for the AI tool.',
      '## Here is the important part\n\n**She did nothing stupid.**\n\nThe goal was clear. The team was willing. The AI tool actually worked. Every single decision, taken on its own, was reasonable.\n\nAnd it still failed — because the goal only ever asked one question.\n\nIt asked: *what do we want?*\n\nIt never asked: **who will actually do this work, and what comes off their plate to make room?**\n\nIt never asked: **what could AI do, so that a person doesn\'t have to?**\n\nNobody asked those two questions. So ninety people quietly absorbed the extra work until the ones carrying most of it broke. And the AI arrived in month nine as a rescue, after everyone was already too tired and too suspicious to learn something new.',
      '## The trap runs in a circle\n\nSet an ambitious goal → the team stretches to reach it → people get tired and quietly disengage → the goal is missed → set a more ambitious goal next year to catch up.\n\nMost growing businesses are somewhere on this loop right now. It doesn\'t feel like a loop from the inside. It feels like a run of bad quarters.',
      '## Why the usual help doesn\'t help\n\n**An OKR consultant** will sharpen your objectives and key results. Useful — but they\'re sharpening the question that was already being asked. They won\'t tell you the team can\'t carry it, because no OKR practice has a place to put that.\n\n**An AI vendor** will show you what their tool can do. Also useful — but sold into a business with no goal discipline and no energy left to absorb it, AI becomes another unused subscription.\n\n**A wellbeing programme** treats the symptom. The team wasn\'t tired because of a culture problem. It was tired because the business had committed to more work than it had people to do it. That was created *by the goal*, which means it can only be fixed *inside the goal*.',
      '## Stress is not just emotional. It is structural.\n\nThis is the reframe that changes what you do on Monday.\n\nWhen a team is exhausted we reach for morale, motivation, culture. Occasionally that\'s right. Usually it isn\'t. Usually the team is carrying a load that was decided in a planning meeting nobody thought of as a staffing decision.\n\nYou can\'t fix that with an offsite. You fix it where it was created.',
      '## What the goal should have looked like\n\nSame ambition. But before it became a commitment, three more questions:\n\n**Where are we today, and does that number actually exist?** She never knew how many custom-order enquiries she was losing to slow replies — nobody counted enquiries, only completed orders. She was guessing. So week one, you count them.\n\n**Who carries this, and what comes off their plate?** The four outlet managers. They cannot take custom orders and run a busy café floor at the same time. What comes off: they stop re-typing enquiries into the order book, and stop chasing each other on WhatsApp to check availability. Agreed by the founder, by name.\n\n**What does AI carry — and how will we know when a person overrules it?** AI takes the enquiry on whichever channel it arrives, checks capacity for that date, quotes from the standard price list, confirms. And we watch how often a manager overrides it.\n\nRead that and notice what changed. **The team\'s workload goes down while the goal goes up.**\n\nThat isn\'t a trick or optimism. It\'s what happens when you ask the AI question at the beginning rather than as a rescue in month nine.',
      '## The question to ask this week\n\nYou don\'t need a framework to start. Take your most important goal for this quarter and ask one thing:\n\n**Who is carrying this, and what came off their plate to make room?**\n\nIf you can\'t name the person, or you can\'t name what came off, you don\'t have a commitment. You have a wish with a number attached.',
    ],
  },
  {
    id: '2',
    slug: 'okrs-vs-kpis',
    title: "OKRs vs KPIs: what's the difference, and when you need both",
    titleTag: "OKRs vs KPIs: The Difference, and When You Need Both",
    meta: 'OKRs and KPIs measure different things and answer different questions. Confusing them is the most common reason an OKR programme feels like extra reporting.',
    target: 'OKRs vs KPIs',
    author: 'Ekta Das',
    datePublished: '2026-09-15',
    readingTime: '4 min read',
    excerpt: 'OKRs and KPIs measure different things and answer different questions. Confusing them is why programmes feel like extra admin.',
    content: [
      'The fastest way to make an OKR programme feel like pointless extra admin is to fill it with your KPIs. It happens constantly, and it\'s an understandable mistake — both are numbers, both go in a quarterly review, both get shown on a slide.\n\nThey answer different questions.',
      '## The short version\n\n**A KPI tells you whether the business is healthy.** Revenue, gross margin, churn, on-time delivery, headcount cost, NPS. They run continuously. They existed before this quarter and they\'ll exist after it. Nobody "achieves" a KPI — you watch it and you react.\n\n**An OKR tells you what you\'re changing.** It has a start, an end, and an ambition attached. It\'s a deliberate act, not a standing measurement.\n\nThe clearest test: **your plan is everything the business must deliver. Your goals are the few things you are actually changing.** A KPI is the plan. An OKR is the change.',
      '## Where teams go wrong\n\n**Turning every KPI into an objective.** If you have fourteen KPIs and you make each one an OKR, you now have fourteen objectives — which is the same as having none. You\'ve added reporting without adding focus.\n\n**Setting an OKR on something you\'re not changing.** "Maintain 99.5% uptime" is a KPI wearing an OKR\'s clothes. If the answer to "what are we doing differently" is "nothing, keep it steady", it belongs on the dashboard, not in the goal set.\n\n**Grading KPIs like OKRs.** A KPI that dips isn\'t a failed goal. It\'s information.',
      '## When you need both, and how they connect\n\nAlmost always, and the connection is this: **a KPI is usually why an OKR exists.**\n\nChurn drifts from 3% to 5%. That\'s the KPI doing its job — telling you something changed. The OKR is what you do about it: a quarter aimed at the two accounts-management behaviours you think are causing it, with key results that measure those behaviours and the churn number both.\n\nWhen the quarter ends, the OKR closes. The KPI keeps running.',
      '## The question OKRs don\'t answer, and KPIs don\'t either\n\nHere\'s what neither gives you.\n\nYou\'ve set four objectives this quarter. Every one has clear key results. Your KPI dashboard is healthy. And the same six people are named on all four.\n\nNothing in either system will tell you that. OKRs will happily let you commit to twelve objectives and add a thirteenth. KPIs measure the business, not the load on the people running it.\n\nThat\'s the gap we work in — and it\'s why we ask, before a goal is set, who carries it and what comes off their plate. Not as encouragement. As a gate.',
    ],
  },
  {
    id: '3',
    slug: 'the-capacity-gate',
    title: 'The capacity gate: can your team actually carry next quarter’s goals?',
    titleTag: 'The Capacity Gate: Can Your Team Carry Next Quarter’s Goals?',
    meta: 'Every goal framework tells you to focus. None of them stop you committing to more than your people can carry. Here’s how to measure capacity before you set the goal.',
    target: 'team capacity planning OKRs, how to avoid overcommitting goals',
    author: 'Ekta Das',
    datePublished: '2026-09-15',
    readingTime: '5 min read',
    excerpt: 'Every goal framework tells you to focus. None of them stop you committing to more than your people can carry. Here’s how to measure capacity before setting the goal.',
    content: [
      'Every goal-setting book tells you to focus and say no. Grove wrote about it. Doerr wrote about it. It has been in the canon since 1983 and it is completely correct.\n\nNow show me where anything you use makes you do it.\n\n**That\'s the honest version of the problem.** It isn\'t that OKRs ignore capacity in principle. It\'s that no OKR tool and no OKR practice *enforces* it. Every one of them will let you commit to twelve objectives and add a thirteenth. Nobody asks what came off the plate. Nobody asks who agreed.',
      '## Why "we\'ll be careful" doesn\'t work\n\nBecause the conversation where capacity gets decided isn\'t framed as a capacity conversation. It\'s framed as an ambition conversation, and ambition conversations have social gravity. The person who says "I don\'t think we can carry that" is, in that room, the person slowing things down.\n\nSo nobody says it. The goal gets set. The load lands on whoever is already carrying the most, because they\'re the most capable, and that\'s how it works everywhere.',
      '## Measuring energy so it survives a budget meeting\n\nIf ambition has key results, capacity needs a number — otherwise it stays a feeling and gets cut the first time budgets tighten.\n\nFour dimensions, and they all point the same way. **Higher is always better.**\n\n- **Headroom:** Is there room to take on more than we already carry?\n- **Clarity:** Do people know what matters most this cycle without asking?\n- **Safety:** Can someone say "this won\'t work" without it costing them?\n- **Recovery:** Does the team return to normal between pushes, or accumulate debt?',
      'Two design decisions matter more than the questions themselves.\n\n**Everything points the same way.** An early version of this had a "load" dimension, where a low score was bad. On a composite meaning capacity, that fires backwards — it hands the most permissive rating to the most overloaded team. If you build your own, check the direction of every dimension twice.\n\n**The band is set by the worst dimension, not the average.** Safety at 3 with everything else at 8 averages to 7. Green. Take on more work. But psychological safety is what determines whether the other three numbers are honest at all — a team that can\'t say "this won\'t work" reports whatever is expected of them, and every other dimension becomes fiction.\n\nAn average is what a dashboard wants. A gate needs a floor.',
      '## What the bands mean\n\n- **Green** — can take on new commitments.\n- **Amber** — can hold what it has. Cannot add.\n- **Red** — must remove something before anything is added.\n\nThat\'s the whole gate. It\'s not complicated. What makes it work is that it\'s checked *before* the goal is set, not reviewed afterwards when the damage is done.',
      '## Say it to a CFO like this\n\n**This is not a wellness metric. It\'s a capacity forecast.** It tells you what the organisation can be asked to carry next quarter.\n\nThat framing keeps it in the business conversation. Filed under wellbeing, it becomes the first line cut when the year gets tight — which is precisely the year you need it.',
      '## One exemption, and it matters\n\nThere\'s a trap here, and it nearly caught us.\n\nTwo rules, each sensible alone: you can\'t set a goal on a number nobody measures, so add the work to start measuring it. And you can\'t add work to a team without naming what comes off.\n\nPut them together on a company\'s first objective. They have no baselines — almost nobody does. So measuring adds work, and the capacity rule then demands they name what comes off to pay for it. But you can\'t know what to remove until you\'ve measured where the time goes, and you can\'t measure until you\'ve paid with a removal.\n\nThe answer would be "defer this objective". For every objective. A framework that refuses everything on day one isn\'t rigorous, it\'s useless.\n\n**So measuring is exempt from the removal requirement. Measuring is how a team earns the right to remove.**\n\nThe general lesson is worth more than the rule: every refusal has to be survivable in the first cycle, when a company has nothing yet.',
      '## Where to start\n\nBefore your next planning session, ask each team lead four questions and write down the lowest score. Not the average. The lowest.\n\nThen look at the goals you were about to set.',
    ],
  },
  {
    id: '4',
    slug: 'what-does-ai-actually-carry',
    title: "What does AI actually carry? Measuring AI's share of a key result",
    titleTag: "What Does AI Actually Carry? Measuring AI's Share of a Key Result",
    meta: "Every OKR tool now has AI that drafts your goals. None of them measure what AI carries. Override rate is the number that tells you whether your AI deployment is working.",
    target: "measuring AI impact OKRs, AI override rate",
    author: 'Ekta Das',
    datePublished: '2026-09-15',
    readingTime: '5 min read',
    excerpt: "Every OKR tool has AI that drafts goals. None measure what AI carries. Override rate tells you whether your AI deployment is working.",
    content: [
      'Open any OKR platform in 2026 and you\'ll find AI in it. It drafts your objectives. It suggests key results. It summarises the quarter, cascades alignment, flags risk.\n\nEvery one of those treats AI as something that **writes** the goal.\n\nNot one of them treats AI as something that **carries** it.\n\nThat\'s a strange gap, and it\'s worth sitting with. There is no term in the OKR canon for what a machine does, because when the canon was written there was nothing to name. Every goal framework ever published quietly assumes the same thing: **if you want more output, you add people.**\n\nFifty years ago that was true. It isn\'t any more.',
      '## The unit of work that isn\'t a person\n\nThink about what your key results actually assume.\n\n"Reduce average first-response time from 14 hours to 2 hours." Who does that? In 2019 the honest answer was: more support staff, or the same staff working differently. Both are people.\n\nIn 2026 the answer might be that AI takes the first response on every channel, drafts it from the knowledge base, and a person reviews anything it\'s unsure about. The key result is identical. **The thing carrying it is completely different**, and nothing in your goal system records that.\n\nWhy does it matter? Because if you don\'t write down what the machine is carrying, three things stay invisible:\n\n**You can\'t tell whether the goal was achievable.** A key result that needs four new hires and one that needs a working automation look identical on the board.\n\n**You can\'t tell why it failed.** Was the target wrong, or did the automation not get built, or did it get built and nobody used it?\n\n**You can\'t protect your people.** The whole reason for naming the AI\'s share is that it\'s the load *not* landing on someone.',
      '## The number that actually matters: override rate\n\nHere\'s the sharpest idea we have, and it\'s a simple one.\n\n**An AI that is technically correct but constantly overridden has failed.**\n\nNot "needs tuning". Failed. Because the work is still being done by a person — they\'re now doing it *plus* checking the machine first.\n\nSo measure how often a person overrules it.\n\nThat single number tells you things accuracy never will:\n\n- **Trust, not capability, is where AI deployments die.** A model at 94% accuracy that people override 60% of the time is worse than useless; it has added a step.\n- **It gives you month two instead of month nine.** The founder in our first post found out her AI tool had failed in month nine, when she noticed nobody was using it. Override rate would have told her in week three.\n- **It\'s honest in a way adoption metrics aren\'t.** "Seats activated" and "queries processed" both go up when people are poking at a tool they don\'t trust.',
      '## What to write down\n\nFor each key result where AI does part of the work, three lines:\n\n> **What AI carries:** the specific task, on which channel, at which step.\n> **What a person still does:** the review, the exception, the judgement call.\n> **Override rate:** how often the person changes or rejects what it produced. Measured weekly, reported at the quarterly close.\n\nThat\'s it. No new tooling required for most of it — if the automation logs its outputs and someone can mark a correction, you have the number.',
      '## Measure outcomes, not usage\n\nOne trap worth naming, because it\'s the most common one.\n\nDon\'t set "deploy AI across five teams" as a key result. That measures your own activity, not the business. The useful version names what changes: "handled tickets per agent goes from 20 to 35 with the copilot in place" — with the override rate beside it, so you know whether the 35 is real or whether people are fighting the tool to get there.',
      '## The honest limits\n\nTwo things I\'d want said back to me if I were reading this sceptically.\n\n**This is easier to write than to instrument.** Getting a clean override rate out of a real support stack takes work, and in some processes the "override" isn\'t a discrete event you can log. Start where it is measurable — the channels where the machine produces something a human accepts or changes — and don\'t pretend you have the number everywhere.\n\n**Not every key result has an AI share, and forcing one is worse than having none.** The question is asked every time. The answer is often "nothing, this is a people problem", and that\'s a fine answer, recorded.',
      '## Why nobody else asks for this\n\nBecause it only makes sense if you think of AI as a thing that carries work rather than a thing that writes plans. Once you make that switch, override rate is obvious — and until you do, it isn\'t a question that occurs to you.\n\nThat\'s the whole bet, stated plainly.',
    ],
  },
  {
    id: '5',
    slug: 'okr-consulting-india-uae',
    title: 'OKR consulting in India and the UAE: what an engagement actually looks like',
    titleTag: 'OKR Consulting in India and the UAE: What an Engagement Actually Looks Like',
    meta: 'Month by month, what a year of OKR consulting involves for a founder-led company in India or the UAE — and what you should expect to have at the end of it.',
    target: 'OKR consultant India, OKR consulting Dubai, OKR implementation India',
    author: 'Ekta Das',
    datePublished: '2026-09-15',
    readingTime: '6 min read',
    excerpt: 'Month by month, what a year of OKR consulting involves for a founder-led company in India or the UAE — and what you have at the end.',
    content: [
      'Most consulting pages describe an approach. This one describes a calendar, because that\'s what you\'re actually buying and it\'s the thing hardest to find out before you commit.',
      '## Month 0 — the diagnostic\n\nBefore anything is set, four things get established.\n\n**The north star.** Not a mission statement — the one thing that, if it moved, would mean the year worked.\n\n**Where AI could genuinely move the P&L.** Specific processes, specific costs. Usually two or three candidates, not twenty.\n\n**What\'s actually measurable.** This is the part that surprises people. Most companies discover here that a number they\'ve been discussing for years doesn\'t exist — nobody counts enquiries, only completed orders; nobody separates new revenue from renewals. If you\'re guessing, the first work is measuring, and that\'s a finding, not a failure.\n\n**An energy score for every team.** Four questions, in conversation, under a minute each. The conversation is the diagnosis — "you said headroom is a four, tell me why" is where the real information is.\n\nThen the first goals get set. **Nothing that can\'t answer measure, energy and leverage gets set.**',
      '## Months 1–12 — one function a month\n\nSales, support, operations, finance, marketing, HR — then round again. Each session led by someone who knows that function, doing the same four things:\n\n1. **Audit** — did last cycle\'s measures track what mattered, or what was easy?\n2. **Refine** — kill the vanity numbers, sharpen the real ones, re-check the gates\n3. **Re-baseline** — has the value held, or has it quietly decayed?\n4. **Ritual** — name one stress point, design one repeatable behaviour to absorb it\n\nThat last one is the part that outlives the engagement. Fifteen minutes a day, twenty minutes on a Monday — small enough to survive a bad week, which is the only test that matters.',
      '## Every quarter — the close\n\nCommitted goals graded honestly. Stretch goals graded separately, never painted red simply for being ambitious.\n\nOne evidence pack: results, energy by team, AI override rates, removals actually delivered, rituals held versus planned, and anything that quietly decayed.',
      '## The thing that renews the retainer\n\nEvery goal we decline gets logged, with its date and its reason. By month three that produces a sentence no report can match:\n\n> *"Three times this quarter you tried to add work to Operations without taking anything off. Here are the dates."*\n\nThat\'s worth more than the refusal that produced it.',
      '## Years 2–5 — we get smaller\n\nYear two, the rituals run without us in the room. Year three, leverage compounds across departments. By years four and five you set your own goals and keep your own rhythm, and we become the annual recalibration.\n\n**Our role is designed to shrink.** It\'s a better promise than "retain us forever", and it\'s the reason the first year is worth trusting someone with.',
      '## Working across both markets\n\nWe\'re based in Bengaluru and work across India and the UAE. The Gulf is an hour and a half behind, which means one working day genuinely covers both — not a scheduling compromise, an actual overlap.\n\nFor UAE clients: remote through the month, on site for the quarterly close, and in your working week.',
      '## What you should ask any OKR consultant\n\nWhether or not you talk to us, three questions worth asking:\n\n**"What happens when my team can\'t carry the goals we set?"** If the answer is about prioritisation and focus, you\'ll be having the same conversation in month six.\n\n**"How do you know the baseline is real?"** Anyone who takes your existing numbers at face value has skipped the hardest part.\n\n**"When do you leave?"** A consultant who can\'t answer this is selling a subscription.',
    ],
  },
];
