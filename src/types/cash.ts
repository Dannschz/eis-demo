import { UserProfileType } from './userprofile';

export type CashCutMongoose = {
  date: Date;
  seller: string;
  fondoInicial: number;
  entradas: number;
  retiros: number;
  depositos: number;
  saldoFinal: number;
  saldoFinalReal: number;
  diferencia: number;
  retiroPorCorte: number;
};

export type CashCutType = {
  date: Date;
  seller: Omit<UserProfileType, 'password'>;
  fondoInicial: number;
  entradas: number;
  retiros: number;
  depositos: number;
  saldoFinal: number;
  saldoFinalReal: number;
  diferencia: number;
  retiroPorCorte: number;
};
