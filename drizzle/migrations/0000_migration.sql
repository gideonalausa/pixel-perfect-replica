CREATE TABLE public.project_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL CHECK (char_length(full_name) BETWEEN 2 AND 100),
  email text NOT NULL CHECK (char_length(email) BETWEEN 5 AND 255 AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  company text CHECK (company IS NULL OR char_length(company) <= 120),
  service text NOT NULL CHECK (char_length(service) BETWEEN 2 AND 120),
  budget text CHECK (budget IS NULL OR char_length(budget) <= 60),
  description text NOT NULL CHECK (char_length(description) BETWEEN 20 AND 4000),
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.project_inquiries TO anon, authenticated;
GRANT ALL ON public.project_inquiries TO service_role;

ALTER TABLE public.project_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an inquiry"
  ON public.project_inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);