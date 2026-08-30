# Constellation Badge Database Setup

This site can save/retrieve badges without registration using a claim code.

## 1. Create the Supabase table

1. Open your Supabase project.
2. Go to **SQL Editor**.
3. Paste and run the SQL in `supabase-schema.sql`.

## 2. Add your project keys

For a static Vercel deployment, the simplest setup is to keep the public Supabase anon credentials in `config.js`.
The anon key is designed to be browser-visible, as long as Row Level Security stays enabled.

Open `config.js` and fill these in:

```js
window.archiveConfig = {
  supabaseUrl: "https://YOUR-PROJECT.supabase.co",
  supabaseAnonKey: "YOUR-ANON-KEY",
};
```

Then redeploy the Vercel project.

## 3. Vercel checklist

1. In Supabase, copy **Project URL** and **anon public key** from **Project Settings → API**.
2. Paste them into `config.js`.
3. Run the SQL in `supabase-schema.sql`.
4. Push the project to GitHub.
5. Vercel redeploys the site from GitHub.

## 4. Draft autosave

Unfinished quiz progress is saved in this browser with `localStorage`.
That means a participant can refresh or accidentally close the tab and continue where they left off on the same device/browser.

The draft includes quiz progress, selected answers, name, DOB, station values, card colour, and icon choices.
It does not save the camera/uploaded photo before the final tin is generated, because photos are too large and sensitive for browser draft storage.

Once the final tin is generated and the claim code is created, the unfinished draft is cleared.

## 5. Local fallback

If `config.js` is empty, badges save to this browser only using `localStorage`.
That is useful for testing, but participants can only retrieve their badge on the same device/browser.

## Future cross-device drafts

To resume unfinished quizzes across devices without registration, add a separate "resume code" flow.
Do not expose a public drafts table with broad anonymous select/update policies, because drafts can contain personal details.
