import React from 'react'

const Page = () => {
  return (
    <>
        <div>About Page</div>
        
        <p>   This login page allows users to securely enter their credentials and gain access to protected routes. 
        It uses a simple form with two input fields for username and password. When the correct login details 
        are entered — specifically <b>manojkumar65@gmail.com</b> as the username and <b>123456</b> as the password — 
        the user is redirected to this About page. The login logic is handled by a custom `useAuth` hook, 
        ensuring authentication is verified before granting access to restricted content. Incorrect credentials 
        trigger an error message to guide users.
        </p>

    </>

  )
}

export default Page;