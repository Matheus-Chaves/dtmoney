import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps { //É necessário colocar isso para que o TS entenda que o componente exportado abaixo possui children
 children: ReactNode; //ReactNode é qualquer coisa do react que seja válida
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData //Fazemos isso para corrigir um 'bug' do typescript
); //Inicia o contexto, indicando que será um array vazio de Transaction

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput, //Todas os dados dos inputs do modal
      createdAt: new Date() //Inserindo a data atual, pois não existe esse campo no modal
    });
    const { transaction } = response.data;

    setTransactions([
      ...transactions,
      transaction
    ])
  }

  return ( //Agora o TransactionsContext é criado recebendo as transações e a função. Elas poderão ser acessadas em toda a aplicação, pois ficam em volta do componente App
    <TransactionsContext.Provider value={{transactions, createTransaction}}> 
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}

