import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Covid19DbDataSource} from '../datasources';
import {CaseDeath, CaseDeathRelations} from '../models';

export class CaseDeathRepository extends DefaultCrudRepository<
  CaseDeath,
  typeof CaseDeath.prototype.id,
  CaseDeathRelations
> {
  constructor(
    @inject('datasources.covid19db') dataSource: Covid19DbDataSource,
  ) {
    super(CaseDeath, dataSource);
  }
}
