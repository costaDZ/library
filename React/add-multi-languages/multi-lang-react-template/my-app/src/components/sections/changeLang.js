import React from 'react'
import { useGlobalContext } from '../../context';





export const ChangeLang = () => {

    const { handelClick } = useGlobalContext();


    return (
        <form>
            <select name="list" id="" onClick={(e) => handelClick(e.target.value)}>
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="ar">Arabic</option>
            </select>
        </form>
    )
}
