import './App.css';
import 'animate.css';
import React, {useEffect, useState} from 'react';
import handleViewport from 'react-in-viewport';

const App = () => (
    <div>
        <div style={{height: '100vh'}}>
            <h2>Scroll down to make component in viewport</h2>
        </div>
        <ViewportBlock onEnterViewport={() => {return (<Block/>)}} onLeaveViewport={() => {return (<></>)}}/>
        <ViewportBlock1 onEnterViewport={() => {return (<Block1/>)}} onLeaveViewport={() => {return (<></>)}}/>
        <ViewportBlock2 onEnterViewport={() => {return (<Block2/>)}} onLeaveViewport={() => {return (<></>)}}/>
    </div>
)

const Block = (props) => {
    const {inViewport, forwardedRef} = props;
    const [key, setKey] = useState(0);

    const incrementKey = () => {
        let min = Math.floor(100)
        let max = Math.floor(200)
        setKey(Math.floor(Math.random() * (max - min)) + min);
    }

    useEffect(() => {
        incrementKey()
    }, [props])

    return (
        <>
            <div ref={forwardedRef} className="App">
                <header className="App-header" key={key}>
                    {inViewport &&
                        <div>
                            <h1 className="h1-animation" >An animated element</h1>
                        </div>
                    }
                </header>
            </div>
        </>
    )
}

const Block1 = (props) => {
    const {inViewport, forwardedRef} = props;
    const [key, setKey] = useState(0);

    const incrementKey = () => {
        let min = Math.floor(100)
        let max = Math.floor(200)
        setKey(Math.floor(Math.random() * (max - min)) + min);
    }

    useEffect(() => {
        incrementKey()
    }, [props])

    return (
        <>
            <div ref={forwardedRef} className="App">
                <header className={"App-header-one"} key={key}>
                    {inViewport &&
                        <div >
                            <h1 className="h1-animation-one" >An animated element</h1>
                        </div>
                    }
                </header>
            </div>
        </>
    )
}

const Block2 = (props) => {
    const {inViewport, forwardedRef} = props;
    const [key, setKey] = useState(0);

    const incrementKey = () => {
        let min = Math.floor(100)
        let max = Math.floor(200)
        setKey(Math.floor(Math.random() * (max - min)) + min);
    }

    useEffect(() => {
        incrementKey()
    }, [props])

    return (
        <>
            <div ref={forwardedRef} className="App">
                <header className={"App-header-two"} key={key}>
                    {inViewport &&
                        <div >
                            <h1 className="h1-animation-two" >An animated element</h1>
                        </div>
                    }
                </header>
            </div>
        </>
    )
}



const ViewportBlock = handleViewport(Block, /** options: {}, config: {} **/);
const ViewportBlock1 = handleViewport(Block1, /** options: {}, config: {} **/);
const ViewportBlock2 = handleViewport(Block2, /** options: {}, config: {} **/);


export default App;
