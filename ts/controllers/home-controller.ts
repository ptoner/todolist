import { ModelView } from '../model-view'
import {TemplateService} from "../services/template-service";
import {Dom7} from "framework7";

var $$ = Dom7;

class HomeController {

  constructor(
    private todoService: TodoService
  ) {}

  async showHomePage(): Promise<ModelView> {

    return new ModelView({}, 'pages/home.html')

  }

  async buildList() : Promise<void> {

    let list = await this.todoService.list()

    // let template = `
    //   <li 
    // `



    // for (let post of posts) {
    //   $$(listSelector).append(postTemplate(post))
    // }


  }






}

export { HomeController }
