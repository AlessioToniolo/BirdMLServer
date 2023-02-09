import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config();

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const body = req.body;
    const supabase = createClient(process.env.SUPABASE_PROJECT_URL, process.env.SUPABASE_API_KEY);
    
    // Return a response with the data from the birds table
    const { data, error } = await supabase.from('birds').select();

    if (error) {
        res.status(500);
        throw new Error(error.message);
    } else {
        res.status(200).json(data);
    }
}