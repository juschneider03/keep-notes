import "./style.css";

export const CardNotas = (props) => {
  return (
    <div
      className="card-nota"
      onClick={() => props.callbackRemoverNota(props.index)}>
      <span>{props.titulo}</span>
      <span>{props.descricao}</span>
    </div>
  );
};
