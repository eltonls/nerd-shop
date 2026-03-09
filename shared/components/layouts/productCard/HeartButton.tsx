"use client";

import { HeartIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "../../ui/button";
import { cn } from "@/lib/utils";

interface HeartButtonProps {
  initialLiked?: boolean;
  onToggle?: (liked: boolean) => void;
}

const HeartButton = ({ initialLiked = false, onToggle }: HeartButtonProps) => {
  const [liked, setLiked] = useState(initialLiked);
  const [animating, setAnimating] = useState(false);

  const handleClick = () => {
    setAnimating(true);
    const next = !liked;
    setLiked(next);
    onToggle?.(next);
    setTimeout(() => setAnimating(false), 350);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleClick}
      aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
      className={cn(
        "rounded-full w-9 h-9 transition-all duration-200",
        "hover:bg-rose-50 hover:scale-110",
        liked
          ? "text-rose-500"
          : "text-slate-400 hover:text-rose-400"
      )}
    >
      <HeartIcon
        className={cn(
          "w-[18px] h-[18px] transition-all duration-200",
          liked && "fill-rose-500",
          animating && "scale-125"
        )}
      />
    </Button>
  );
};

export default HeartButton;
