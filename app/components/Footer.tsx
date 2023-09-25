export default function Footer() {
    return (
        <div className="w-full space-y-4 sm:space-y-0 sm:flex gap-4 justify-center pt-16 pb-6 text-lg text-center md:text-left fade-in">
            <div className="text-white no-underline font-bold hover:no-underline tracking-wider">Oh! Translate &copy; {new Date().getFullYear()}</div>
            <div className="text-white hidden sm:inline">&bull;</div>
            <div className="text-white no-underline font-bold hover:no-underline tracking-wider">Developed by <a className="text-brand-100 tracking-wider" target="_blank" href="https://github.com/isaacdarcilla">Isaac A.</a> using {' '}
                <a className="text-brand-100 tracking-wider" target="_blank" href="https://github.com/isaacdarcilla/filipino-script-translator">filipino-script-translator</a></div>
            <div className="text-white hidden sm:inline">&bull;</div>
            <div className="text-white no-underline font-bold hover:no-underline tracking-wider">Quiapo Font by{' '}
                <a className="text-brand-100 tracking-wider" target="_blank" href="https://www.behance.net/gallery/64253003/Quiapo-Free-Brush-Typeface">Aaron Amar</a></div>
        </div>
    )
}