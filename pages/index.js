import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div>
      <button onClick={() => signIn()}>Log In</button>
      <button onClick={() => signOut()}>Log Out</button>
      <div>{session && `Welcome ${session.user.name}`}</div>
      <div>
        {session && (
          <Image
            alt="user image"
            width={50}
            height={50}
            src={session.user.image}
          />
        )}
      </div>
    </div>
  );
}
