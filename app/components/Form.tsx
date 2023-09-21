"use client"

import { Script, translate } from 'filipino-script-translator';
import { useState, useEffect } from 'react';

export default function Form() {
    const [result, setResult] = useState('');
    const [script, setScript] = useState('baybayin');
    const [text, setText] = useState('');

    useEffect(() => {
        handleTranslate(text, script);
    }, [text, script]);

    const handleTranslate = (text: string, selectedScript: string) => {
        let translatedResult;

        switch (selectedScript) {
            case 'buhid':
                translatedResult = translate(text, Script.BUHID);
                break;
            case 'hanunoo':
                translatedResult = translate(text, Script.HANUNOO);
                break;
            case 'tagbanwa':
                translatedResult = translate(text, Script.TAGBANWA);
                break;
            default:
                translatedResult = translate(text, Script.BAYBAYIN);
                break;
        }

        setResult(translatedResult);
    };

    return (
        <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg p-4 space-y-4">
            <select
                onChange={(e) => setScript(e.target.value)}
                title="Select script"
                name="script"
                className="rounded px-2 py-[0.5px]"
            >
                <option value="baybayin">baybayin</option>
                <option value="buhid">buhid</option>
                <option value="hanunoo">hanunoo</option>
                <option value="tagbanwa">tagbanwa</option>
            </select>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <textarea
                    className="shadow appearance-none border rounded w-full text-3xl p-3 text-gray-700 leading-tight focus:ring-0 focus:ring-offset-0 focus:ring-transparent transform transition hover:scale-102 duration-300 ease-in-out"
                    autoFocus={true}
                    rows={3}
                    placeholder="Tagalog word here..."
                    onChange={(e) => setText(e.target.value.toLowerCase())}
                />

                <textarea
                    className="shadow appearance-none border rounded w-full text-3xl p-3 text-gray-700 leading-tight focus:ring-0 focus:ring-offset-0 focus:ring-transparent transform transition hover:scale-102 duration-300 ease-in-out"
                    autoFocus={true}
                    readOnly
                    rows={3}
                    value={result}
                    placeholder="Translation..."
                />
            </div>
        </form>
    );
}
