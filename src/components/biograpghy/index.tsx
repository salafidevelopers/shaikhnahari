import React from "react";
import { ContentCard } from "./contentsCard";
import { Biography } from "./biography";

export const BiographyPage = () => {
  return (
    <div className="flex gap-2">
      <Biography />
      <ContentCard />
    </div>
  );
};
