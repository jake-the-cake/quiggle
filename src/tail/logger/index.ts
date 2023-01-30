import { Logger } from "./Logger"

export const serverLog = function (text: string): void {
  console.log(text)
}

export { Logger }
console.log('tail > logger')
