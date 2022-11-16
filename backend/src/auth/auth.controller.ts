import {Body, Controller, Get, Global, Post, Request, UseGuards} from '@nestjs/common';
import {CreateUserDto} from "../user/dto/create-user.dto";
import {AuthService} from "./auth.service";
import {JwtGuard} from "./guard/jwt-auth.guard";
import {LocalAuthGuard} from './guard/local-auth.guard'
import {Me} from "./guard/me.guard";


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }

    @Post('login')
    @UseGuards(LocalAuthGuard)
    login(@Request() req) {
        return this.authService.login(req.user)
    }


    @Get('profile')
    @UseGuards(JwtGuard)
    profile(@Me() me) {
        return me
    }

    @Post('register')
    register(@Body() createUserDto: CreateUserDto){
        return this.authService.registerUser(createUserDto)
    }
}
