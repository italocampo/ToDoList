import { useState } from "react";
import "./Todolist.css";
import Icone from "./assets/check.avif";

function Todolist() {
  const [Lista, SetLista] = useState([]);
  const [NovoItem, SetNovoItem] = useState([]);
  function adicionaItem(form) {
    form.preventDefault();
    if (!NovoItem) {
      return;
    }
    SetLista([...Lista, { text: NovoItem, isCompleted: false }]);
    SetNovoItem("");
    document.getElementById("input-entrada").focus();
  }

  function clicou(index) {
    const listaAux = [...Lista];
    listaAux[index].isCompleted = !listaAux[index].isCompleted;
    SetLista(listaAux);
  }

  function deleta(index) {
    const listaAux = [...Lista];
    listaAux.splice(index, 1);
    SetLista(listaAux);
  }

  function deletaTudo(){
    SetLista([])
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <form onSubmit={adicionaItem}>
        <input
          id="input-entrada"
          value={NovoItem}
          onChange={(e) => {
            SetNovoItem(e.target.value);
          }}
          placeholder="Adicione uma tarefa"
          type="text"
        />
        <button className="add" type="submit">
          Adicionar
        </button>
      </form>
      <div className="listaTarefas">
        <div style={{ textAlign: "center" }}>
          {Lista.length < 1 ? (
            <img className="item-central" src={Icone} />
          ) : (
            Lista.map((item, index) => (
              <div
                key={index}
                className={item.isCompleted ? "item completo" : "item"}
              >
                <span
                  onClick={() => {
                    clicou(index);
                  }}
                >
                  {item.text}
                </span>
                <button
                  onClick={() => {
                    deleta(index);
                  }}
                  className="del"
                >
                  Deletar
                </button>
              </div>
            ))
          )}
          {Lista.length > 0 && (
            <button onClick={() =>{deletaTudo()}} className="delete-all">Deletar Todas</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Todolist;
