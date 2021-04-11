import React from 'react'

export default function Searchbox({onSearchChange, searchfield}) {
    return (
        <div className = 'tc'>
            <h2>
                Buscar robots
            </h2>
            <input 
                type='search'
                placeholder='Buscar robots'
                className='pa3 ba b--green bg-light-blue ma2'
                onChange= {onSearchChange}
            />        
        </div>
    );
}
