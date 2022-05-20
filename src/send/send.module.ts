import { Module } from "@nestjs/common"
import { HttpModule } from "@nestjs/axios"
import { SendService } from "./send.service"
import { SendController } from "./send.controller"

@Module({
	providers: [SendService],
	imports: [HttpModule],
	controllers: [SendController],
})
export class SendModule {}
