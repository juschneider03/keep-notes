import { useState } from "react";
import "./style.css";

export const CadastroNotas = (props) => {
  const [titulo, setTitulo] = useState();
  const [descricao, setDescricao] = useState();

  const salvarNota = (event) => {
    event.preventDefault();
    props.callbackSalvarNotas(titulo, descricao);
    setTitulo("");
    setDescricao("");
  };

  return (
    <form className="card-cadastro-notas" onSubmit={salvarNota}>
      <div>
        <label htmlFor="titulo">Titulo</label>
        <input
          value={titulo}
          type="text"
          name="titulo"
          id="titulo"
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="descricao">Descrição</label>
        <textarea
          value={descricao}
          name="descricao"
          id="descricao"
          cols="25"
          rows="5 "
          onChange={(e) => setDescricao(e.target.value)}
          required
        />
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
};
