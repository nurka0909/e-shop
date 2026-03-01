    import React from 'react';

    export default function FooterSection() {
    return (
        <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} My E‑commerce. All rights reserved.</p>
            <nav className="mt-2">
            <a className="mx-2 text-gray-300 hover:text-white" href="/terms">Terms</a>
            <a className="mx-2 text-gray-300 hover:text-white" href="/privacy">Privacy</a>
            <a className="mx-2 text-gray-300 hover:text-white" href="/contact">Contact</a>
            </nav>
        </div>
        </footer>
    );
    }