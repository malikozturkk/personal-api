
import { Controller, Get } from '@nestjs/common';

@Controller('personal-information')
export class PersonalInformationController {
    @Get()
    getAll() {
        return {
            name: "Malik Öztürk",
        }
    }
}
