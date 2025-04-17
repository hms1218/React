import { useState } from "react";
import {ListItem, ListItemText, InputBase, Checkbox} from '@mui/material';
//현재 파일에서는 checkBox와 label 컴포넌트를 만들어보자
// export function Todo(){}
let Todo = (props) => {

    const [item, setItem] = useState(props.item);

    return(
        //html코드가 들어가는 부분
        //속성을 쓸 때 카멜케이스로 작성한다.
        //onclick -> onClick
        //classname -> className
        <ListItem>
            <Checkbox checked={item.done}/>
            {/* label태그는 for속성에 name값으로 연결해서 어떤 요소와 연결될 지 지정 */}
            <ListItemText>
                <InputBase 
                    inputProps={{"aria-label" : "naked"}}
                    type = "text"
                    id={item.id}
                    name={item.id}
                    value={item.title}
                    multiline={true}
                    fullWidth={true} />
            </ListItemText>
        </ListItem>
    )
}

export default Todo;

//Todo 프로그램 만들기
//다양한 내용의 할일을 추가하는것
//임의의 Todo리스트는 각 Todo마다 다른 내용을 갖고 있어야한다.
//이 요구사항을 충족하기 위해 Todo 컴포넌트에 title을 매개변수로 넘기자