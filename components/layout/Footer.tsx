"use client"
export function Footer() {
    return (
        <footer className="py-4 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Your Store Name. All rights reserved.
        </footer>
    )
}