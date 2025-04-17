import {useState} from 'react';

export let Exmaple = () => {

    const [message, setMessage] = useState("Hello, world!");
    const [name, setName] = useState("홍길동");
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>{message} / {name}</p>
            {/* 상태는 무.조.건 setter를 이용하여 변경해야 한다. */}
            <button onClick={() => {setMessage("Hello, React"); setName("박길동");}}>Change Message</button>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count+1)}>Increase</button>
        </div>
    )
}