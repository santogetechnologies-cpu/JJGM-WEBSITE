import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: Request,
  { params }: { params: { frame: string } }
) {
  const frameName = params.frame;
  
  // Directly read from the "almond animation" folder in the project root
  const imagePath = path.join(process.cwd(), 'almond animation', frameName);

  try {
    if (fs.existsSync(imagePath)) {
      const fileBuffer = fs.readFileSync(imagePath);
      
      return new NextResponse(fileBuffer, {
        headers: {
          'Content-Type': 'image/png',
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      });
    } else {
      return new NextResponse('Image not found', { status: 404 });
    }
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
