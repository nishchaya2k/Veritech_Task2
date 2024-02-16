import React from 'react'


const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='logo'>GenZ Chat </span>
            <div className="user">
                <img src="https://images.pexels.com/photos/14875249/pexels-photo-14875249.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
                <span>Nishchaya</span>
                <button>logout</button>
            </div>
        </div>
    )
}

export default Navbar
