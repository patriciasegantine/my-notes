import React from 'react';
import { TagContainer } from "./tags.styles.ts";

interface TagsProps {
  title: string
}

export const Tags: React.FC<TagsProps> = ({title}) => {
  return (
    <TagContainer>
      {title}
    </TagContainer>
  );
};
