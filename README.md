This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install all packages:

```bash
npm install
```

Connect your database by editing DATABASE_URL string in .env file:

```bash
DATABASE_URL="postgresql://postgres@localhost:5432/chuck-a-quote"
```

Map your data model to the database schema and seed your database:

```bash
npx prisma migrate dev --name init
```

Run the application:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result and enjoy.


