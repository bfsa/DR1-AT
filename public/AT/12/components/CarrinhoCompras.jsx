import React, { useState } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Container
} from '@mui/material';
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';

const itensIniciais = [
  { id: 1, nome: 'Camiseta', preco: 29.99, quantidade: 1 },
  { id: 2, nome: 'Calça Jeans', preco: 79.99, quantidade: 1 },
  { id: 3, nome: 'Tênis', preco: 129.99, quantidade: 1 },
  { id: 4, nome: 'Boné', preco: 19.99, quantidade: 1 },
];

const CarrinhoCompras = () => {
  const [itens, setItens] = useState(itensIniciais);

  const atualizarQuantidade = (id, delta) => {
    setItens(itens.map(item => 
      item.id === id ? { ...item, quantidade: Math.max(0, item.quantidade + delta) } : item
    ));
  };

  const calcularTotalItem = (preco, quantidade) => (preco * quantidade).toFixed(2);
  
  const calcularTotalCompra = () => 
    itens.reduce((total, item) => total + item.preco * item.quantidade, 0).toFixed(2);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center" mb={4}>
        INFNET Shopping
      </Typography>
      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell align="right">Preço Unitário</TableCell>
              <TableCell align="center">Quantidade</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {itens.map((item) => (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                  {item.nome}
                </TableCell>
                <TableCell align="right">R$ {item.preco.toFixed(2)}</TableCell>
                <TableCell align="center">
                  <Box display="flex" justifyContent="center" alignItems="center">
                    <IconButton 
                      size="small" 
                      onClick={() => atualizarQuantidade(item.id, -1)}
                      disabled={item.quantidade === 0}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography sx={{ mx: 2 }}>
                      {item.quantidade}
                    </Typography>
                    <IconButton 
                      size="small" 
                      onClick={() => atualizarQuantidade(item.id, 1)}
                    >
                      <AddIcon />
                    </IconButton>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  R$ {calcularTotalItem(item.preco, item.quantidade)}
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={3} align="right">Total da Compra:</TableCell>
              <TableCell align="right">
                <strong>R$ {calcularTotalCompra()}</strong>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default CarrinhoCompras;