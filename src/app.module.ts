import { Module } from "@nestjs/common"
import { SendModule } from './send/send.module';

@Module({
	imports: [SendModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
