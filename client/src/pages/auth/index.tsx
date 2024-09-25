import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";

const Auth = () => {
  return(
    <div className="sign-in-container">
        <SignedOut>
          <SignUpButton mode="modal"/>
          <SignInButton mode="modal"/>
        </SignedOut>
        <SignedIn>
          <UserButton/>
        </SignedIn>
    </div>
  )
};

export default Auth;
