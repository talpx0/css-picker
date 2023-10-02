"use client"

import { useRouter } from "next/navigation"
import { useTransition , useState } from "react";
import { useDebounce } from "@/app/(hook)/useDebounce";

export const Search =()=> {
    const router = useRouter();
    const [isPending, startTransition] = useTransition()
    const [value, setValue] = useState(null)
    const handleChange  = useDebounce((e)=> startTransition( 
        ()=> {setValue(value)}
        )
    , 3000)
    return(
        <div>
            {!isPending && <div>hello</div>}
            {isPending && <div>hi i m pending</div>}
            <div>{value}</div>
            <input onChange={handleChange} />
        </div>
    )
}
