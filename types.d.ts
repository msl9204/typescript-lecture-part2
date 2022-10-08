declare global {
    interface Error {
        status: number
    }
}

// declare global을 인식시켜주기 위해서는 바깥에 import 나 export 키워드가 명시적으로 있어야 한다.
export {}
