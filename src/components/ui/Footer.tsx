export function Footer() {
  return (
    <footer className="mt-16 border-t bg-gray-50 py-8 text-center text-sm text-gray-600">
      <div className="space-y-2">
        <p>© 2025 Queen’s Public Health Brigades</p>
        <div className="flex justify-center gap-5">
          <a
            href="https://instagram.com/qphb"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            Instagram
          </a>
          <a
            href="mailto:qphb@queensu.ca"
            className="hover:text-accent"
          >
            Email Us
          </a>
        </div>
      </div>
    </footer>
  )
}
