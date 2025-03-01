# Mag-Donalds

Mag-Donalds is a **self-checkout application** built with **Next.js** that simulates a fast-food ordering experience. Customers can browse the menu, add items to their cart, and complete their orders using **Stripe** for secure payment processing. The application is powered by a **PostgreSQL** database managed with **Prisma ORM**, ensuring efficient data handling and scalability.

This project is designed to showcase modern web development practices, including server-side rendering, API integrations, and database management.

---

## Features

- **Next.js**: A React framework for server-side rendering, static site generation, and API routes.
- **Stripe Integration**: Handles payment processing and webhook events to update order statuses.
- **PostgreSQL**: A powerful, open-source relational database system.
- **Prisma ORM**: A modern database toolkit for TypeScript and Node.js.

---

## Getting Started

### Prerequisites

Before running the project, ensure you have the following environment variables set up in a `.env` file:

```env
DATABASE_URL=your_neondb_database_url
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_stripe_public_key
STRIPE_WEBHOOK_SECRET_KEY=your_stripe_webhook_secret_key
```

## Installation

### 1. Clone the repository:

```bash
git clone https://github.com/magnosansil/mag-donalds.git
cd mag-donalds
```

### 2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### 4. Open http://localhost:3000 in your browser to view the application.

## Database Setup

### 1. Ensure your PostgreSQL database is running and accessible.

### 2. Run Prisma migrations to set up the database schema:

```bash
npx prisma migrate dev --name init
```

### 2. Generate the Prisma client:

```bash
npx prisma generate
```

## Stripe Webhook

To handle Stripe webhook events, ensure your webhook endpoint is correctly configured in the Stripe Dashboard. The webhook URL should point to your application's /api/webhook/stripe endpoint.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
