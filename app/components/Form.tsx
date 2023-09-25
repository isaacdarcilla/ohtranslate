"use client"

import copy from 'copy-to-clipboard';
import { Script, translate } from 'filipino-script-translator';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';

export default function Form() {
    const [result, setResult] = useState('');
    const [script, setScript] = useState('baybayin');
    const [text, setText] = useState('');
    const textRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        handleTranslate(text, script);
    }, [text, script]);

    const clearText = () => {
        setText('')
        if (textRef.current) {
            textRef.current.value = '';
        }
    }

    const copyText = () => {
        copy(result);

        toast.success('Copied to clipboard', {
            style: {
                border: '1px solid #713200',
                padding: '16px',
                color: '#713200',
            },
            iconTheme: {
                primary: '#713200',
                secondary: '#FFFAEE',
            },
            icon: '👏'
        });
    }

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
        <form className="bg-brand-300 w-full shadow-lg rounded-none p-4 space-y-4">
            <div className='flex items-center justify-between gap-3'>
                <div className='flex items-center gap-3'>
                    <p>Select: </p>
                    <select
                        onChange={(e) => setScript(e.target.value)}
                        title="Select script"
                        name="script"
                        className="rounded-none px-2 py-[0.5px] text-brand-400 tracking-wider"
                    >
                        <option className='tracking-wider' value="baybayin">baybayin</option>
                        <option className='tracking-wider' value="buhid">buhid</option>
                        <option className='tracking-wider' value="hanunoo">hanunoo</option>
                        <option className='tracking-wider' value="tagbanwa">tagbanwa</option>
                    </select>
                </div>
                <div className='flex items-center gap-3'>
                    <button type='button' onClick={() => clearText()} className='p-1 bg-brand-200 hover:bg-brand-100 hover:scale-105 text-brand-300 tracking-wider'>Clear</button>
                    <button type='button' onClick={() => copyText()} className='p-1 bg-brand-200 hover:bg-brand-100 hover:scale-105 text-brand-300 tracking-wider'>Copy Text</button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <textarea
                    ref={textRef}
                    className="shadow appearance-none border rounded-none w-full text-3xl p-3 text-brand-300 bg-brand-500 tracking-wider focus:ring-0 focus:ring-offset-0 focus:ring-transparent transform transition hover:scale-102 duration-300 ease-in-out"
                    autoFocus={true}
                    rows={3}
                    placeholder="Tagalog word here..."
                    onChange={(e) => setText(e.target.value.toLowerCase())}
                />

                <textarea
                    className="shadow appearance-none border rounded-none w-full text-3xl p-3 text-brand-300 bg-brand-100 tracking-wider focus:ring-0 focus:ring-offset-0 focus:ring-transparent transform transition hover:scale-102 duration-300 ease-in-out"
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
