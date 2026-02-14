import type { Transaction, PaymentMethod } from './types';

export const TRANSACTIONS: Transaction[] = [
  {
    id: '#TRX-48293021',
    name: 'Virement Sortant - SEPA',
    date: '04 Oct, 2024',
    type: 'Retrait',
    amount: -1200.00,
    status: 'En cours',
  },
  {
    id: '#TRX-48293019',
    name: 'Gains Campagne Nike',
    date: '02 Oct, 2024',
    type: 'Revenus',
    amount: 450.25,
    status: 'Terminé',
  },
  {
    id: '#TRX-48293015',
    name: 'Bonus Programme Premium',
    date: '30 Sept, 2024',
    type: 'Bonus',
    amount: 100.00,
    status: 'Terminé',
  },
  {
    id: '#TRX-48292998',
    name: 'Retrait Vers PayPal',
    date: '25 Sept, 2024',
    type: 'Retrait',
    amount: -2500.00,
    status: 'Terminé',
  },
];

export const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: '1',
    name: 'Compte Bancaire (Principal)',
    details: 'FR76 **** **** **** 4567 • Crédit Agricole',
    isDefault: true,
    type: 'bank',
  },
  {
    id: '2',
    name: 'Compte PayPal',
    details: 'alex.crea****@email.com',
    isDefault: false,
    type: 'wallet',
  },
];
