import React, { createContext } from 'react';

export const JwtContext = createContext();

const JWT = ({ children }) => {

    const jwtManager = (user) => {
        const currentUser = {
            email: user.email
        }
        fetch('https://hayday-server.vercel.app/jwt', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(currentUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.token);
                localStorage.setItem('haydaytoken', data.token);
            })
    }

    const jwtInfo = {
        jwtManager
    }

    return (
        <JwtContext.Provider value={jwtInfo}>
            {children}
        </JwtContext.Provider>
    );
};

export default JWT;