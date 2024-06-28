"use client";
import { CardStack } from "../ui/card-stack";
import { cn } from "@/utils/cn";
export function CardStackDemo() {
    return (
        <div className="h-[40rem] flex flex-col items-center justify-center w-full">
            <h1 className="flex flex-col sm:mt-0 -mt-[20vw] mb-16 mr-20 -ml-[40vw] -rotate-45 float-left sm:text-4xl font-bold">Real reviews,
                <br /><span className="bg-blue-600 text-white flex items-center justify-center p-2 ">Real Clients</span></h1>
            <CardStack items={CARDS} />
        </div>
    );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <span
            className={cn(
                "font-bold bg-emerald-100 text-emerald-700 w-full dark:bg-white dark:text-emerald-500 ",
                className
            )}
        >
            {children}
        </span>
    );
};

const CARDS = [
    {
        id: 0,
        name: "Manu Arora",
        designation: "Senior Software Engineer",
        content: (
            <p>

            </p>
        ),
    },
    {
        id: 1,
        name: "Elon Musk",
        designation: "Senior Shitposter",
        content: (
            <p>
                I dont like this Twitter thing,{" "}
                <Highlight>deleting it right away</Highlight> because yolo. Instead, I
                would like to call it <Highlight>X.com</Highlight> so that it can easily
                be confused with adult sites.
            </p>
        ),
    },
    {
        id: 2,
        name: "Tyler Durden",
        designation: "Manager Project Mayhem",
        content: (
            <p>
                The first rule of
                <Highlight>Fight Club</Highlight> is that you do not talk about fight
                club. The second rule of
                <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
                club.
            </p>
        ),
    },
];
