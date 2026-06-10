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
