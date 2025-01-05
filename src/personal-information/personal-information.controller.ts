import { Controller, Get, Query } from '@nestjs/common';
import { PersonalInformationService } from './personal-information.service';

@Controller('personal-information')
export class PersonalInformationController {
    constructor(private readonly personalInformationService: PersonalInformationService) { }

    @Get()
    getAll(@Query('page') page: number = 1, @Query('limit') limit: number = 8) {
        return this.personalInformationService.findAllInfos(page, limit);
    }
}
