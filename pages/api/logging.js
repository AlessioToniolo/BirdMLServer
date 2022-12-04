import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config();

export default async function handler(req, res) {
    const body = req.body;
    const supabase = createClient(process.env.SUPABASE_PROJECT_URL, process.env.SUPABASE_API_KEY);
    const { error } = await supabase
        .from('birdsaaaa')
        .insert({bird_species: body});

    if (error) {
        res.status(500).json({ result: false});
        throw new Error(error.message);
    } else {
        res.status(200).json({ result: true });
    }
}