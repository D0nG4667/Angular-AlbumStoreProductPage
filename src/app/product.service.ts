import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

@Injectable()
export class ProductService {
  private _albumurl = "../assets/album.json";
  constructor(private _http: Http) {}
}
