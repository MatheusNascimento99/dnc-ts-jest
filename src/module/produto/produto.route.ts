import type {Request, Response} from 'express';
import * as express from 'express';
import * as produtoModel from './produto.model';
import { ultimoValor } from '../../libs/tratamentos';


const router = express.Router();

router.get('/', async (_, res ) => {
  const data = await produtoModel.getAll();
  return res.status(200).json({ data });
});

router.post('/', async (req, res) => {
  if(!req.body.nome || req.body.preco){
      return res.status(400).json({msg: 'Nome e Preço são obrigatórios!'})
  }
  const data = await produtoModel.store(req.body);
  return res.status(201).json({ data });
});

router.post('/ultimo-valor',async (req, res) => {
    const response = ultimoValor(req.body);
    return res.status(200).json(response)
})

router.get('/teste', (_,res) => {
    return res.status(200).send('FUNCIONOU')
})


export default router;
