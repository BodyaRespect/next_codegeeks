# Event Management App

The **Event Management App** is a web application designed to manage and interact with events. It provides features for displaying, creating, editing, and deleting events, as well as viewing events on a map. The application aims to offer an intuitive and interactive experience for users to manage and explore various events.

## Getting Started

First, install all dependencies: 

```bash
npm i
```

And after, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. If you run your local server application at [http://localhost:3000](http://localhost:3000), the application will automatically run at [http://localhost:3001](http://localhost:3001)

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Features and Pages

### 1. Event List Page
- **Display Events:** View events in either a list or grid format.
- **Event Details:** Show the title, date, location, and a brief description for each event.
- **Sorting and Filtering:** Implement functionality to sort and filter events (e.g., by date, category).

### 2. Event Details Page
- **Detailed View:** Provide a detailed view of an event when selected.
- **Similar Events:** Display similar events based on a recommendation algorithm.

### 3. Event Creation and Editing
- **Form:** Allow users to add new events or edit existing ones.
- **Fields:** Include fields for title, date, location, category, and description.
- **Validation:** Ensure all fields are correctly filled out with validation.

### 4. Event Deletion
- **Functionality:** Enable the deletion of events with a confirmation prompt.

### 5. Optional Map View
- **Map Integration:** Implement a map view to display events based on their locations.
- **Mapping API:** Utilize a mapping API (e.g., Google Maps API) to plot event locations.
- **Map Interaction:** Allow users to interact with the map to view event details.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
