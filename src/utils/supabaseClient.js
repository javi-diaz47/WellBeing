import { createClient } from "@supabase/supabase-js";
import { REACT_APP_SUPABASE_ANON_KEY, REACT_APP_SUPABASE_URL } from "./env/env";

const supabaseUrl = REACT_APP_SUPABASE_URL
const supabaseAnonKey = REACT_APP_SUPABASE_ANON_KEY


export const supabase = createClient(supabaseUrl, supabaseAnonKey);