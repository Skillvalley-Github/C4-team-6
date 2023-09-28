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
export const getAlumniByPage = async (page, pageSize) => {
  let { data: alumni, error } = await supabase
    .from(TableNames.alumni)
    .select("*")
    .range(page, pageSize ? page + pageSize : page + 5);
  if (error) return error;
  return alumni;
}
export const getWebinar = async () => {
  let { data: webinar, error } = await supabase.from(TableNames.webinar).select("*");
  if (error) return error;
  return webinar;
}

export const getWebinarlength = async () => {
  let { data: webinar, error } = await supabase.from(TableNames.webinar).select("*");
  if (error) return error;
  return webinar.length;
}
export const getWebinarByPage = async (page, pageSize) => {
  let { data: webinar, error } = await supabase
    .from(TableNames.webinar)
    .select("*")
    .range(page, pageSize ? page + pageSize : page + 5);
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

export const getStudents = async () => {
  let { data: students, error } = await supabase.from(TableNames.students).select("*");
  if (error) return error;
  return students;
}
export const getStudentsById = async (key) => {
  let { data: students, error } = await supabase
    .from(TableNames.students)
    .select("*")
    .eq("key", key);
  if (error) return error;
  return students;
}

export const getStudentsbyPage = async (page, pageSize) => {
  let { data: students, error } = await supabase
    .from(TableNames.students)
    .select("*")
    .range(page, pageSize ? page + pageSize : page + 5);
  if (error) return error;
  return students;
}

export const submitStudent = async (studentData) => {
  console.log("studentData inside submitStudent:", studentData);
  try {
    // Upload student image to the images bucket
    const { data: studentImageData, error: studentImageError } = await supabase.storage
      .from('images') // Specify the bucket and folder
      .upload(studentData.image.name, studentData.image);
    console.log("studentImageData:", studentImageData)
    if (studentImageError) {
      throw studentImageError;
    }

    // Get the URL of the uploaded student image
    const studentImageUrl = studentImageData.Location;

    // Insert the student's name and image URL into the students' database
    const { data: studentInsertData, error: studentError } = await supabase
      .from('students')
      .upsert([{ name: studentData.name, image_url: studentImageUrl }]);
    console.log("studentInsertData:", studentInsertData)

    if (studentError) {
      throw studentError;
    }

    return studentInsertData;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};
