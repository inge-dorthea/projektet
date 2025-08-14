// GET route to get data for the site

import { NextRequest, NextResponse } from "next/server";
import client from "@/util/client";

// getting into the database
const supabase = client();

export const GET = async (req: NextRequest) => {
  // choosing which table to get data from
  // selecting which columns to get
  // selecting which order the columns should be in
  const { data, error } = await supabase
    .from("af_lastassignment")
    .select("*")
    .order("id", { ascending: false });

  return NextResponse.json({ data });
};
