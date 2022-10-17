import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

type Props = {
    seed?: string | null | undefined
    large?: boolean
    tiny?: boolean
}

function Avatar({seed, large, tiny}: Props) {
  const { data: session } = useSession();
  return (
    <div className={`relative overflow-hidden h-10 w-10 rounded-full border-gray-300 bg-white ${large && 'h-20 w-20'} ${tiny && 'h-5 w-5'}`}>
      <Image
        layout="fill"
        src={`https://avatars.dicebear.com/api/miniavs/${
          seed || "placeholder"
        }.svg`}
      />
    </div>
  );
}

export default Avatar;
