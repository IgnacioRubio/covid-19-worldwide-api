import {Entity, model, property} from '@loopback/repository';

@model()
export class CaseDeath extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  dateRep?: string;

  @property({
    type: 'string',
  })
  day?: string;

  @property({
    type: 'string',
  })
  month?: string;

  @property({
    type: 'string',
  })
  year?: string;

  @property({
    type: 'number',
    required: true,
  })
  cases: number;

  @property({
    type: 'number',
    required: true,
  })
  deaths: number;

  @property({
    type: 'string',
  })
  countriesAndTerritories?: string;

  @property({
    type: 'string',
  })
  geoId?: string;

  @property({
    type: 'string',
  })
  countryterritoryCode?: string;

  @property({
    type: 'string',
  })
  continentExp?: string;


  constructor(data?: Partial<CaseDeath>) {
    super(data);
  }
}

export interface CaseDeathRelations {
  // describe navigational properties here
}

export type CaseDeathWithRelations = CaseDeath & CaseDeathRelations;
