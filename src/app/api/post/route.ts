import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export const POST = async (req: NextRequest) => {
  const data = await req.json();

  const { error } = await supabase.from("af_lastassignment_msg").insert({
    message: data,
  });

  return NextResponse.json(data);
};
