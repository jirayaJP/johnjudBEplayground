import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './user/user.entity';
import { petinfo } from './petInfo/petInfo.entity'; 
import { noti } from './notification/notification.entity'

import { UserModule } from './user/user.module';
import { SignupModule } from './signup/signup.module';
import { AuthModule } from './auth/auth.module';
import { petInfoModule } from './petInfo/petInfo.module'
import { notiModule } from './notification/notification.module'
import {filterModule} from './filter/filter.module'
import Chatroom from './Chat/Room/chatroom.entity';
import Chat from './Chat/Message/chat.entity';
import { ChatModule } from './Chat/Message/chat.module';
import { ChatroomModule } from './Chat/Room/chatroom.module';
import Chatnoti from './Chat/Chatnotification/chatnotification.entity';
import {bookmark} from './Bookmark/Bookmark.entity';
import { BookmarkModule } from './Bookmark/Bookmark.module';

require('dotenv').config()

@Module({
  imports: [
    TypeOrmModule.forRoot({
      
      /*
      type: 'mongodb',  
      host: 'localhost',
      database: 'JJdatabase',
      entities: [ User, petinfo, noti],
      synchronize: true,
      */
      
      
      type: 'mongodb',
      url: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CLUSTER}`,
      useNewUrlParser: true,
      synchronize: true,
      logging: true,
      entities: [User, petinfo, noti, Chatroom, Chat ,Chatnoti,bookmark]
      

    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    UserModule,
    SignupModule,
    AuthModule,
    petInfoModule,
    notiModule,
    filterModule,
    ChatModule,
    ChatroomModule,
    BookmarkModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
