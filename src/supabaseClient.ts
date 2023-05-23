import {createClient} from '@supabase/supabase-js'

const supabaseUrl = 'https://bhrwaflencprygsjabsp.supabase.co'
const supabaseAnonKey  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJocndhZmxlbmNwcnlnc2phYnNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5MjA2OTMsImV4cCI6MTk5OTQ5NjY5M30.jFSwZCvnvPNNGMLFAi_9ECPWVmSsNLD6UFu8kmBzS2Y'

export const supabase = createClient(supabaseUrl, supabaseUrl)