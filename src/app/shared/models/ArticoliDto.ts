import { IIngredientiDto } from './ingredienti-dto'; 
import { IIvaDto } from './iva-dto';
import { IFamAssortDto } from './fam-assort-dto';


export interface IArticoliDto {
  codArt: string;
  descrizione: string;  
  um: string;
  codStat: string;
  pzCart: number;       
  pesoNetto: number;    
  idStatoArt: string;
  dataCreaz: Date | string; // Spesso i JSON inviano le date come stringhe ISO
  barcode: string;
  ingredienti: IIngredientiDto[]; // Il Set Java diventa un Array [] in TS
  iva: IIvaDto;                   // Riferimento a un'altra interfaccia
  famAssort: IFamAssortDto;       // Riferimento a un'altra interfaccia
}