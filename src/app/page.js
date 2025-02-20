'use client';
import React, { useState/* ,useRef,useEffect  */} from 'react';
//import Image from "next/image";
import ChatBot from "react-chatbotify";
import { BotIcon, SendHorizontal } from "lucide-react";
import styles from './style.json';
import { Button } from "./Button";
import botAvatar from "../../public/chat_icon.svg";




export default function Home() {
 //const [name, setName] = useState("")


  const settings = {
		general: {
			embedded: false,
            primaryColor: "#070707",
		secondaryColor: "#070707",
        showFooter:false
		},
		chatHistory: {
			storageKey: "example_single_theme"
		},
        chatButton: {
            icon: ()=> {return <BotIcon size={50} color="#ffffff" strokeWidth={1.2}/>},
        },
        tooltip: {
            mode: "CLOSE",
            text: "hello there! I am myty. Talk to me! 😊",
        },
        header: {
            title: (
                <div style={{cursor: "pointer", margin: 0, fontSize: 20, fontWeight: "bold"}} onClick={
                    () => window.open("https://myty.in")
                }>
                    myty
                </div>
            ),
            showAvatar: true,
		    avatar: botAvatar,
            buttons: [Button.CLOSE_CHAT_BUTTON],
        },
        chatInput: {
            disabled: false,
            allowNewline: false,
            enabledPlaceholderText: "Type your message...",
            disabledPlaceholderText: "",
            showCharacterCount: false,
            characterLimit: -1,
            botDelay: 1000,
            sendButtonIcon: ()=> {return <SendHorizontal size={25} color="#ffffff" strokeWidth={2}/>},
            blockSpam: false,
            sendOptionOutput: true,
            sendCheckboxOutput: true,
            buttons: [Button.VOICE_MESSAGE_BUTTON, Button.SEND_MESSAGE_BUTTON]
        },
        
        
        notification: {
            disabled: true,
            
       }

       
	}
  const flow = {
    start: {
        message: "Hello! Welcome to DOIONS,  To start with May I know your name?",
        path: "show_name",
    },
    show_name : {
        message: "Hello! Welcome to DOIONS,  To start with May I know your name?",
        path: "start",
        /* message: (params: string) => `Hey ${params.userInput}! Nice to meet you.`,
        function: (params) => setName(params.userInput),
        transition: {duration: 1000},
        path: "ask_token", */
    }/* ,
    ask_token: {
        message: () => "Before we proceed, we need to verify your profile id, "
        + "Enter your 6 digit profile id",
        isSensitive: true,
        path: (params) => {
            if (params.userInput.length !== 6) {
                return "incorrect_answer"
            } else {
                return "ask_age_group";
            }
        },
    },
    ask_age_group: {
        message: () => `Hey ${name}!, Your account got verified, May i know your age group?`,
        options: ["child", "teen", "adult"],
        chatDisabled: true,
        path: () => "ask_math_question",
    },
    ask_math_question: {
        message: (params) => {
            if (params.prevPath == "incorrect_answer") {
                return;
            }
            return `I see you're a ${params.userInput}. Let's do a quick test! What is 1 + 1?`
        },
        path: (params) => {
            if (params.userInput != "2") {
                return "incorrect_answer"
            } else {
                return "ask_favourite_color";
            }
        },
    },
    ask_favourite_color: {
        message: "Great Job! What is your favourite color?",
        path: "ask_favourite_pet"
    },
    ask_favourite_pet: {
        message: "Interesting! Pick any 2 pets below.",
        checkboxes: {items: ["Dog", "Cat", "Rabbit", "Hamster"], min:2, max: 2},
        function: (params) => alert(`You picked: ${JSON.stringify(params.userInput)}!`),
        chatDisabled: true,
        path: "ask_height",
    },
    ask_height: {
        message: "What is your height (cm)?",
        path: async (params) => {
            if (isNaN(Number(params.userInput))) {
                await params.injectMessage("Height needs to be a number!");
                return;
            }
            return "ask_weather";
        }
    },
    ask_weather: {
        message: (params) => {
            if (params.prevPath == "incorrect_answer") {
                return;
            }
            return "What's my favourite color? Click the button below to find out my answer!"
        },
        component: (
            <div style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 10
            }}>
                <button 
                    className="secret-fav-color"
                    onClick={() => alert("black")}>
                    Click me!
                </button>
            </div>
        ),
        path: async (params) => {
            if (params.userInput.toLowerCase() != "black") {
                return "incorrect_answer"
            } else {
                await params.openChat(false);
                return "close_chat";
            }
        },
    },
    close_chat: {
        message: "I went into hiding but you found me! Ok tell me, "+
            "what's your favourite food?",
        path: "ask_image"
    },
    ask_image: {
        message: (params) =>
            `${params.userInput}? Interesting. Could you share an image of that?`,
        file: (params) => console.log(params.files),
        function: (params) =>
            params.showToast("Image is uploaded successfully!"),
        path: "end",
    },
    end: {
        message: "Thank you for sharing! See you again!",
        path: "loop"
    },
    loop: {
        message: (params) => {
            // sends the message half a second later to facilitate testing of new message prompt
            setTimeout(async () => {
                await params.injectMessage("You have reached the end of the conversation!");
            }, 500)
        },
        path: "loop"
    },
    incorrect_answer: {
        message: "Your answer is incorrect, try again!",
        transition: {duration: 0},
        path: (params) => params.prevPath
    }, */
}
  return (
    <><div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      

        
         DOIONS
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
       Contact Now.
      </footer>
    </div>
    <ChatBot /* themes={themes} */  settings={settings} styles={styles} flow={flow}/>
</>
  );
}
