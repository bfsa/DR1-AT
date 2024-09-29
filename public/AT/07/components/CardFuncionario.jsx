import React from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 16px;
  max-width: 350px;
  margin: 20px auto;
`;

const FotoPlaceholder = styled.div`
  background-color: #ddd;
  width: 100%;
  height: 200px;
  margin-bottom: 16px;
`;

const InfoPessoal = styled.div`
  margin-bottom: 16px;
`;

const Nome = styled.h2`
  margin: 0 0 8px 0;
  font-size: 1.5rem;
`;

const Info = styled.p`
  margin: 4px 0;
  font-size: 0.9rem;
  color: #666;
`;

const IconesInteracao = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 16px;
`;

const Icone = styled.a`
  color: #333;
  font-size: 1.5rem;
`;

const TabelaTarefas = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background-color: #f0f0f0;
  padding: 8px;
  text-align: left;
`;

const Td = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

const CheckBox = styled.input`
  margin-right: 8px;
`;

const CardFuncionario = ({ funcionario, tarefas }) => {
  return (
    <Card>
      <FotoPlaceholder />
      <InfoPessoal>
        <Nome>{funcionario.nomeCompleto}</Nome>
        <Info>Data de Nascimento: {funcionario.dataNascimento}</Info>
        <Info>Setor: {funcionario.setor}</Info>
        <Info>Cargo: {funcionario.cargo}</Info>
      </InfoPessoal>
      <IconesInteracao>
        <Icone href={`tel:${funcionario.telefone}`}><FaPhone /></Icone>
        <Icone href={`mailto:${funcionario.email}`}><FaEnvelope /></Icone>
        <Icone href="#"><FaMapMarkerAlt /></Icone>
      </IconesInteracao>
      <TabelaTarefas>
        <thead>
          <tr>
            <Th>Estado</Th>
            <Th>Tarefas</Th>
          </tr>
        </thead>
        <tbody>
          {tarefas.map((tarefa, index) => (
            <tr key={index}>
              <Td>
                <CheckBox type="checkbox" checked={tarefa.concluida} readOnly />
              </Td>
              <Td>{tarefa.nome}</Td>
            </tr>
          ))}
        </tbody>
      </TabelaTarefas>
    </Card>
  );
};

export default CardFuncionario;