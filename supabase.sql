-- Einmal im Supabase SQL Editor ausführen.
create table if not exists public.gw_state (
  user_id uuid primary key default auth.uid() references auth.users on delete cascade,
  data jsonb not null,
  updated_at timestamptz not null default now()
);
alter table public.gw_state enable row level security;
create policy "Nur eigene Daten" on public.gw_state
  for all to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
