import supabase from "./supabase";
import { TableNames } from "../Constants/supaInfo";
//get all alumini
export const getAlumini = async () => {
  let { data: alumini, error } = await supabase.from(TableNames.alumni).select("*");
  if (error) return error;
  return alumini;
};