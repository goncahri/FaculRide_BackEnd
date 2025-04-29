// Importação da biblioteca express
import express from "express";
import usuarioRoutes from "./src/routes/usuario.routes";
import avaliacaoRoutes from "./src/routes/avaliacao.routes";
import veiculoRoutes from "./src/routes/veiculo.routes";

// Criação da aplicação
const app = express();

// Configura aplicação para receber json no body das requisições
app.use(express.json());

// atribuição das rotas relativas a demo
app.use("/usuario", usuarioRoutes);
app.use("/avaliacao", avaliacaoRoutes);
app.use("/veiculo", veiculoRoutes);

/**
 * Inicia aplicação na Porta 3000
 *  */
app.listen(3000, () => {
  console.log("Servidor executando na Porta 3000");
});
