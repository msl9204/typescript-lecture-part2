import axios from 'axios'

(async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
        console.log(response.data)
    } catch (error) {

    }

})()

/**
 * 함수안에 속성들을 넣을 수 있다.
 */
const a = () => {}
a.create = () => {}
a.isAxiosError = () => {}
a.z = '123'

a()
a.create()
