import { useState } from "react";

const Demo = () => {

    const [text, setText] = useState("")

    return (<div className="p-2 m-4 w-96 h-96 border border-black">

        <input className="border border-black w-72 px-2" type="text" value={text} onChange={(e) => setText(e.target.value)}/>

    </div>)
}

export default Demo;