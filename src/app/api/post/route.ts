// POST route for posting messages from the form to a database

import { NextRequest, NextResponse } from "next/server";
import client from "../../../util/client";

// getting into the database
const supabase = client();

export const POST = async (req: NextRequest) => {
  // getting the data to post
  const data = await req.json();

  // choose which table to post to
  const { error } = await supabase.from("af_lastassignment_msg").insert({
    message: data,
  });

  return NextResponse.json(data);
};
