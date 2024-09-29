import React, { useState, useEffect } from 'react';
import './ListaCompras.css';

const itensIniciais = [
  { id: 1, nome: 'Notebook', preco: 2500, quantidade: 1 },
  { id: 2, nome: 'Smartphone', preco: 1200, quantidade: 2 },
  { id: 3, nome: 'Fones de Ouvido', preco: 150, quantidade: 3 },
  { id: 4, nome: 'Mouse sem Fio', preco: 80, quantidade: 1 },
];

const ListaCompras = () => {
  const [itens, setItens] = useState(itensIniciais);
  const [temaEscuro, setTemaEscuro] = useState(false);

  useEffect(() => {
    document.body.className = temaEscuro ? 'tema-escuro' : '';
  }, [temaEscuro]);

  const atualizarQuantidade = (id, novaQuantidade) => {
    setItens(itens.map(item => 
      item.id === id ? { ...item, quantidade: Math.max(0, novaQuantidade) } : item
    ));
  };

  const calcularTotal = () => {
    return itens.reduce((total, item) => total + item.preco * item.quantidade, 0);
  };

  return (
    <div className={`container ${temaEscuro ? 'tema-escuro' : ''}`}>
      <h1>Lista de Compras</h1>
      <button onClick={() => setTemaEscuro(!temaEscuro)} className="botao-tema">
        {temaEscuro ? 'Modo Claro' : 'Modo Escuro'}
      </button>
      <ul className="lista-itens">
        {itens.map(item => (
          <li key={item.id} className="item">
            <div className="item-info">
              <span className="item-nome">{item.nome}</span>
              <span className="item-preco">R$ {item.preco.toFixed(2)}</span>
            </div>
            <div className="item-quantidade">
              <button onClick={() => atualizarQuantidade(item.id, item.quantidade - 1)}>-</button>
              <span>{item.quantidade}</span>
              <button onClick={() => atualizarQuantidade(item.id, item.quantidade + 1)}>+</button>
            </div>
            <div className="item-total">
              Total: R$ {(item.preco * item.quantidade).toFixed(2)}
            </div>
          </li>
        ))}
      </ul>
      <div className="total-compra">
        Total da Compra: R$ {calcularTotal().toFixed(2)}
      </div>
    </div>
  );
};

export default ListaCompras;