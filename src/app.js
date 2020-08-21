import React from 'react'

const event = ['Good Morning', 'Good Evening', 'Good Night']
const estyle = [{ color: 'white' }, { color: 'yellow' }, { color: 'black' }]
let eventCurr;
let eventStyle;
const date = new Date()


let currhour = date.getHours();
if (currhour < 12 && currhour > 0) {
    eventCurr = event[0]
    eventStyle = estyle[0]
} else if (currhour < 20 && currhour > 12) {
    eventCurr = event[1]
    eventStyle = estyle[1]
} else {
    eventCurr = event[2]
    eventStyle = estyle[2]
}

let imgstyle = {
    width: '100%',
    height: '100vh',
    objectFit: 'cover',
    position: 'absolute',
    top: '0',
    zIndex: -1
}

let time = date.toLocaleTimeString();

const App = () => {
    return (
        <>
            <img src='./img/2.jpg' style={imgstyle} />
            <div style={{ fontSize: '3rem', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <h1 style={eventStyle}>Hey Jual,
	     	<br />  {eventCurr}
                    <br />
                    <span>
                        Time: {time}
                    </span>
                </h1>

            </div>

        </>
    )
}

export default App;