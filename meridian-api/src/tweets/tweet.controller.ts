import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { TweetService } from "./tweet.service";
import { CreateTweetDto } from "./dto/create-tweet.dto";



@Controller('tweets')
export class TweetController {
    constructor (private readonly tweetService:TweetService) {}


    @Get(':userId')
    public getAllTweet (@Param('userId',ParseIntPipe)userId:number ,) {
        return this.tweetService.getAllTweet(userId)

    }

    @Post('create-tweet')
    public createTweet (@Body() createTweetdto:CreateTweetDto) {
        return this.tweetService.createTweet(createTweetdto)

    }

    @Patch('update-tweet')
    public updateTweet (@Body() updateTweetDto) {
        return this.tweetService.updateTweet(updateTweetDto)
    }

    @Delete(':id')
    public DeleteTweet (@Param('id', ParseIntPipe) id:number) {
        return this.tweetService.DeleteTweet(id)

    }

}