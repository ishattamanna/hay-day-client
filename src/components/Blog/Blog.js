import React from 'react';
import { useTitle } from 'react-use';

const Blog = () => {
    useTitle(`${document.title}-Blogs`)
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1'>
            <div className="hero bg-base-200 p-5">
                <div className="hero-content text-center">
                    <div>
                        <h1 className="text-5xl font-bold">Difference between SQL and NoSQL</h1>
                        <div className='text-start'>
                            <p className="py-6">
                                The five critical differences between SQL vs NoSQL are:
                            </p>
                            <ol className='list-decimal'>
                                <li>
                                    SQL databases are relational, NoSQL databases are non-relational.
                                </li>
                                <li>
                                    SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
                                </li>
                                <li>
                                    SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                                </li>
                                <li>
                                    SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                                </li>
                                <li>
                                    SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-200 p-5">
                <div className="hero-content text-center">
                    <div>
                        <h1 className="text-5xl font-bold">What is JWT, and how does it work?</h1>
                        <div className='text-start'>
                            <p className="py-6">
                                JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.
                            </p>
                            <p>
                                Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-200 p-5">
                <div className="hero-content text-center">
                    <div>
                        <h1 className="text-5xl font-bold">What is the difference between javascript and NodeJS?</h1>
                        <div className='text-start'>
                            <p className='text-xl font-semibold'>Node JS</p>
                            <p>
                                NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.
                            </p>
                            <p className='text-xl font-semibold'>Java Script</p>
                            <p>
                                Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-200 p-5">
                <div className="hero-content text-center">
                    <div>
                        <h1 className="text-5xl font-bold">How does NodeJS handle multiple requests at the same time?</h1>
                        <div className='text-start'>
                            <p>
                                Node Js is not single threated. It is multi threated. Thats why it can handle multiple request at the same time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;