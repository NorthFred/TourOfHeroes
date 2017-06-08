import { Injectable } from '@angular/core';

@Injectable()
export class Logger {

  logs: string[] = [];   // Capture logs to array

  log(message:string) {
    this.logs.push(message);
    console.log(message);
  }
}
