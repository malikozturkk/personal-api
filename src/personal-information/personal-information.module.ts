import { Module } from '@nestjs/common';
import { PersonalInformationService } from './personal-information.service';
import { PersonalInformationController } from './personal-information.controller';

@Module({
    controllers: [PersonalInformationController],
    providers: [PersonalInformationService],
    exports: [PersonalInformationService],
})
export class PersonalInformationModule { }
