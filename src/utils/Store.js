const listener = {}

const Store = {}

Store.useListener = (name, func) => {
    return listener[name]=func
}

Store.setListener = (name, data) => {
    if(name) {
        return listener[name](data)
    } else {
        return
    }
}

Store.navigation = [
    {
        title: 'Главная',
        link: '/',
    },
    {
        title: 'Рецепты',
        link: '/recipes',
    },
    {
        title: 'Избранное',
        link: '/favorites',
    },
]

export default Store;