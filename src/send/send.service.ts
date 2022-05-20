import { Injectable, Request } from "@nestjs/common"
import { HttpService } from "@nestjs/axios"
import { AxiosResponse } from "axios"
import { Observable, firstValueFrom, map } from "rxjs"

@Injectable()
export class SendService {
	constructor(private readonly http: HttpService) {}
	async send(dto: { dto: string }): Promise<any> {
		try {
			const req = await firstValueFrom(
				this.http
					.get(
						`https://api.telegram.org/bot5093675013:AAG94ZOiuCyr_C3E2XYaReVJffpVnH6Lg0Q/sendMessage?chat_id=-1001586732473&text=${encodeURI(
							dto.dto,
						)}`,
						{ headers: { "Content-Type": "application/json" } },
					)
					.pipe(
						map((res) => res.data),
						map((data) => data),
					),
			)
			return req
		} catch (error) {
			console.log("error", error)
			return error
		}
	}
}
