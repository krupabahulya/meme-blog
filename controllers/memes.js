import pool from '../db/pg.js';

export const getAllMemes = async (req, res) => {
  try {
    const { rows: memes } = await pool.query('SELECT * FROM memes;');
    res.json(memes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};