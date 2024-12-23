import { Module } from '@nestjs/common';
import { PersonalInformationController } from './personal-information.controller';

@Module({
    controllers: [PersonalInformationController],
    providers: [],
})
export class PersonalInformationModule { }
