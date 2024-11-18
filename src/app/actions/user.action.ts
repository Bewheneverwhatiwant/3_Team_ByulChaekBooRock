"use server";

import { fetchData } from "@/api/fetchData";
import { getCookie, getCookies } from "cookies-next/server";
import { redirect } from "next/navigation";
import {cookies} from 'next/headers'

// 회원 탈퇴
export const unLinkUser = async () => {
    const cookieStore= await cookies()
    console.log('유저액션',cookieStore);
        const data = await fetchData("/auth/unlink", "GET");
        console.log(data);
        redirect("/loginpage");
    }
