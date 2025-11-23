const ToDoList = {
    tasks: [],
    nextId: 1,
    
    // Добавить задачу
    addTask: function(title, priority = 1) {
        const task = {
            id: this.nextId++,
            title: title,
            priority: priority
        };
        this.tasks.push(task);
        return task;
    },
    
    // Удалить задачу по id
    deleteTask: function(id) {
        const initialLength = this.tasks.length;
        this.tasks = this.tasks.filter(task => task.id !== id);
        return initialLength !== this.tasks.length;
    },
    
    // Обновить имя или приоритет по Id
    updateTask: function(id, updates) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            if (updates.title !== undefined) {
                task.title = updates.title;
            }
            if (updates.priority !== undefined) {
                task.priority = updates.priority;
            }
            return true;
        }
        return false;
    },
    
    // Отсортировать задачи по приоритету
    sortByPriority: function() {
        this.tasks.sort((a, b) => a.priority - b.priority);
        return this.tasks;
    },
    
    // Дополнительный метод для вывода всех задач
    getAllTasks: function() {
        return this.tasks;
    }
};