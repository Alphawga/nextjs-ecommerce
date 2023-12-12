"use client";
import FormSubmitButton from "@/components/FormSubmitButton";
import { addAdmin, addUser, handleEmailSignIn, handleGoogleSignIn } from "@/components/AddUser";




export const metadata = {
  title: "Manage Product -Greenish Landmark",
};



  



export default async function UserSignUp() {
 
  

  return (
    <div className="my-10">

<h3 className="font-bold text-lg text-center">Sign In</h3>
<div className="w-1/2 mx-auto"> 

<form action={handleEmailSignIn}>

  <input
    required
    name="email"
    type="email"
    placeholder="Email"
    className="input-bordered input mb-3 w-full"
  />

  <input
    required
    name="password"
    type="password"
    placeholder="Password"
    className="input-bordered input mb-3 w-full"
  />
  <FormSubmitButton className="btn-block">Login</FormSubmitButton>
</form>
<label htmlFor="my_modal_8" className="btn text-right w-full my-2">Not Registered? Sign Up</label>
<input type="checkbox" id="my_modal_8" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
    <h3 className="font-bold text-lg text-center">Sign Up</h3>
    <form action={addAdmin}>
        <input
          required
          name="name"
          placeholder="Name"
          className="input-bordered input mb-3 w-full"
        />
        <input
          required
          name="email"
          placeholder="Email"
          className="input-bordered input mb-3 w-full"
        />
  
        <input
          required
          name="password"
          placeholder="Password"
          className="input-bordered input mb-3 w-full"
        />
       
        <FormSubmitButton className="btn-block">Submit</FormSubmitButton>
      </form>

      <button onClick={handleGoogleSignIn} className="w-full my-1">Sign In with Google</button>

    <div className="modal-action">
      <label htmlFor="my_modal_8" className="btn">Close!</label>
    </div>
  </div>
</div> 
</div>
     
    </div>
  );
}