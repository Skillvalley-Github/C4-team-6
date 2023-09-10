import supabase from "./supabase";
import { TableNames } from "../Constants/supaInfo";
//get all alumini
export const getAlumini = async () => {
  let { data: alumini, error } = await supabase.from(TableNames.alumni).select("*");
  if (error) return error;
  return alumini;
};

//get alumni by id
//here id is the key of the alumni table in supabase since it is the primary key
export const getAlumniById = async (key) => {
  let { data: alumni, error } = await supabase
    .from(TableNames.alumni)
    .select("*")
    .eq("key", key);
  if (error) return error;
  return alumni;
};