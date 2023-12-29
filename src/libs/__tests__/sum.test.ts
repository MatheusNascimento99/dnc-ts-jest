import { Sum } from "../sum";

describe("Unit - libs suite", () => {
  describe("sum suite", () => {
    it("should return true", () => {
      //informo o que deverá retornar
      expect(true).toBe(true); //em expext coloco o parametro do teste e em toBe o resultado. expected === assets
    });
  });

  it("deverá retornar 4", () => {
    expect(Sum(2, 2)).toEqual(4); //experando que a função (Sum) de somar, retorne 4
  });

  it("deverá escrever Lua", () => {
    expect("L" + "u" + "a").toEqual("Lua"); //experando que a função (Sum) de somar, retorne 4
  });

  it("Não deverá escrever Brasil", () => {
    expect("L" + "u" + "a").not.toEqual("Brasil"); //experando que a função (Sum) de somar, retorne 4
  });

});
