export interface IArticoliDto {
  codArt: string;
  descrizione: string;  
  um: string;
  codStat: string;
  pzCart: number;       
  pesoNetto: number;    
  idStatoArt: string;
  dataCreaz: Date | string;
  barcode: string;
}