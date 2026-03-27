"use client";

import { useEffect, useState } from "react";

interface LoadingSkeletonProps {
  type?: "repo" | "card" | "text";
  count?: number;
}

export const LoadingSkeleton = ({
  type = "text",
  count = 3,
}: LoadingSkeletonProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const skeletonBaseClass =
    "animate-pulse bg-gray-300 dark:bg-gray-700 rounded";

  const renderSkeleton = (index: number) => {
    switch (type) {
      case "repo":
        return (
          <div
            key={index}
            className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
          >
            <div className={`h-5 w-3/4 ${skeletonBaseClass} mb-2`} />
            <div className={`h-3 w-full ${skeletonBaseClass} mb-1`} />
            <div className={`h-3 w-2/3 ${skeletonBaseClass}`} />
          </div>
        );
      case "card":
        return (
          <div
            key={index}
            className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg"
          >
            <div className={`h-6 w-2/3 ${skeletonBaseClass} mb-3`} />
            <div className={`h-4 w-full ${skeletonBaseClass} mb-2`} />
            <div className={`h-4 w-4/5 ${skeletonBaseClass} mb-4`} />
            <div className="flex gap-2">
              <div className={`h-6 w-16 ${skeletonBaseClass}`} />
              <div className={`h-6 w-20 ${skeletonBaseClass}`} />
            </div>
          </div>
        );
      case "text":
      default:
        return (
          <div key={index} className="space-y-2">
            <div className={`h-4 w-full ${skeletonBaseClass}`} />
            <div className={`h-4 w-3/4 ${skeletonBaseClass}`} />
          </div>
        );
    }
  };

  return (
    <div
      className={`grid grid-cols-1 ${type === "repo" || type === "card" ? "grid-cols-2 gap-2" : ""}`}
    >
      {Array.from({ length: count }, (_, i) => renderSkeleton(i))}
    </div>
  );
};
