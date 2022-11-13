import { CardNotas } from "../card-nota";
import "./style.css";

export const ListaNotas = (props) => {
  return (
    <div className="lista-notas">
      {props.notas.map((nota, index) => (
        <CardNotas
          key={index}
          index={index}
          titulo={nota.titulo}
          descricao={nota.descricao}
          callbackRemoverNota={props.callbackRemoverNota}
        />
      ))}
    </div>
  );
};
