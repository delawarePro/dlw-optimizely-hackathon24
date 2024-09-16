export const Spin = ({ }) => {
    return <>
        <div className="backgroundAnimation">
            <div className="spin blurred">
                <div className="spin__effect">
                    <div className="spin__spinner">
                        <div className="spin__vane"></div>
                        <div className="spin__vane"></div>
                        <div className="spin__vane"></div>
                        <div className="spin__vane"></div>
                        <div className="spin__vane"></div>
                        <div className="spin__vane"></div>
                        <div className="spin__vane"></div>
                        <div className="spin__vane"></div>
                        <div className="spin__vane"></div>
                        <div className="spin__vane"></div>
                    </div>
                </div>
                <div className="spin__center"></div>
            </div>
        </div>
    </>
}

export default Spin