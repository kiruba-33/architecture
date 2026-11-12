/**
 * Standard responsive layout container.
 * @param {{ children: React.ReactNode, className?: string, as?: React.ElementType }} props
 */
export default function Container({ children, className = '', as: Component = 'div' }) {
  return (
    <Component className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Component>
  )
}
