import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { rand } from 'src/core/helpers/core.helper';
import { ElasticsearchService } from 'src/shared/elasticsearch/elasticsearch.service';

@Injectable()
export class ElasticInterceptor implements NestInterceptor {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const createdAt = moment().format();
    const { url, method, params, query, headers, body } = req;

    const logData = {
      requestId: req['requestId'],
      createdAt: createdAt,
      headers: JSON.stringify(headers),
      url,
      method,
      params: JSON.stringify(params),
      query: JSON.stringify(query),
      request: JSON.stringify(body),
      response: '',
      status: '',
    };
    return next.handle().pipe(
      tap((data) => {
        data['requestId'] = req['requestId'];
        logData.status = 'success';
        logData.response = JSON.stringify(data);
        this.elasticsearchService.insertIndex(logData);
      }),
      catchError((data) => {
        data['requestId'] = req['requestId'];
        logData.status = 'error';
        logData.response = JSON.stringify(data);
        this.elasticsearchService.insertIndex(logData);
        throw data;
      }),
    );
  }
}
