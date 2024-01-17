import {executeQuery} from "@/lib/db";
import {LiveChannel} from "@/model/LiveChannel";
import fs from "fs";
export async function GET(request: Request) {
    try {
        const local = await executeQuery('SELECT * FROM live_channel WHERE category=?','Local Channels');
        const foreign = await executeQuery('SELECT * FROM live_channel WHERE category=?','Foreign Channels');
        console.log(local)
        console.log(foreign)

        let res = [
            {
                categoryTitle:'Local Channels',
                data: local
            },
            {
                categoryTitle:'Foreign Channels',
                data: foreign
            }
        ]
        // Return the data as the response
        return new Response(JSON.stringify(res), {
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        // Handle the error appropriately
        console.error(error);
        // Return an error response if needed
        return new Response('Error retrieving data', { status: 500 });
    }
}

/*
export async function POST(request: Request) {
    try {
        const formData = request.formData();

        console.log('Body',request.)
        console.log("sefwe", formData.then(body=> console.log(body.keys())))
   /!*     // Access image, other data, and validate
        const image = formData.get('image');
        const otherData = formData.get('otherData'); // Example: Get other data

        // Validate image and other data here

        // Write image to a directory
        const imagePath = `public/images/${image.originalFilename}`;
        await image.pipe(fs.createWriteStream(imagePath));

        // Save image path and other data to the database
        await executeQuery(`INSERT INTO your_table (image_path, other_data) VALUES (?, ?)`, imagePath, otherData);

        res.status(201).json({ message: 'Image and data saved successfully' });*!/
        return new Response('Error retrieving data', { status: 200 });
    }catch(error){

    }
}
*/
