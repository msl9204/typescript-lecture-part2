import React, {
    useState,
    useCallback,
    useRef,
    useEffect,
    FunctionComponent,
    FC,
    VFC,
    ReactNode,
    FormEvent,
    ChangeEvent
} from 'react'

interface P {
    name: string
    title: string
    children?: ReactNode | undefined
}

const WordRelay: FC<P> = (props) => {
    const [word, setWord] = useState("제로초");
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");
    const inputEl = useRef<HTMLInputElement>(null);
    const mutaRef = useRef(0);

    useEffect(() => {
        /**
         * typescript에서 async 함수의 return 값은 무조건 Promise 를 반환하게 되어 있다.
         */
        console.log("useEffect")
        mutaRef.current += 1; // MutableRef는 ref로 연결해주는 용도가 아니라 그 외적용도 값을 컴포넌트에서 저장하고 있는 용도로 사용
    }, [])

    const onSubmitForm = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const input = inputEl.current
        if (word[word.length - 1] === value[0]) {
            setResult("딩동댕");
            setWord(value);
            setValue('');
            if (input) {
                input.focus()
            }
        } else {
            setResult("땡");
            setValue('');
            if (input) {
                input.focus()
            }
        }
    }, [word, value]);

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }, [])

    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <input
                    ref={inputEl}
                    value={value}
                    onChange={onChange}
                />
                <button>입력!</button>
            </form>
            <div>{result}</div>
        </>
    );
}

const Parent = () => {
    return (
        <WordRelay name="네임" title="타이틀">
            <div></div>
        </WordRelay>
    )
}

export default WordRelay;
