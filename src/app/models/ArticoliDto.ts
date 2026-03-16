export class IArticoliDto {
  codArt: string = '';
  descrizione: string = '';  
  um: string = 'pz';
  codStat: string = 'A';
  pzCart: number = 0;       
  pesoNetto: number = 0.000;    
  idStatoArt: string = '';
  dataCreaz: Date | string = new Date().toISOString().split('T')[0];
  barcode: string = '';
  ingredienti= {
    codArt : 'INF001', 
    info : 'Origine: Italia - Cat. I'
  };
  iva = {
    idIva : '3',
    aliquota : '22',
    descrizione : 'IVA 22%'
  };
  famAssort = {
    id: '1',
    descrizione: 'ALIMENTARI'
  };
}