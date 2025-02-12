const Api = {}

Api.url = 'http://localhost:4000/'
Api.domen = ''

Api.get = async (path) => {
    try {

        let req = await fetch(`${Api.rul}${path}`)

        req = await req.json()

        if(req.success) {
            return req.data
        }

        return 'error'
        
    } catch (error) {
        return 'error'
    }
}

export default Api;