"use client";

import {
  Card,
  CardHeader,
  CardBody,
  Avatar,
  CardFooter,
} from "@nextui-org/react";
import Link from "next/link";
import { IconHeart, IconMessageCircle } from "@tabler/icons-react";
import { LuRepeat2 } from "react-icons/lu";
import { IoMdStats } from "react-icons/io";
import { GoBookmark } from "react-icons/go";
import { RiShare2Line } from "react-icons/ri";

export default function PostCard({
  userFullName,
  userName,
  avatarUrl,
  content,
}: {
  userFullName: string;
  userName: string;
  avatarUrl: string;
  content: string;
}) {
  return (
    <Card className="shadow-none bg-transparent hover:bg-slate-800 transition border-b rounded-none cursor-pointer border-white/20">
      <CardHeader className="justify-between">
        <div className="flex flex-row w-full">
          <Link href={`/${userName}`}>
            <Avatar radius="full" size="md" src={avatarUrl} />
          </Link>
          <div className="flex flex-col px-2 w-full">
            <div className="flex flex-row gap-2 items-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                {userFullName}
              </h4>
              <h5 className="text-small tracking-tight text-default-400">
                @{userName}
              </h5>
            </div>
            <CardBody className=" px-0 pt-1 text-xs text-white bg-transparent flex-grow w-full min-w-[100%] mb-0">
              <p>{content}</p>
            </CardBody>
            <CardFooter className="flex justify-between px-0 pt-3 mb-0 pb-0 ml-0 w-full">
              <button className="flex justify-start items-center w-full max-w-[114px]">
                <IconMessageCircle
                  className="w-[18.75px] h-[18.75px]"
                  color="gray"
                />
              </button>

              <button className="flex justify-start items-center w-full max-w-[114px]">
                <LuRepeat2 className="w-[18.75px] h-[18.75px]" color="gray" />
              </button>

              <button className="flex justify-start items-center w-full max-w-[114px]">
                <IconHeart className="w-[18.75px] h-[18.75px]" color="gray" />
              </button>

              <button className="flex justify-start items-center w-full max-w-[114px]">
                <IoMdStats className="w-[18.75px] h-[18.75px]" color="gray" />
              </button>

              <div className="flex ml-auto">
                <button className="w-[34.75px] h-[34.75px] items-center flex justify-center">
                  <GoBookmark
                    className="w-[18.75px] h-[18.75px]"
                    color="gray"
                  />
                </button>
                <button className="w-[34.75px] h-[34.75px] items-center flex justify-center hover:bg-blue-400 rounded-full">
                  <RiShare2Line
                    className="w-[18.75px] h-[18.75px] hover:fill-blue-600"
                    color="gray"
                  />
                </button>
              </div>
            </CardFooter>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
