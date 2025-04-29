import express from "express";
import { AvaliacaoModel } from "../models/avaliacao.model";

const router = express.Router();

// GET /avaliacao → listar
router.get("/", async (req, res) => {
  try {
    const avaliacoes = await AvaliacaoModel.findAll();
    res.status(200).json(avaliacoes);
  } catch (error: any) {
    res.status(500).json({ erro: error.message || "Erro ao buscar avaliações" });
  }
});

// POST /avaliacao → criar
router.post("/", async (req, res) => {
  try {
    const nova = await AvaliacaoModel.create(req.body);
    res.status(201).json(nova);
  } catch (error: any) {
    res.status(400).json({ erro: error.message || "Erro ao criar avaliação" });
  }
});

// PUT /avaliacao/:id → atualizar (sem async/await)
router.put("/:id", (req, res) => {
  const { id } = req.params;

  AvaliacaoModel.findByPk(id)
    .then(avaliacao => {
      if (!avaliacao) return res.status(404).json({ erro: "Avaliação não encontrada" });

      return avaliacao.update(req.body)
        .then(() => res.status(200).json({ mensagem: "Avaliação atualizada com sucesso", avaliacao }));
    })
    .catch(error => res.status(500).json({ erro: error.message || "Erro ao atualizar avaliação" }));
});

// DELETE /avaliacao/:id → deletar (sem async/await)
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  AvaliacaoModel.findByPk(id)
    .then(avaliacao => {
      if (!avaliacao) return res.status(404).json({ erro: "Avaliação não encontrada" });

      return avaliacao.destroy()
        .then(() => res.status(200).json({ mensagem: "Avaliação deletada com sucesso" }));
    })
    .catch(error => res.status(500).json({ erro: error.message || "Erro ao deletar avaliação" }));
});

export default router;
