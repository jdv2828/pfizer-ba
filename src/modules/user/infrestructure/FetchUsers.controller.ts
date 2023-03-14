import { Controller, Get } from "@nestjs/common";

@Controller('users')
export class FetchUsersController {
    @Get()
    public getAllUser() {

    }
}