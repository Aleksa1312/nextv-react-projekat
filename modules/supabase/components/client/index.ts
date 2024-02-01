import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl)
  throw new Error("Please add supabase url to your environment variables");

if (!supabaseAnonKey)
  throw new Error("Please add supabase anon key to your environment variables");

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
