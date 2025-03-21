"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import Img from "../../../public/branding.png"
import { TbBrandApplePodcast } from "react-icons/tb";

export function ThreeDCardDemo() {
    return (
        <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className=" font text-neutral-600 flex items-center gap-2 justify-start dark:text-white"
                >
                    <TbBrandApplePodcast className="text-5xl" />
                    <h1 className="text-3xl font">
                        Branding & Logo
                    </h1>

                </CardItem>

                <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                        src={Img}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href="/"
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                        Get a Proposal
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href="/"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                        Read More
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}
