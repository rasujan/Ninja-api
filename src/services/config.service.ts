import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiConfigService {
  constructor(private configService: ConfigService) {}

  private getString(key: string, defaultValue?: string): string {
    const value = this.configService.get<string>(key, defaultValue);
    console.log(
      '🚀 ~ file: config.service.ts:10 ~ ApiConfigService ~ getString ~ value:',
      value,
    );

    if (value === undefined) {
      console.warn(`"${key}" is not set in .env file`);
      return;
    }

    return value.toString().replace(/\\n/g, '\n');
  }

  get mongoConfig() {
    const uri = this.getString('MONGO_URI');

    return { uri };
  }
}
