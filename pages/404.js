import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Error = () => {
    return (
        <div>
            <Image src={"/error.png"} width={1700} height={100} alt='error'>
            </Image>
            <Link className='btn btn-primary' href="/">
                <button>Back to Home</button>
            </Link>
        </div>
    );
};

export default Error;