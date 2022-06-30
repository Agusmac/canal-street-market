import React from 'react'

const YellowFeatures = () => {
    return (
        <div className=' text-left yellowFeature'>
            <h2>Features</h2>
            <div className='mt-30 flex main-grid'>
                <div>
                    <div className='y-bg bg-img-div-1'></div>
                    <div className="textdiv"><h3>CSM Community - AMDC</h3></div>
                </div>
                <div>
                    <div className='y-bg bg-img-div-2'></div>
                    <div className="textdiv"><h3>CSM Community - Joe's Rice Rolls</h3></div>
                </div>
            </div>
            <br />
            <br />
            <div className='mt-30 flex main-grid'>
                <div>
                    <div className='y-bg bg-img-div-3'></div>
                    <div className="textdiv"><h3>CSM Community - Bereop Tech</h3></div>
                </div>
                <div>
                    <div className='y-bg bg-img-div-4'></div>
                    <div className="textdiv"><h3>CSM Community - Izakaya</h3></div>
                </div>
            </div>
        </div>
    )
}

export default YellowFeatures