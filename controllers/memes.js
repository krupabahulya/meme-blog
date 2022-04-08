import pool from '../db/pg.js';

export const getAllMemes = async (req, res) => {
  try {
    const { rows: memes } = await pool.query('SELECT * FROM memes;');
    res.json(memes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createMeme = async (req, res) => {
    try {
      const {
        body: { title, author, category, imageurl }
      } = req;
      if (!title || !author || !category || !imageurl ) {
        throw new Error('Invalid body');
      }
      const query =
        'INSERT INTO memes (title, author, category, imageurl) VALUES($1, $2, $3, $4) RETURNING *';
      const values = [title, author, category, imageurl];
      const {
        rows: [newMeme]
      } = await pool.query(query, values);
      res.status(201).json(newMeme);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  export const getSingleMeme = async (req, res) => {
    try {
      const {
        params: { id }
      } = req;
      const {
        rowCount,
        rows: [Meme]
      } = await pool.query('SELECT * FROM Memes WHERE id = $1', [id]);
      if (!rowCount) return res.status(404).json({ error: `Meme with id of ${id} not found` });
  
      res.json(Meme);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };



export const updateMeme = async (req, res) => {
    try {
      const {
        params: { id },
        body: { title, author, category, imageurl }
      } = req;
      const { rowCount: found } = await pool.query('SELECT * FROM Memes WHERE id = $1', [id]);
      if (!found) {
        throw new Error(`The Meme you are trying to update doesn't exist`);
      }
      if (!title || !author || !category || !imageurl) {
        throw new Error('Invalid body');
      }
      const {
        rows: [Meme]
      } = await pool.query(
        'UPDATE Memes SET title = $2, author = $3, category = $4, imageurl = $5 WHERE id = $1 RETURNING *',
        [id, title, author, category, imageurl]
      );
      res.json(Meme);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  export const deleteMeme = async (req, res) => {
    try {
      const {
        params: { id }
      } = req;
      const { rowCount } = await pool.query('DELETE FROM Memes WHERE id = $1 RETURNING *', [id]);
      if (rowCount) {
        return res.json({ msg: `Meme with id of ${id} was deleted` });
      } else {
        throw new Error(`Meme with id of ${id} doesn't even exist`);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
      x;
    }
  };