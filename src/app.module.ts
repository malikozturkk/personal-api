import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonalInformationModule } from './personal-information/personal-information.module';

@Module({
  imports: [PersonalInformationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
