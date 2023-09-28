
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://esalopyiyeourerwbfjb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzYWxvcHlpeWVvdXJlcndiZmpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4MzcyMTYsImV4cCI6MjAwOTQxMzIxNn0.LZ9cwCR-oY5PNQBysAquaZYJwVqb1tZOHMp85XvVAbo'
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase
export { supabaseUrl, supabaseKey }