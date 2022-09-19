import axios, {Axios, AxiosError, AxiosResponse} from 'axios'

type Post = {userId: number, id: number, title: string, body: string}
type Created = {

}
type Data = { title: string, body: string, userId: number }
interface Config<D = any> {
    method?: 'post' | 'get' | 'put' | 'patch' | 'delete' | 'head' | 'options'
    url?: string,
    data?: D

}

(async () => {

    /**
     * axios 타이핑
     */
    interface A {
        get<T = any, R = AxiosResponse<T>>(url: string): Promise<R>
        post<T = any, R = AxiosResponse<T>, D = any>(url: string, data: D): Promise<R>
        (config: Config): void
        (url: string, config: Config): void
        isAxiosError(error: unknown): error is AxiosError
    }

    const a: A = axios

    try {
        const response = await a.get<Post>('https://jsonplaceholder.typicode.com/todos/1')
        console.log(response.data)
        console.log(response.data.userId)
        console.log(response.data.body)
        console.log(response.data.id)
        console.log(response.data.title)

        const response2 = await a.post<Created, AxiosResponse<Created>, Data>('https://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1
        })

        const response3 = await a({
            method: 'post',
            url: 'https://jsonplaceholder.typicode.com/posts',
            data: {
                title: 'foo',
                body: 'bar',
                userId: 1
            }
        })

        const response4 = await a('https://jsonplaceholder.typicode.com/posts', {
            method: 'post',
            data: {
                title: 'foo',
                body: 'bar',
                userId: 1
            }
        })


    } catch (error) {
        if (a.isAxiosError(error)) {
            console.error((error.response as AxiosResponse<{message: string}>)?.data.message)
        }
        // if (error instanceof AxiosError) { // 커스텀 타입가드
        //
        // }

        // let axiosError = (error as AxiosError).response
        // console.error(axiosError?.data)




    }

})()
