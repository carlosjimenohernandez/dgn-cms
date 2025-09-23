// Add rest routes
Add_rest_routes: {

  Parse_post_parameters_globally: {
    Restomatic.router.use(require("body-parser").json());
  }

  Inject_rest_data_operations: {
    Restomatic.router.use("/api/v1/data/schema", Restomatic.controllers.api.v1.data.schema);
    Restomatic.router.use("/api/v1/data/select", Restomatic.controllers.api.v1.data.select);
    Restomatic.router.use("/api/v1/data/insert", Restomatic.controllers.api.v1.data.insert);
    Restomatic.router.use("/api/v1/data/update", Restomatic.controllers.api.v1.data.update);
    Restomatic.router.use("/api/v1/data/delete", Restomatic.controllers.api.v1.data.delete);
  }

  Inject_rest_schema_operations: {
    Restomatic.router.use("/api/v1/data/createTable", Restomatic.controllers.api.v1.data.createTable);
    Restomatic.router.use("/api/v1/data/createColumn", Restomatic.controllers.api.v1.data.createColumn);
    Restomatic.router.use("/api/v1/data/removeTable", Restomatic.controllers.api.v1.data.removeTable);
    Restomatic.router.use("/api/v1/data/removeColumn", Restomatic.controllers.api.v1.data.removeColumn);
    Restomatic.router.use("/api/v1/data/listFiles", Restomatic.controllers.api.v1.data.listFiles);
    Restomatic.router.post("/api/v1/data/setFile", Restomatic.controllers.api.v1.data.setFile);
  }

  Inject_filesystem: {
    Restomatic.router.use("/api/v1/filesystem/readDirectory", Restomatic.controllers.api.v1.filesystem.readDirectory);
    Restomatic.router.use("/api/v1/filesystem/makeDirectory", Restomatic.controllers.api.v1.filesystem.makeDirectory);
    Restomatic.router.use("/api/v1/filesystem/deleteDirectory", Restomatic.controllers.api.v1.filesystem.deleteDirectory);
    Restomatic.router.use("/api/v1/filesystem/readFile", Restomatic.controllers.api.v1.filesystem.readFile);
    Restomatic.router.use("/api/v1/filesystem/writeFile", Restomatic.controllers.api.v1.filesystem.writeFile);
    Restomatic.router.use("/api/v1/filesystem/deleteFile", Restomatic.controllers.api.v1.filesystem.deleteFile);
    Restomatic.router.use("/api/v1/filesystem/isFile", Restomatic.controllers.api.v1.filesystem.isFile);
  }

  Inject_sockets_api: {
    Restomatic.router.use("/api/v1/sockets/listSockets", Restomatic.controllers.api.v1.sockets.listSockets);
  }

  Inject_externally_added_routes: {
    if (typeof Restomatic.parameters.routesCallback === "function") {
      Restomatic.parameters.routesCallback();
    }
  }

  Inject_static_and_dynamic_contents: {
    Restomatic.router.use("/static", require("express").static(__dirname + "/src/static"));
    Restomatic.router.use("/template", async function (request, response, next) {
      try {
        const filepath = __dirname + "/src/template" + request.path;
        const filecontent = await require("fs").promises.readFile(filepath, "utf8");
        const rendered = await require("ejs").render(filecontent, {
          Restomatic,
          request,
          response
        }, { async: true });
        return response.send(rendered);
      } catch (error) {
        console.log(error);
        if (error.code === "ENOENT") {
          return next();
        } else {
          console.log(error);
          return response.fail(error);
        }
      }
    });
  }

  Inject_client_application: {
    Restomatic.router.use(require("express").static(__dirname + "/src/app/docs"));
  }



}