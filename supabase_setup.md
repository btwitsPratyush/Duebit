# Supabase Setup Guide

Follow these steps to backend the Waitlist form.

## 1. Create a Supabase Project
1. Go to [Supabase](https://supabase.com/) and sign in.
2. Create a new project.
3. Once created, go to **Project Settings > API**.
4. Copy the `URL` and `anon` public key.

## 2. Environment Variables
Create a `.env` file in the root of your project:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 3. Database Setup (SQL Editor)
Go to the **SQL Editor** in your Supabase dashboard and run this query:

```sql
-- Create waitlist table
create table public.waitlist (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  firm_name text not null,
  email text not null unique,
  phone text not null,
  firm_type text not null
);

-- Enable Row Level Security (RLS)
alter table public.waitlist enable row level security;

-- Policy: Allow anyone to insert (Anon users)
create policy "Allow public inserts"
on public.waitlist
for insert
to anon
with check (true);

-- Policy: Allow all access for now (or restrict to service role / auth users later)
-- For this demo, we allow anon read to build the admin page easily (NOT RECOMMENDED FOR PROD WITHOUT AUTH)
create policy "Allow public read"
on public.waitlist
for select
to anon
using (true);
```

## 4. Deployment to Vercel
When deploying to Vercel, make sure to add the Environment Variables:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

Done! Your waitlist form is now connected.
