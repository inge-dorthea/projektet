import { NextRequest, NextResponse } from "next/server";
import client from "@/util/client";

// getting into the database
const supabase = client();

export const GET = async (req: NextRequest, route: GetRouteParams) => {
  // the id which the unique data matches
  const id: string = route.params.id;

  // choosing which table to get data from
  // selecting which columns to get
  // the data of the column id should be equal to the id from route.params
  const { data, error } = await supabase
    .from("af_lastassignment")
    .select("*")
    .eq("id", id);

  // if there's no error, the data will be returned
  if (error == null) return NextResponse.json({ data });

  // if there's an error, an error message will be returned
  return NextResponse.json({ error: error.message });
};
