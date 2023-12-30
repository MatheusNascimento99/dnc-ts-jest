import * as request from "supertest";

describe('Int - Produto Suite', () => {
  it("##GET /produto", async () => {
    const response = await request("http://localhost:8080").get("/produto");

    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/); //* Paraverificar se encontrar no headers o retorno da palavra json
    expect(response.body.data).toHaveLength(0);
  });

  it("##POST /produto valores errados", async () => {
    const response = await request("http://localhost:8080")
      .post("/produto")
      .send({
        nome: "matheus",
        preco: "39",
      });

    expect(response.status).toBe(400);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body.msg).toEqual('Nome e Preço são obrigatórios!');
  });
});
