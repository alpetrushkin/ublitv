import React, {useState} from "react";
import Counter from "./components/Counter";

function App() {
    const [value, setValue] = useState('ТЕКСТ В ИНПУТ')


    return (
        <div className="App">
            <Counter/>
            <Counter/>
            <Counter/>
            <Counter/>
        </div>
    );
}

export default App;
