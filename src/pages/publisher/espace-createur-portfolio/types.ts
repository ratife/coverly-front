
export type TransactionType = 'Retrait' | 'Revenus' | 'Bonus';
export type TransactionStatus = 'En cours' | 'Terminé' | 'Échoué';

export interface Transaction {
  id: string;
  name: string;
  date: string;
  type: TransactionType;
  amount: number;
  status: TransactionStatus;
}

export interface PaymentMethod {
  id: string;
  name: string;
  details: string;
  isDefault: boolean;
  type: 'bank' | 'wallet';
}
