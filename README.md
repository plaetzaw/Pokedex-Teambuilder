This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Plans
So here is the plan, the initial version will use SSR and minimal styling to get a deployed version up.

The next update will migrate over to SSG. I plan on intergrating a serach feature with SSR.

Next I want to add a team builder function, allowing a user to build a team and display their movepools to show type coverage. 

## Issues
The primary issue right now is for the basedex, the PokeAPI does not attatch the dex# to the main listing, so we can't grab the dex# to look up the details. Thus we have to use a modified index number.

However, the PokeAPI does support `name` as a search param, so I may migrate to that instead of index #. Plus being able to support regional forms and mega evolution I would not be able to use `index` or `dex#s`.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
