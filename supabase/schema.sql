-- Run once in the SQL Editor of your intended Supabase project.
-- UUID generation is built into current Supabase PostgreSQL versions.
begin;
create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  idea text,
  created_at timestamptz not null default now(),
  constraint waitlist_email_normalized check (email = lower(btrim(email))),
  constraint waitlist_email_length check (char_length(email) between 3 and 254),
  constraint waitlist_email_valid check (email ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'),
  constraint waitlist_idea_length check (idea is null or char_length(idea) <= 1000)
);
alter table public.waitlist enable row level security;
-- No public policies: reads, inserts, updates, and deletes are denied.
revoke all on public.waitlist from anon, authenticated;
grant insert on public.waitlist to service_role;
commit;
