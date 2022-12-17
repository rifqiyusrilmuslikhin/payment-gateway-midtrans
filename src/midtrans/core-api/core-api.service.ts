import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CoreApiService {
  static async get(url: string, serverKey: string, dataHash: any) {
    return this.remoteCall(url, serverKey, dataHash, false);
  }

  static async post(url: string, serverKey: string, dataHash: any) {
    return this.remoteCall(url, serverKey, dataHash, true);
  }

  static async remoteCall(
    url: string,
    serverKey: string,
    dataHash: any,
    post = true,
  ) {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Basic ${Buffer.from(`${serverKey}:`).toString('base64')}`,
    };
    const body = JSON.stringify(dataHash);
    let result;
    if (post) {
      result = axios
        .post(url, body, {
          headers,
        })
        .then((res) => res.data)
        .catch((e) => console.log(e));
    } else {
      result = axios
        .get(url, {
          headers,
        })
        .then((res) => res.data)
        .catch((e) => console.log(e));
    }

    return result;
  }
}
