import { AvaliacaoModel } from "../models/avaliacao.model";
import { IAvaliacao } from "../interfaces/Iavaliacao";

// Listar todas as avaliações
export const listAll = async (): Promise<IAvaliacao[]> => {
  return await AvaliacaoModel.findAll();
};

// Criar nova avaliação
export const create = async (dados: IAvaliacao): Promise<IAvaliacao> => {
  const nova = await AvaliacaoModel.create(dados);
  return nova;
};

// Atualizar avaliação
export const update = async (id: number, dados: IAvaliacao): Promise<IAvaliacao | null> => {
  const avaliacao = await AvaliacaoModel.findByPk(id);
  if (!avaliacao) return null;

  await avaliacao.update(dados);
  return avaliacao;
};

// Remover avaliação
export const remove = async (id: number): Promise<boolean> => {
  const avaliacao = await AvaliacaoModel.findByPk(id);
  if (!avaliacao) return false;

  await avaliacao.destroy();
  return true;
};
