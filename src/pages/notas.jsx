import { useEffect, useState } from "react";
import { CadastroNotas } from "../components/cadastro-notas";
import { ListaNotas } from "../components/lista-notas";
import "./style.css";

export const Notas = () => {
  const [notas, setNotas] = useState([]);

  const salvarNota = (titulo, descricao) => {
    const notasNew = [
      ...notas,
      {
        titulo,
        descricao,
      },
    ];
    setNotas(notasNew);
    localStorage.setItem("notas", JSON.stringify(notasNew));
  };

  const removerNota = (index) => {
    let notasNew = notas;
    notasNew.splice(index, 1);
    setNotas([...notasNew]);
    localStorage.setItem("notas", JSON.stringify(notasNew));
  };

  useEffect(() => {
    setNotas(JSON.parse(localStorage.getItem("notas")) ?? []);
  }, []);

  return (
    <div className="notas-page">
      <CadastroNotas callbackSalvarNotas={salvarNota} />
      <ListaNotas notas={notas} callbackRemoverNota={removerNota} />
    </div>
  );
};
