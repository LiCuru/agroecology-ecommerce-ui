// pages/api/data.ts
import { NextApiRequest, NextApiResponse } from 'next';
import mysql, { ResultSetHeader } from 'mysql2/promise';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check if the request method is GET
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Create a connection to the MySQL database
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    const {producer, category} = req.query
    debugger;
    console.log(req.query)

    let sqlQuery = ''

    if (producer != '' && category != ''){
      sqlQuery = `select produtos.id, nome, categoria, produtor, preco_mercado, preco_lojinha, preco, imagem from produtos inner join listas_itens on produtos.id = listas_itens.id where listas_itens.ativo = 1 and substring(nome, 1, 3) not like 'zzz' and produtos.produtor = "${producer}" and categoria = "${category}";`
    } else if (producer != ''  && category == '') {
      sqlQuery = `select produtos.id, nome, categoria, produtor, preco_mercado, preco_lojinha, preco, imagem from produtos inner join listas_itens on produtos.id = listas_itens.id where listas_itens.ativo = 1 and substring(nome, 1, 3) not like 'zzz' and produtos.produtor = "${producer}";`;
    } else if (producer == ''  && category != '') {
      sqlQuery = `select produtos.id, nome, categoria, produtor, preco_mercado, preco_lojinha, preco, imagem from produtos inner join listas_itens on produtos.id = listas_itens.id where listas_itens.ativo = 1 and substring(nome, 1, 3) not like 'zzz' and categoria = "${category}";`
    } else if (producer == '' && category == '') {
      sqlQuery = `select produtos.id, nome, categoria, produtor, preco_mercado, preco_lojinha, preco, imagem from produtos inner join listas_itens on produtos.id = listas_itens.id where listas_itens.ativo = 1 and substring(nome, 1, 3) not like 'zzz';`
    }

    // Query the database
    //`select nome, categoria, produtor, unidade, preco_mercado, preco_lojinha, preco_pre, imagem from produtos inner join listas_itens on produtos.id = listas_itens.id where listas_itens.ativo = 1 and produtos.produtor = "${producer}" and categoria = "${category}";`
    const [rows] = await connection.execute<ResultSetHeader[]>(sqlQuery);

    // Close the connection
    await connection.end();

    // Return the data as JSON
    res.status(200).json(rows);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ message: error });
  }
}