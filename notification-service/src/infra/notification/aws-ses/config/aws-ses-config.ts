import { ACCESS_KEY, SECRET_KEY, REGION } from '../../../../env';
import { Module } from '@nestjs/common';
import * as AWS from 'aws-sdk';

@Module({
  providers: [
    {
      provide: 'AWS.SES',
      useValue: new AWS.SES({
        region: REGION,
        credentials: {
          accessKeyId: ACCESS_KEY,
          secretAccessKey: SECRET_KEY,
        },
      }),
    },
  ],
  exports: ['AWS.SES'],
})
export class AwsSesModule {}
