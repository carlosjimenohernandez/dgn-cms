Restomatic.controllers.api.v1.sockets.listSockets = function(request, response) {
  const uids = Array.from(Restomatic.universalSocketServer.sockets.sockets.keys());
  return response.success({
    output: { uids },
  })
};