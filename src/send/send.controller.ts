import { Body, Controller, Post, Req } from "@nestjs/common"
import { Request } from "express"
import { SendService } from "./send.service"

@Controller("send")
export class SendController {
	constructor(private sendService: SendService) {}
	@Post()
	send(@Body() dto: { dto: string }, @Req() req: Request) {
		if (req.baseUrl !== "https://happypc.pro") {
			return "Нет прав!"
		}
		return this.sendService.send(dto)
	}
}
