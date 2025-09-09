export class ToDoItem {
    Title: string = "";
    Description: string = "";
    Category: string = "";
    Done: boolean = false;

    constructor(Title: string, Description: string, Category: string, Done: boolean) {
        this.Title = Title;
        this.Description = Description;
        this.Category = Category;
        this.Done = Done;
    }
}