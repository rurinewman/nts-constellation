create table if not exists public.constellation_badges (
  id uuid primary key default gen_random_uuid(),
  claim_code text not null unique,
  participant_name text not null,
  participant_dob date,
  constellation_name text not null,
  constellation_title text not null,
  constellation_symbol text not null,
  card_color text not null default 'pink',
  result_copy text not null,
  sports_value text not null,
  hidden_symbol text not null,
  melody text not null,
  selected_words jsonb not null default '[]'::jsonb,
  selected_answers jsonb not null default '[]'::jsonb,
  signature_data text not null default '',
  created_at timestamptz not null default now()
);

alter table public.constellation_badges
add column if not exists signature_data text not null default '';

alter table public.constellation_badges
add column if not exists participant_dob date;

alter table public.constellation_badges
add column if not exists card_color text not null default 'pink';

alter table public.constellation_badges
add column if not exists photo_path text not null default '';

alter table public.constellation_badges enable row level security;

drop policy if exists "Anyone can create a constellation badge" on public.constellation_badges;
create policy "Anyone can create a constellation badge"
on public.constellation_badges
for insert
to anon
with check (true);

drop policy if exists "Anyone can retrieve a badge by claim code" on public.constellation_badges;
create policy "Anyone can retrieve a badge by claim code"
on public.constellation_badges
for select
to anon
using (true);

-- Portraits are stored as cropped JPEGs in a public bucket. The claim code is
-- part of the path, so the badge row only needs to retain the Storage path.
insert into storage.buckets (id, name, public)
values ('constellation-photos', 'constellation-photos', true)
on conflict (id) do update set public = excluded.public;

drop policy if exists "Anyone can upload constellation portraits" on storage.objects;
create policy "Anyone can upload constellation portraits"
on storage.objects
for insert
to anon
with check (bucket_id = 'constellation-photos');
