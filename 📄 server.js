import express from "express";
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("🎉 Aplicação Node rodando no CPS1! Tudo OK!");
});

// linha OBRIGATÓRIA para que o CPS1 detecte healthcheck
app.get("/healthz", (req, res) => res.send("ok"));

app.listen(port, () => {
  console.log(`🔥 Servidor rodando na porta ${port}`);
});
