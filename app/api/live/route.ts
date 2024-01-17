import type { NextApiRequest, NextApiResponse } from 'next';
import {executeQuery} from "@/lib/db";
import * as fs from "fs";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === 'POST') {
            const formData = await req.formData();

            // Access image, other data, and validate
            const image = formData.get('image');
            const otherData = formData.get('otherData'); // Example: Get other data

            // Validate image and other data here

            // Write image to a directory
            const imagePath = `public/images/${image.originalFilename}`;
            await image.pipe(fs.createWriteStream(imagePath));

            // Save image path and other data to the database
            await executeQuery(`INSERT INTO your_table (image_path, other_data) VALUES (?, ?)`, imagePath, otherData);

            res.status(201).json({ message: 'Image and data saved successfully' });
        } else {
            res.status(405).json({ message: 'Method not allowed' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error processing request' });
    }
}
