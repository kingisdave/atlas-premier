import React, { ReactNode } from 'react';

/**
 * Renders a CardBlog component that wraps its children with styling and optional custom element type.
 * @component
 * @param {Object} props - The component props.
 * @param {string} [props.as='div'] - The HTML element type to be used as the cardblog. Defaults to 'div'.
 * @param {ReactNode} props.children - The content to be wrapped inside the cardblog.
 * @param {string} [props.className] - Additional CSS classes to be applied to the CardBlog.
 * @param {any} [props.rest] - Any other props to be spread onto the CardBlog element.
 * @returns {JSX.Element} The rendered CardBlog component.
 */

interface CardBlogProps {
  as?: keyof JSX.IntrinsicElements;
  children: ReactNode;
  className?: string;
}

export const CardBlog: React.FC<CardBlogProps> = ({
  as: Element = 'div',
  children,
  className,
  ...rest
}) => {
  return (
    <Element
      {...rest}
      className={`px-3 xxe:px-5 w-full max-w-screen-xl mx-auto ${className}`}
    >
      {children}
    </Element>
  );
};
