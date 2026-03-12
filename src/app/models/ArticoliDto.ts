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
  ingredienti: {
    codArt: string, 
    info: string
  };
  iva: {
    idIva: string;
    aliquota: string;
    descrizione: string;
  };
  famAssort: {
    id: string;
    descrizione: string;
  };
}