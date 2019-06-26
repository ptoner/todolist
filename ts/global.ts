
import Framework7 from "framework7";

import { inherits } from "util";
import { QueueService } from "./services/queue_service";
import { RouteService } from "./services/route-service";
import { HomeController } from "./controllers/home-controller";
import { SettingsController } from "./controllers/settings-controller";
import { TemplateService } from "./services/template-service";
import { SettingsService } from "./services/settings-service";


export namespace Global {  

  export var homeController: HomeController
  export var settingsController: SettingsController

  export var todoService:TodoService

  export var queueService: QueueService
  export var routeService: RouteService
  export var templateService: TemplateService
  export var settingsService: SettingsService

  export var app: any

  export function init() {

    Global.templateService = new TemplateService()
    Global.settingsService = new SettingsService()
    Global.queueService = new QueueService(Global.templateService)
    Global.routeService = new RouteService(Global.settingsService)


    //Page Controllers
    Global.settingsController = new SettingsController(Global.settingsService)
    Global.todoService = new TodoService()


    //Make controllers available in window so framework7 components can access them
    window['settingsController'] = Global.settingsController
    window['homeController'] = Global.homeController
  }


  export function navigate(url: string) {
    Global.app.view.main.router.navigate(url)
  }

  export function showExceptionPopup(ex) {

    if (ex.name == "IpfsException") {
      Global.app.dialog.alert(ex.message, "Problem connecting to IPFS")
    } else {
      Global.app.dialog.alert(ex.message, "There was an error")
    }
  }

}
