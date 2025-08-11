import React from "react";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

const recentAnalysis = [
    {
        img: null,
        date: "2024-12-11",
        status: "Improved",
        description: "Skin hydration levels have improved significantly.",
        score: 8.2,
    },
    {
        img: null,
        date: "2025-01-05",
        status: "Diminished",
        description: "Skin hydration levels have diminished significantly.",
        score: 5.4,
    },
];

const routineProgress = [
        {id: 1, type: "Genter Cleanser", name: "CeraVe Foaming Cleanser", done: true},
        {id: 2, type: "Hydrating Serum", name: "The Ordinary Hyaluronic Acid", done: true},
        {id: 3, type: "Moisturizer", name: "Neutrogena Hydro Boost", done: true},
        {id: 4, type: "Sunscreen", name: "La Roche-Posay Anthelios", done: false},
]

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
};

const DashboardRecentAnalysis = () => {
    const progressPercentage = 75; // You can make this dynamic based on actual progress

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-1">
            <Card>
                <CardHeader>
                    <CardTitle>Recent Analysis</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                    <CardAction className="text-primary font-semibold hover:underline">
                        <Link href='#'>
                                View all
                        </Link>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    {recentAnalysis.map((analysis, index) => (
                        <div key={index} className="mb-4 flex gap-4 bg-muted/50 p-3 relative">
                            <div className="flex-shrink-0">
                                {analysis.img ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={analysis.img}
                                        alt="Analysis"
                                        className="w-16 h-16 object-cover rounded"
                                    />
                                ) : (
                                    <div className="w-16 h-16 bg-gray-300 rounded flex items-center justify-center">
                                        <span className="text-gray-500 text-xs">No Image</span>
                                    </div>
                                )}
                            </div>
                            <div className="flex-1 space-y-1">
                                <h3 className="text-lg font-semibold">
                                    {formatDate(analysis.date)}
                                </h3>
                                <p
                                    className={`text-sm font-semibold tracking-wide w-fit p-1 rounded absolute top-0 right-0 ${
                                        analysis.status === "Improved"
                                            ? "text-green-600 bg-green-200"
                                            : "text-red-600 bg-red-200 "
                                    }`}
                                >
                                    {analysis.status}
                                </p>
                                <p className="text-sm text-gray-600"> {analysis.description}</p>
                                <p className="text-sm">
                                    Score:{" "}
                                    <span
                                        className={cn(
                                            "text-green-600 font-semibold tracking-wide",
                                            analysis.score <= 2.5 && "text-red-600",
                                            analysis.score < 6 &&  "text-yellow-600"
                                        )}
                                    >
                                        {analysis.score}/10
                                    </span>
                                </p>
                            </div>
                        </div>
                    ))}
                </CardContent>
                <CardFooter></CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Routine Progress</CardTitle>
                    <CardDescription>Your skincare routine items</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        {routineProgress.map((item) => (
                            <div key={item.id} className={`flex items-center gap-3 p-3 rounded ${
                                item.done ? 'bg-primary/30 border border-primary' : 'bg-muted/50'
                            }`}>
                                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                                    item.done 
                                        ? 'bg-green-600 text-white' 
                                        : 'bg-primary text-primary-foreground'
                                }`}>
                                    {item.done ? (
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        <span className="text-sm font-semibold">{item.id}</span>
                                    )}
                                </div>
                                <div className={`space-y-1 ${item.done ? 'opacity-75' : ''}`}>
                                    <p className="text-sm font-medium text-gray-600">{item.type}</p>
                                    <p className={`text-sm font-semibold`}>{item.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
                <CardFooter>
                    <div className="w-full space-y-2">
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">Overall Progress</span>
                            <span className="text-sm font-semibold">{progressPercentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                                className="bg-primary h-2 rounded-full transition-all duration-300"
                                style={{ width: `${progressPercentage}%` }}
                            ></div>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};

export default DashboardRecentAnalysis;
