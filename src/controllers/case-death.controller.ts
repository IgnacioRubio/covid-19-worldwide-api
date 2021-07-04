import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {CaseDeath} from '../models';
import {CaseDeathRepository} from '../repositories';

export class CaseDeathController {
  constructor(
    @repository(CaseDeathRepository)
    public caseDeathRepository : CaseDeathRepository,
  ) {}

  @post('/cases-deaths')
  @response(200, {
    description: 'CaseDeath model instance',
    content: {'application/json': {schema: getModelSchemaRef(CaseDeath)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CaseDeath, {
            title: 'NewCaseDeath',
            exclude: ['id'],
          }),
        },
      },
    })
    caseDeath: Omit<CaseDeath, 'id'>,
  ): Promise<CaseDeath> {
    return this.caseDeathRepository.create(caseDeath);
  }

  @get('/cases-deaths/count')
  @response(200, {
    description: 'CaseDeath model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(CaseDeath) where?: Where<CaseDeath>,
  ): Promise<Count> {
    return this.caseDeathRepository.count(where);
  }

  @get('/cases-deaths')
  @response(200, {
    description: 'Array of CaseDeath model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(CaseDeath, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(CaseDeath) filter?: Filter<CaseDeath>,
  ): Promise<CaseDeath[]> {
    return this.caseDeathRepository.find(filter);
  }

  @patch('/cases-deaths')
  @response(200, {
    description: 'CaseDeath PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CaseDeath, {partial: true}),
        },
      },
    })
    caseDeath: CaseDeath,
    @param.where(CaseDeath) where?: Where<CaseDeath>,
  ): Promise<Count> {
    return this.caseDeathRepository.updateAll(caseDeath, where);
  }

  @get('/cases-deaths/{id}')
  @response(200, {
    description: 'CaseDeath model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(CaseDeath, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(CaseDeath, {exclude: 'where'}) filter?: FilterExcludingWhere<CaseDeath>
  ): Promise<CaseDeath> {
    return this.caseDeathRepository.findById(id, filter);
  }

  @patch('/cases-deaths/{id}')
  @response(204, {
    description: 'CaseDeath PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CaseDeath, {partial: true}),
        },
      },
    })
    caseDeath: CaseDeath,
  ): Promise<void> {
    await this.caseDeathRepository.updateById(id, caseDeath);
  }

  @put('/cases-deaths/{id}')
  @response(204, {
    description: 'CaseDeath PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() caseDeath: CaseDeath,
  ): Promise<void> {
    await this.caseDeathRepository.replaceById(id, caseDeath);
  }

  @del('/cases-deaths/{id}')
  @response(204, {
    description: 'CaseDeath DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.caseDeathRepository.deleteById(id);
  }
}
