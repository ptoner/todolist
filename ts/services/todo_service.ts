class TodoService {

    constructor() {}


    async create(todo:Todo) : Promise<void> {

    }

    async read(_id:string) : Promise<Todo> {
        return new Todo()
    }

    async update(todo:Todo) : Promise<void> {

    }


    async delete(_id:string) {

    }

    async list() : Promise<Todo[]> {
        return []
    }

}

class Todo {
    _id?: string 
    task: string 
}