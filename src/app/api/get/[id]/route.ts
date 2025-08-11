import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  params: { id: string };
}

// denne kan lægges i sin egen fil og hentes ind, så man ikke skal skrive det hver gang
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export const GET = async (req:NextRequest, route: Params) => {
    const id:string = route.params.id;

    const {data, error} = await supabase.from('af_lastassignment').select('*').eq('id', id)

    if(error == null) return NextResponse.json({data});
    return NextResponse.json({error:error.message});
}