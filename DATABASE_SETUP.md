# Constellation Badge Database Setup

This site can save/retrieve badges without registration using a claim code. Completed badges can also include the cropped portrait captured during the archive journey.

## 1. Create the Supabase table

1. Open your Supabase project.
2. Go to **SQL Editor**.
3. Paste and run the full SQL in `supabase-schema.sql`.

The SQL is safe to rerun: it adds the `participant_dob`, `card_color`, and `photo_path` columns, creates the `constellation-photos` public Storage bucket, and adds the upload policy needed by the browser. Public Storage serving does not need a read policy. The bucket is public so a retrieved badge can display its portrait from a normal image URL; use an authenticated/private Storage design instead if portraits must not be publicly addressable.

If your project returns a permission error specifically for `storage.buckets`, create a public bucket named `constellation-photos` from **Storage → New bucket** in the Supabase dashboard, then run the rest of this SQL starting at the first `alter table` statement.

If the table already exists but new badges show a schema error, run the smaller `supabase-migration.sql` file. It only adds the `participant_dob` and `card_color` columns and does not require Storage permissions.

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
It does not save the camera/uploaded photo before the final tin is generated, because photos are too large and sensitive for browser draft storage. The cropped portrait is uploaded only when the participant completes the final customization and the badge is saved.

Once the final tin is generated and the claim code is created, the unfinished draft is cleared.

## 5. Local fallback

If `config.js` is empty, badges save to this browser only using `localStorage`.
That is useful for testing, but participants can only retrieve their badge on the same device/browser.

## Future cross-device drafts

To resume unfinished quizzes across devices without registration, add a separate "resume code" flow.
Do not expose a public drafts table with broad anonymous select/update policies, because drafts can contain personal details.
