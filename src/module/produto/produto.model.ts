import knex from '../../service/knex';
import { Produto } from './produto.d';
import { ProdutoCreate } from './produto.d';


export const getAll = async () => {
  return knex('produtos').select();
};

export const store = async (params: any) => {
  return knex('produtos').insert(params);
};

