/*import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fileSystem from 'fs';
dotenv.config();

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const body = req.body;
    const supabase = createClient(process.env.SUPABASE_PROJECT_URL, process.env.SUPABASE_API_KEY);
    
    // Return a response with the data from the birds table
    const { data, error } = await supabase.from('birds').select();

    // Return a CSV file with the data from the birds table
    res.writeHead(200, {
        'Content-Type': 'text/plain', // try text/plain if doesn't work
        'Content-Length': stat.size
    });


}
*/