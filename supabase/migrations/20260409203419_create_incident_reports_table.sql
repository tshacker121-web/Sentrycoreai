/*
  # Create Incident Reports Table

  1. New Tables
    - `incident_reports`
      - `id` (uuid, primary key)
      - `infrastructure_type` (text, enum: network, cloud, on-premise, hybrid)
      - `threat_level` (text, enum: low, medium, high, critical)
      - `company_name` (text)
      - `contact_email` (text)
      - `contact_phone` (text)
      - `description` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `incident_reports` table
    - Add policy for inserting new reports (public access for reporting)
*/

CREATE TABLE IF NOT EXISTS incident_reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  infrastructure_type text NOT NULL CHECK (infrastructure_type IN ('network', 'cloud', 'on-premise', 'hybrid')),
  threat_level text NOT NULL CHECK (threat_level IN ('low', 'medium', 'high', 'critical')),
  company_name text NOT NULL,
  contact_email text NOT NULL,
  contact_phone text NOT NULL,
  description text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE incident_reports ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit incident reports"
  ON incident_reports
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view reports"
  ON incident_reports
  FOR SELECT
  TO authenticated
  USING (true);
