import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

interface RatingProps {
  rating: number;
  onRatingChange: (value: number) => void;
  totalStars?: number;
  size?: number;
  variant?: "yellow" | "gray";
}

const Rating: React.FC<RatingProps> = ({
  rating,
  onRatingChange,
  totalStars = 5,
  size = 24,
  variant = "yellow",
}) => {
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);

  return (
    <div className="flex gap-1">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <FaStar
            key={index}
            size={size}
            className={`cursor-pointer ${
              starValue <= (hoveredStar || rating)
                ? variant === "yellow"
                  ? "text-yellow-500"
                  : "text-gray-500"
                : "text-gray-300"
            }`}
            onClick={() => onRatingChange(starValue)}
            onMouseEnter={() => setHoveredStar(starValue)}
            onMouseLeave={() => setHoveredStar(null)}
          />
        );
      })}
    </div>
  );
};

export default Rating;
