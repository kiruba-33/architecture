/**
 * Reusable Project Gallery component.
 * Displays an asymmetric or multi-column grid of architectural photographs with clean caption overlays.
 *
 * @param {{ images: string[], title?: string }} props
 */
export default function ProjectGallery({ images = [], title = 'Project Documentation' }) {
  if (!images || images.length === 0) return null

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <figure
          key={index}
          className="group relative aspect-[16/11] overflow-hidden bg-charcoal border border-silver shadow-xs"
        >
          <img
            src={image}
            alt={`${title} - Documentation photograph ${index + 1}`}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <figcaption className="absolute bottom-3 left-3 right-3 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="font-semibold text-mauve">Documentation</span> &bull; View {index + 1}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
