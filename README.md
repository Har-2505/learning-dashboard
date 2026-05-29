# Learning Dashboard

A modern learning dashboard built using Next.js, Tailwind CSS, Supabase, and Framer Motion.

## Features

* Responsive dashboard UI
* Sidebar navigation
* Course progress tracking
* Recent activity section
* Supabase database integration
* Modern dark theme
* Animated UI components

## Tech Stack

* Next.js 16
* React
* Tailwind CSS
* TypeScript
* Supabase
* Framer Motion
* Lucide React

## Architecture Choices

The project uses the Next.js App Router structure.

* Components are separated into reusable sections such as Sidebar, CourseProgress, and ActivitySection.
* Supabase client configuration is managed inside the `lib` folder for clean code organization.
* Tailwind CSS was used for fast and responsive UI styling.

## Server / Client Component Split

Client components were used where interactivity and React hooks were needed.

Examples:

* CourseProgress component uses `useEffect` and `useState` to fetch Supabase data.
* Sidebar component uses state management for menu interactions.

Static layout rendering is handled by Next.js app structure.

## Challenges Faced

* Initial Supabase connection issues
* TypeScript type errors during deployment
* Missing package errors during Vercel build
* Understanding deployment environment variables

These were resolved by:

* Proper environment variable configuration
* Installing required dependencies
* Fixing TypeScript state typing
* Updating deployment settings on Vercel

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=https://itwegztgmovdhtumcayo.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0d2VnenRnbW92ZGh0dW1jYXlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk5ODU5NDIsImV4cCI6MjA5NTU2MTk0Mn0.tVP4UdGtlMzAxrCtYVYkflOS89ux5pFuRjh58Lizy8M
```

## Local Setup

```bash
npm install
npm run dev
```

## GitHub Repository

https://github.com/Har-2505/learning-dashboard

## Live Demo

https://learning-dashboard-xi-sepia.vercel.app

## Author

Harshit Kumar  Srivastav
