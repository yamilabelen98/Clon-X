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
    <Card className="shadow-none bg-transparent hover:bg-[#0f0e10] transition border-b rounded-none cursor-pointer border-white/20">
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
              <div className="flex flex-row justify-between w-[80%]">
                <button className="w-[34.75px] h-[34.75px] items-center flex justify-center hover:bg-gray-700 rounded-full">
                  <IconMessageCircle
                    className="w-[18.75px] h-[18.75px] hover:fill-blue-500 rounded-full"
                    color="gray"
                  />
                </button>

                <button className="w-[34.75px] h-[34.75px] items-center flex justify-center hover:bg-gray-700 rounded-full">
                  <LuRepeat2
                    className="w-[18.75px] h-[18.75px] hover:fill-blue-500"
                    color="gray"
                  />
                </button>

                <button className="w-[34.75px] h-[34.75px] items-center flex justify-center hover:bg-gray-700 rounded-full">
                  <IconHeart
                    className="w-[18.75px] h-[18.75px] hover:fill-blue-500"
                    color="gray"
                  />
                </button>

                <button className="w-[34.75px] h-[34.75px] items-center flex justify-center hover:bg-gray-700 rounded-full">
                  <IoMdStats
                    className="w-[18.75px] h-[18.75px] hover:fill-blue-500"
                    color="gray"
                  />
                </button>
              </div>

              <div className="flex ml-auto">
                <button className="w-[34.75px] h-[34.75px] items-center flex justify-center hover:bg-gray-700 rounded-full">
                  <GoBookmark
                    className="w-[18.75px] h-[18.75px] hover:fill-blue-500"
                    color="gray"
                  />
                </button>
                <button className="w-[34.75px] h-[34.75px] items-center flex justify-center hover:bg-gray-700 rounded-full">
                  <RiShare2Line
                    className="w-[18.75px] h-[18.75px] hover:fill-blue-500"
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
