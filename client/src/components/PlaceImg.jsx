import React from 'react'

const PlaceImg = ({ place, index = 0 , className=null }) => {
    if (!place.photos?.length) {
        return ''
    }
    if (!className) {
        className = 'object-cover rounded'
    }
    return (
        <>
            <img src={`${place.photos[index]}`} className={className} alt="nothing to show" />
        </>
    )
}

export default PlaceImg
