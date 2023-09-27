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
  // console.log("key:", key)
  let { data: alumni, error } = await supabase
    .from(TableNames.alumni)
    .select("*")
    .eq("key", key);
  if (error) return error;
  return alumni;
};
export const getWebinar = async () => {
  let { data: webinar, error } = await supabase.from(TableNames.webinar).select("*");
  if (error) return error;
  return webinar;
}

export const getWebinarlength=async ()=>{
  let { data: webinar, error } = await supabase.from(TableNames.webinar).select("*");
  if (error) return error;
  return webinar.length;
}
export const getWebinarByPage = async (page,pageSize) => {
  let { data: webinar, error } = await supabase
    .from(TableNames.webinar)
    .select("*")
    .range(page,pageSize? page + pageSize:page+5);
  if (error) return error;
  return webinar;
}


export const getWebinarById = async (key) => {
  let { data: webinar, error } = await supabase
    .from(TableNames.webinar)
    .select("*")
    .eq("key", key);
  if (error) return error;
  return webinar;
};


export const getEvents = async () => {
  let { data: events, error } = await supabase.from(TableNames.events).select("*");
  if (error) return error;
  return events;
};

export const getEventsById = async (key) => {
  let { data: events, error } = await supabase
    .from(TableNames.events)
    .select("*")
    .eq("key", key);
  if (error) return error;
  return events;
};

export const getGallery = async () => {
  let { data: gallery, error } = await supabase.from(TableNames.gallery).select("*");
  if (error) return error;
  return gallery;
};

