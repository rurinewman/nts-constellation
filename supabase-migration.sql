-- Run this once if the existing constellation_badges table predates DOB/card color.
alter table public.constellation_badges
add column if not exists participant_dob date;

alter table public.constellation_badges
add column if not exists card_color text not null default 'pink';
