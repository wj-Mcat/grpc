import grpc from 'grpc'

import {
  ContactListResponse,
  IPuppetServer,
  PuppetService,
  SelfIdResponse,
}                       from '../src/'

// tslint:disable:no-console

/**
 * Implements the SayHello RPC method.
 */
const puppetServerImpl: IPuppetServer = {
  contactList: (call, callback) => {
    const contactListResponse = new ContactListResponse()

    const idList = ['a', 'b', 'c']
    contactListResponse.setIdList(idList)

    callback(null, contactListResponse)
  },

  selfId: (call, callback) => {
    const selfIdResponse = new SelfIdResponse()
    selfIdResponse.setId('lizhuohuan')
    callback(null, selfIdResponse)
    // grpc.handleUnaryCall<wechaty_puppet_pb.Empty, wechaty_puppet_pb.Id>;
  },

  start: (call, callback) => {
    // grpc.handleUnaryCall<wechaty_puppet_pb.Empty, wechaty_puppet_pb.Empty>;
  },

  stop: (call, callback) => {
    // grpc.handleUnaryCall<wechaty_puppet_pb.Empty, wechaty_puppet_pb.Empty>;
  },

  logout: (call, callback) => {
    // grpc.handleUnaryCall<wechaty_puppet_pb.Empty, wechaty_puppet_pb.Empty>;
  },

  logonoff: (call, callback) => {
    // grpc.handleUnaryCall<wechaty_puppet_pb.Empty, wechaty_puppet_pb.Empty>;
  },

  ding: (call, callback) => {
    // grpc.handleUnaryCall<wechaty_puppet_pb.Empty, wechaty_puppet_pb.Empty>;
  },

  version: (call, callback) => {
    // grpc.handleUnaryCall<wechaty_puppet_pb.Id, wechaty_puppet_pb.ContactPayload>;
  },

  contactPayload: (call, callback) => {
    // grpc.handleUnaryCall<wechaty_puppet_pb.Id, wechaty_puppet_pb.ContactPayload>;
  },

  friendshipPayload: (call, callback) => {
    // grpc.handleUnaryCall<wechaty_puppet_pb.Id, wechaty_puppet_pb.ContactPayload>;
  },

  roomList: (call, callback) => {
    // grpc.handleUnaryCall<wechaty_puppet_pb.Id, wechaty_puppet_pb.ContactPayload>;
  },
  roomPayload: (call, callback) => {
    // grpc.handleUnaryCall<wechaty_puppet_pb.Id, wechaty_puppet_pb.ContactPayload>;
  },

  roomInvitationPayload: (call, callback) => {
    // grpc.handleUnaryCall<wechaty_puppet_pb.Id, wechaty_puppet_pb.ContactPayload>;
  },

  messagePayload: (call, callback) => {
    // grpc.handleUnaryCall<wechaty_puppet_pb.Id, wechaty_puppet_pb.ContactPayload>;
  },

}

/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
async function main () {
  const server = new grpc.Server()
  server.addService(
    PuppetService,
    puppetServerImpl,
  )
  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure())
  server.start()
  return 0
}

main()
// .then(process.exit)
.catch(e => {
  console.error(e)
  process.exit(1)
})