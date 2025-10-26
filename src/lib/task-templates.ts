export interface TaskTemplate {
  title: string;
  description: string;
  // The week of the month this task is for (1-4)
  week: number;
}

export const taskTemplates: Record<string, TaskTemplate[]> = {
  "Social Media Management - Basic": [
    ...Array.from({ length: 4 }, (_, i) => i + 1).flatMap(week => [
      { week, title: `Week ${week}: Plan Facebook Content`, description: `Outline posts for week ${week} for Facebook.` },
      { week, title: `Week ${week}: Design Graphics`, description: `Create graphics for week ${week}'s posts.` },
      { week, title: `Week ${week}: Schedule Posts`, description: `Schedule all approved posts for week ${week}.` },
    ]),
    { week: 4, title: "Month-End: Basic Performance Report", description: "Compile key metrics for the monthly Facebook report." },
  ],
  "Social Media Management - Standard": [
    ...Array.from({ length: 4 }, (_, i) => i + 1).flatMap(week => [
      { week, title: `Week ${week}: Content Strategy (FB, IG, TikTok)`, description: `Plan content for all platforms for week ${week}.` },
      { week, title: `Week ${week}: Create & Schedule Posts`, description: `Design and schedule posts for week ${week}.` },
      { week, title: `Week ${week}: Audience Engagement`, description: `Engage with comments, DMs, and other accounts during week ${week}.` },
    ]),
    { week: 4, title: "Month-End: Prepare Analytics Report", description: "Compile and analyze performance data for the monthly report." },
  ],
  "Social Media Management - Premium": [
     ...Array.from({ length: 4 }, (_, i) => i + 1).flatMap(week => [
      { week, title: `Week ${week}: Advanced Content Strategy (4 platforms)`, description: `Plan content for all platforms for week ${week}.` },
      { week, title: `Week ${week}: Advanced Content Creation`, description: `Create high-quality video and graphic content for week ${week}.` },
      { week, title: `Week ${week}: Community Management`, description: `Proactively engage with the community during week ${week}.` },
      { week, title: `Week ${week}: Weekly Strategy Call`, description: `Prepare for and conduct the weekly strategy call in week ${week}.` },
    ]),
    { week: 4, title: "Month-End: In-depth Analytics & Strategy Report", description: "Compile a comprehensive report and plan for the next month." },
  ]
};