import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './providers/user.services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { AuthModule } from 'src/auth/auth.module';
import { CreateUserProvider } from './providers/create-user.provider';
import { FindOneByEmail } from './providers/find-one-by-email';
import { CreateManyUser } from './providers/createManyUser.Provider';
import { CreateUserBookProvider } from './providers/createUserWithBook';
import { Tweet } from 'src/tweets/dto/tweet.entity';
import { TweetModule } from 'src/tweets/dto/tweet.module';


@Module({
  imports: [
    TypeOrmModule.forFeature([User,Tweet]),
    forwardRef(() => AuthModule),
  ],
  controllers: [UsersController],
  providers: [UserService,
     CreateUserProvider,
      FindOneByEmail,
      CreateManyUser,
      CreateUserBookProvider,
    
  ],
  exports: [TypeOrmModule, UserService],
})
export class UsersModule {}