import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import axios, { AxiosResponse } from 'axios';


@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) { }

  getHello(): string {
    return 'Hello World!';
  }

  async findAll() {
    return await axios.get("http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10&callback=fn").then(res => {
      console.log(typeof (res.data));

      return res.data
    })
  }

  async findMap() {
    return await axios.get("https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5&callback=jQuery34102581268431257997_1582545445186&_=1582545445187").then(res => { return res.data })

  }

  async getWeather() {
    const url = `http://api.map.baidu.com/weather/v1/?district_id=510100&data_type=all&ak=C8mGzDMxKjmCYGAM76VG1IuGmndNCXui&output=json/xml`
    return axios.get(url)
  }

}
