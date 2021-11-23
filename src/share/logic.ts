

export const updateNewTodo = (todo: Todo, todolists: Todo[]) => {
    for (let i = 0; i < todolists.length; i++) {
        if (todolists[i].id === todo.id) {
            todolists.splice(i, 1, todo);
            break;
        }
    }
    return todolists;
};

export const show = (id: string, todolists: Todo[]) => {
    todolists.forEach(item => {
        if (item.id === id) {
            item.isShow = true
        }
    })
    return todolists
};

export const removeall = (todolists: Todo[]) => {
    const newTodolists = todolists.filter(item => item.checked !== true)
    return newTodolists;
};