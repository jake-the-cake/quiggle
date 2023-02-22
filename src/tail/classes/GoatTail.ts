import * as http from 'http'
// import { isFile } from '../middleware/isFile'
import { isRoute } from '../middleware/isRoute'
import { initRequestObject } from '../request'
import { initResponseObject } from '../response'
import { GoatRouter } from './GoatRouter'
import { PathString } from './StringObject'

export class GoatTail {
  name?: string
  router?: any
  portNumber: number
  hostName: string
  messageText?: string
  server?: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>

  constructor(name: string = ''){
    if (name) this.name = name[0].toUpperCase() + name.slice(1).toLowerCase()
    this.portNumber = 6047
    this.hostName = 'localhost'
    return this
  }
  
  // initial configuration methods
  port(port: number): this{ if (port) this.portNumber = port
    return this }
  host(host: string): this { if (host) this.hostName = host
    return this }
  message(message: string): this { if (message) this.messageText = message
    return this }
  map(router: any): this { this.router = new GoatRouter(router)
  return this }
  
  // create and run server
  newServer(){
    const router = this.router || new GoatRouter({})
    this.server = http.createServer(function(req: any, res: any) { serverMain(req, res, router) })
  }
  run(){
    this.newServer()
    let message = `Server running on port ${this.portNumber}` + (this.messageText ? '\n' + this.messageText : '')
    if (this.name) message = this.name + ' ' +message.replace('S', 's')
    this.server?.listen(this.portNumber, this.hostName, undefined, function(){ console.log(message) })
    return this
  }
}






function serverMain(req: http.IncomingMessage, res: http.OutgoingMessage, router: any){
  initResponseObject(res)
  initRequestObject(req)

  const obj = new PathString(req.url ?? '')
  // if (obj.)
  console.log(obj.parseUrlComponents())
  console.log(req.url)


  const [valid, routeArr, filename] = isRoute(req.url || '')
  if (valid) {
    router.findRoute(routeArr)
    if (router.route) console.log(`${'/' + routeArr.join('/')} is a route\n`)
  }
  res.end()
}