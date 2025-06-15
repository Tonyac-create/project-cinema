import { query } from '../lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await query(
      'SELECT f.id, f.title, f.director, f.year, f.theme, t.theme as theme_name FROM films f LEFT JOIN theme t ON f.id_theme = t.id ORDER BY f.title',
      []
    );
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Error fetching films:', error);
    return NextResponse.json({ error: 'Failed to fetch films' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { title, director, year, theme } = await request.json();
    
    const result = await query(
      'INSERT INTO films (title, director, year, id_theme) VALUES ($1, $2, $3, $4) RETURNING *',
      [title, director, year, theme]
    );
    
    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Error creating film:', error);
    return NextResponse.json({ error: 'Failed to create film' }, { status: 500 });
  }
}