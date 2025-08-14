import { createClient } from "@supabase/supabase-js";

const client = () => {
    const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

return supabase;
}

export default client;