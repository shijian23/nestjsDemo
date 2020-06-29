import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import axios from 'axios'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/getmovie")
  async getMovie() {
    const a = await this.appService.findAll()
    return a
  }


  @Get("/getmap")
  async getMap() {
    const a = await this.appService.findMap()
    return a
  }

  @Get('/getProducts')
  async getProducts() {
    const res =
      [
        {
          id: '1',
          title: '手机',
          price: '9999',
          describe: '小霸王,王小霸',
          tags: ['大', '王', '霸'],
          count: '无'
        },
        {
          id: '2',
          title: '手机',
          price: '9999',
          describe: '小霸王,王小霸',
          tags: ['大', '王', '霸'],
          count: '无'
        },
        {
          id: '3',
          title: '手机',
          price: '9999',
          describe: '小霸王,王小霸',
          tags: ['大', '王', '霸'],
          count: '无'
        },
        {
          id: '4',
          title: '手机',
          price: '9999',
          describe: '小霸王,王小霸',
          tags: ['大', '王', '霸'],
          count: '无'
        },
        {
          id: '5',
          title: '手机',
          price: '9999',
          describe: '小霸王,王小霸',
          tags: ['大', '王', '霸'],
          count: '无'
        },
        {
          id: '6',
          title: '手机',
          price: '9999',
          describe: '小霸王,王小霸',
          tags: ['大', '王', '霸'],
          count: '无'
        },
        {
          id: '7',
          title: '手机',
          price: '9999',
          describe: '小霸王,王小霸',
          tags: ['大', '王', '霸'],
          count: '无'
        },
        {
          id: '8',
          title: '手机',
          price: '9999',
          describe: '小霸王,王小霸',
          tags: ['大', '王', '霸'],
          count: '无'
        },
        {
          id: '9',
          title: '手机',
          price: '9999',
          describe: '小霸王,王小霸',
          tags: ['大', '王', '霸'],
          count: '无'
        },
        {
          id: '10',
          title: '手机',
          price: '9999',
          describe: '小霸王,王小霸',
          tags: ['大', '王', '霸'],
          count: '无'
        },
        {
          id: '11',
          title: '手机',
          price: '9999',
          describe: '小霸王,王小霸',
          tags: ['大', '王', '霸'],
          count: '无'
        },
        {
          id: '12',
          title: '手机',
          price: '9999',
          describe: '小霸王,王小霸',
          tags: ['大', '王', '霸'],
          count: '无'
        },
        {
          id: '13',
          title: '手机',
          price: '9999',
          describe: '小霸王,王小霸',
          tags: ['大', '王', '霸'],
          count: '无'
        },
        {
          id: '14',
          title: '手机',
          price: '9999',
          describe: '小霸王,王小霸',
          tags: ['大', '王', '霸'],
          count: '无'
        },
        {
          id: '15',
          title: '手机',
          price: '9999',
          describe: '小霸王,王小霸',
          tags: ['大', '王', '霸'],
          count: '无'
        },
        {
          id: '16',
          title: '手机',
          price: '9999',
          describe: '小霸王,王小霸',
          tags: ['大', '王', '霸'],
          count: '无'
        },
        {
          id: '17',
          title: '手机',
          price: '9999',
          describe: '小霸王,王小霸',
          tags: ['大', '王', '霸'],
          count: '无'
        },
        {
          id: '18',
          title: '手机',
          price: '9999',
          describe: '小霸王,王小霸',
          tags: ['大', '王', '霸'],
          count: '无'
        },

      ]
    return res
  }

  @Get("/getWeather")
  async getWeather() {
    const result = await this.appService.getWeather()
    return result.data
  }
}
