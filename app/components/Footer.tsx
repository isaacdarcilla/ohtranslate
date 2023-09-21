export default function Footer() {
    return (
        <div className="w-full space-y-4 sm:space-y-0 sm:flex gap-4 justify-center pt-16 pb-6 text-sm text-center md:text-left fade-in">
            <div className="text-white no-underline font-bold hover:no-underline">Oh! Translate &copy; {new Date().getFullYear()}</div>
            <div className="text-white hidden sm:inline">&bull;</div>
            <div className="text-white no-underline font-bold hover:no-underline">Developed by <a className="text-blue-300" target="_blank" href="https://github.com/isaacdarcilla">Isaac A.</a> using {' '}
                <a className="text-blue-300" target="_blank" href="https://github.com/isaacdarcilla/filipino-script-translator">filipino-script-translator</a></div>
        </div>
    )
}