import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// grab the key to the database
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export const GET = async (req: NextRequest) => {
  const { data, error } = await supabase
    .from("af_lastassignment")
    .select("*")
    .order("id", { ascending: false });

  console.log({ data });

  return NextResponse.json({ data });
};
