
type Blog = {
    title: string,
    summary: string,
    publishedDate: Date,
    source: string,
}
export default [
    {
        title: "در ستایش ریفکتور",
        summary: "رسیدن به کمال از طریق کدنویسی",
        publishedDate: new Date("2021-10-28T14:47:32.000000Z"),
        source: 'https://vrgl.ir/eJxCZ',
    },
    {
        title: "Smart Cutting String Arrays",
        summary: "Have you ever tried to show a list of strings to a user? What did you do if you had character limitation?",
        publishedDate: new Date("2023-07-26T19:39:49.877Z"),
        source: 'https://medium.com/@hesam.seyf/smart-cutting-string-arrays-1af6477e901b',
    },
    {
        title: "How to Effectively Onboard New Developers: Tips for Team Leads",
        summary: "Boost your team’s efficiency by mastering the art of developer onboarding. Explore tips on documentation, automation, and a welcoming space.",
        publishedDate: new Date("2025-01-20T05:42:02.098Z"),
        source: 'https://medium.com/@hesam.seyf/how-to-effectively-onboard-new-developers-tips-for-team-leads-a60429fe0d3c',
    },
    {
        title: "A Journey from Monolith to Monorepo",
        summary: "How We Migrated to a Monorepo and Never Looked Back",
        publishedDate: new Date("2025-02-10T06:31:45.720Z"),
        source: 'https://medium.com/@hesam.seyf/a-journey-from-monolith-to-monorepo-a525e6d21ccd',
    },
    {
        title: "A Journey from Monolith to Monorepo",
        summary: "How We Migrated to a Monorepo and Never Looked Back",
        publishedDate: new Date("2025-02-10T06:31:45.720Z"),
        source: 'https://medium.com/@hesam.seyf/a-journey-from-monolith-to-monorepo-a525e6d21ccd',
    },
] satisfies Blog[];