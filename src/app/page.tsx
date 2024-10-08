"use client";
import "regenerator-runtime/runtime"
import React, {useState, ChangeEvent} from "react";
import TextArea from '@/Components/Inputs/TextArea';
import SpeechRecognitionComponent from '@/Components/SpeechRecognition/SpeechRecognition'
import { IconFileUpload, IconVolume } from "@tabler/icons-react";




export default function Home() {
  const [sourceText , setSourceText] = useState<string>("");


  const handleAudioPlayback = (text:string) => {
    const utterance = new SpeechSynthesisUtterance(text)
    window.speechSynthesis.speak(utterance)
  }
  return (
    <div>
      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative overflow-hidden h-screen">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 py-10 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-neutral-200">Lingua <span className="text-orange-600">Speak</span></h1>
            <p className="mt-3 text-neutral-400">
              LinguaSpeak: Bridging Voices , Connectibg Worlds
            </p>

            <div className="mt-7 sm:mt-12 mx-auto max-w-3xl relative text-white">
              <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                <div className="realtive z-10 flex flex-col space-x-3 border rounded-lg shadow-lg bg-neutral-900  border-neutral-700 shadow-gray-2">
          <TextArea 
        
          id= "source-language"
          value={sourceText}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>)=>{setSourceText(e.target.value);
          }}
          placeholder="Source Language"
          />
          <div className="flex flex-row justify-between w-full ">
            <span className="cursor-pointer flex space-x-2 flex-row">
              <SpeechRecognitionComponent setSourceText={setSourceText} />
              <IconVolume 
              size={22}
              onClick={() => handleAudioPlayback(sourceText)} />

              {/* file upload  component*/}
              <IconFileUpload
              size={22}
              />

            </span>

          </div>
         
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>

    </div>
  );
}
