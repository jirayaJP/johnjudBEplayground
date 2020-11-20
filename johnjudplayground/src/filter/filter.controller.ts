import {Body, Controller ,Get, Param, Post} from '@nestjs/common';
import { filterService } from './filter.service';
import { ObjectID } from 'mongodb';
import { petinfo } from 'src/petInfo/petInfo.entity';
import { Filterinput } from './filter.input';
import { MinLength } from 'class-validator';
import {User} from 'src/user/user.entity';

@Controller('filter')
export class filterController{
    constructor(private filterService: filterService){}

    @Get('typedog')
    async findPetTypedog(
        @Param('userid') userid: string
    ): Promise<petinfo[]>{
        return this.filterService.findPetTypedog(userid);
    }

    @Get('typecat')
    async findPetTypecat(
        @Param('userid') userid: string
    ): Promise<petinfo[]>{
        return this.filterService.findPetTypecat(userid);
    }

    @Get('other')
    async findPetOther(
        @Param('userid') userid: string
    ): Promise<petinfo[]>{
        return this.filterService.findPetOther(userid);
    }

    @Get('/others/Type')
    async findByType(
        @Body('type') type:Filterinput
    ): Promise<petinfo[]>{
        return this.filterService.findByType(type);
    }

    @Get('/Height')
    async findByHeight(
        @Body('MinHeight') MinHeigth:Filterinput,
        @Body('MaxHeight') MaxHeigth:Filterinput
    ): Promise<petinfo[]>{
        return this.filterService.findByHeight(MinHeigth,MaxHeigth);
    }
    

}
