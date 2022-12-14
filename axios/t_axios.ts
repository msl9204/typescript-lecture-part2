import axios, {Axios, AxiosError, AxiosResponse} from 'axios'

type Post = {userId: number, id: number, title: string, body: string}
type Created = {

}
type Data = { title: string, body: string, userId: number }

(async () => {
    try {
        const response = await axios.get<Post>('https://jsonplaceholder.typicode.com/todos/1')
        console.log(response.data)
        console.log(response.data.userId)
        console.log(response.data.body)
        console.log(response.data.id)
        console.log(response.data.title)

        const response2 = await axios.post<Created, AxiosResponse<Created>, Data>('https://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1
        })

        const response3 = await axios({
            method: 'post',
            url: 'https://jsonplaceholder.typicode.com/posts',
            data: {
                title: 'foo',
                body: 'bar',
                userId: 1
            }
        })


    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error((error.response as AxiosResponse<{message: string}>)?.data.message)
        }
        // if (error instanceof AxiosError) { // 커스텀 타입가드
        //
        // }

        // let axiosError = (error as AxiosError).response
        // console.error(axiosError?.data)

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
