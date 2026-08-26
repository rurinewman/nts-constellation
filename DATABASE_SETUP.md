# Constellation Badge Database Setup

This site can save/retrieve badges without registration using a claim code.

## 1. Create the Supabase table

1. Open your Supabase project.
2. Go to **SQL Editor**.
3. Paste and run the SQL in `supabase-schema.sql`.

## 2. Add your project keys

Open `config.js` and fill these in:

```js
window.archiveConfig = {
  supabaseUrl: "https://YOUR-PROJECT.supabase.co",
  supabaseAnonKey: "YOUR-ANON-KEY",
};
```

## 3. Local fallback

If `config.js` is empty, badges save to this browser only using `localStorage`.
That is useful for testing, but participants can only retrieve their badge on the same device/browser.
