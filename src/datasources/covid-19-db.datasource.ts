import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'covid19db',
  connector: 'mongodb',
  url: '',
  host: 'localhost',
  port: 27017,
  user: 'covid19',
  password: 'covid19',
  database: 'covid19db',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class Covid19DbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'covid19db';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.covid19db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
