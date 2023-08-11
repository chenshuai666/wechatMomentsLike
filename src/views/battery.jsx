import { useEffect } from "react"

function Battery() {
    const [battery, setBattery] = useState('')
    useEffect(() => {
        navigator.getBattery().then((bat) => {
            setBattery(bat.level*100 + '%')
        })
    })
    return (
        <div className="battery">
            <div className="battery-rest" style={{width: battery}}></div>
        </div>
    )
}

export default Battery