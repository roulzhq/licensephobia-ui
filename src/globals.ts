import { variables } from './variables'

const isSecure = variables.isSecureEnv;

const protocols ={
  http: isSecure ? 'https' : 'http',
  ws: isSecure ? 'wss' : 'ws'
}

export const globals = {
  api: {
    ws: `${protocols.ws}://${variables.apiUrl}`,
    http: `${protocols.http}://${variables.apiUrl}`,
  }
}