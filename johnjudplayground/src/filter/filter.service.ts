import { Injectable} from '@nestjs/common';
import {Not, Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {ObjectID, ObjectId} from 'mongodb';
import {LessThan} from "typeorm";
import {MoreThan} from "typeorm";
import { petinfo } from 'src/petInfo/petInfo.entity';
import {Equal} from "typeorm";
import {Between} from "typeorm";
import { Filterinput } from './filter.input';
import {User} from 'src/user/user.entity';


@Injectable()
export class filterService{
    constructor(
        @InjectRepository(petinfo)
        private petInfoRepository: Repository<petinfo>
    ) {}

    async findPetTypedog(userid:string): Promise<petinfo[]>{
        return this.petInfoRepository.find({where:{$and:[{Type:"dog"},{UserId:{$not:{$eq:userid}}}]}})
    }

    async findPetTypecat(userid:string): Promise<petinfo[]>{
        return this.petInfoRepository.find({where:{$and:[{Type:"cat"},{UserId:{$not:{$eq:userid}}}]}})
    }

    async findPetOther(userid:string): Promise<petinfo[]>{
        return this.petInfoRepository.find({where:{$and:[{Type:{$not:{$eq:"dog"}}},{Type:{$not:{$eq:"cat"}}},{UserId:{$not:{$eq:userid}}}]}});
    }

    async findByType(type:Filterinput): Promise<petinfo[]>{
        return this.petInfoRepository.find({where:{Type:type}});
    }

    async findByHeight(MinHeight:Filterinput,MaxHeight:Filterinput): Promise<petinfo[]>{
        //const {MaxHeight, MinHeight} = Filterinput;
        return this.petInfoRepository.find({
            where:{
                PetHeight: Between(MinHeight,MaxHeight)
            }
        })
    }
    

}