import React from 'react'

const button = () => {
  return (
    <div><>
    /* Based on TailwindCSS recommendations, consider using classes instead of the
    `@apply` directive @see
    https://tailwindcss.com/docs/reusing-styles#avoiding-premature-abstraction */
    :root {"{"}
    --some-color: #090909;
    {"}"}
    .foo {"{"}
    @apply text-center text-xs transition-colors duration-200 ease-out ml-4 px-64
    py-[0.875em] hover:blur-sm hover:brightness-50 hover:sepia hover:contrast-100
    hover:hue-rotate-30 hover:invert-0 hover:opacity-5 hover:saturate-150
    hover:text-orange-400 hover:text-xl disabled:w-3/12
    disabled:text-[color:var(--some-color)] disabled:text-[1em] md:inset-x-1/4
    md:inset-y-auto supports-[display:grid]:grid
    supports-[display:grid]:col-span-1; animation-delay: 200ms;
    {"}"}
    @media (min-width: 768px) and (max-width: 1024px) {"{"}
    .foo {"{"}
    @apply min-w-full -mr-6;
    {"}"}
    {"}"}
    .foo.bar {"{"}
    @apply translate-x-3 translate-y-[-0.5em] skew-x-1 skew-y-3 rotate-[-0.25turn]
    pt-3.5 pb-[15%] px-64 -scale-x-75 scale-y-105 after:content-["*"]
    after:animate-spin;
    {"}"}
  </>
  </div>
  )
}

export default button