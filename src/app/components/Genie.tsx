"use client";

import {useEffect} from "react";

export default function Genie(){
    useEffect(()=>{
        const element = document.querySelector("#element"),
            wrapper = document.querySelector("#modal-with-genie-effect"),
            close = document.querySelector("#close"),
            // word = document.querySelector("#word"),
            open = document.querySelector("#open-modal-ctr"),
            step0 = "#step-0",
            step2 = "#step-2",
            step3 = "#step-3";

        const tl = new AnimationTTimeline();

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        close.addEventListener("click", function(){
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            wrapper.classList.add("active");

            tl
                .to(element, .3, {
                    delay: .7,
                    y: "-15px",
                    scaleY: .9
                })
                .to(element, .3, {
                    morphSVG: step2
                })
                .to(element, .3, {
                    morphSVG: step3,
                }, "-=.15")
                .to(element, .3, {
                    y: "0",
                    scaleY: 1,
                    onComplete: function(){
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-expect-error
                        open.classList.add("active");
                    }
                }, "-=.15")

        });
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        open.addEventListener("click", function(){
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            this.classList.remove("active");

            tl
                .to(element, .3, {
                    delay: .45,
                    y: "10px",
                })
                .to(element, .3, {
                    morphSVG: step2,
                })
                .to(element, .3, {
                    morphSVG: step0
                }, "-=.15")
                .to(element, .3, {
                    y: "0",
                    onComplete: function(){
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-expect-error
                        wrapper.classList.remove("active");
                    }
                }, "-=.3")
        });
    }, [])
    return (
        <div className="main-ctr">
            <svg xmlns="http://www.w3.org/2000/svg" width="540" height="620" viewBox="0 0 540 620">
                <g id="Page-1" fill="none" fillRule="evenodd">
                    <g id="modal-with-genie-effect">
                        <path id="step-3" stroke="#979797"
                              d="M186 561.005c0-2.764 2.234-5.005 4.998-5.005h157.004c2.76 0 4.998 2.242 4.998 5.005v33.99c0 2.764-2.234 5.005-4.998 5.005H190.998c-2.76 0-4.998-2.242-4.998-5.005v-33.99z"
                              opacity=".504"/>
                        <path id="step-2" stroke="#979797"
                              d="M270.136 122h237.356c2.758 0 4.36 2.15 3.577 4.8 0 0-23.333 86.246-92.842 174.822-69.51 88.575-66.458 185.37-66.458 185.37-.033 2.776-2.25 5.008-5.01 5.008H193.51c-2.76 0-4.977-2.232-5.01-5.008 0 0 3.05-96.795-66.458-185.37C52.534 213.046 29.202 126.8 29.202 126.8c-.783-2.65.82-4.8 3.578-4.8h237.356z"
                              opacity=".5"/>
                        <path id="step-0" stroke="#979797"
                              d="M20 26.003C20 23.24 22.23 21 25.01 21h489.98c2.767 0 5.01 2.242 5.01 5.003v289.994c0 2.763-2.23 5.003-5.01 5.003H25.01c-2.767 0-5.01-2.242-5.01-5.003V26.003z"/>
                        <path id="element" fill="#FFF"
                              d="M20 26.003C20 23.24 22.23 21 25.01 21h489.98c2.767 0 5.01 2.242 5.01 5.003v289.994c0 2.763-2.23 5.003-5.01 5.003H25.01c-2.767 0-5.01-2.242-5.01-5.003V26.003z"/>
                        <g id="open-modal-ctr">
                            <path id="open-modal-btn" fill="#FFF"
                                  d="M186 561.005c0-2.764 2.234-5.005 4.998-5.005h157.004c2.76 0 4.998 2.242 4.998 5.005v33.99c0 2.764-2.234 5.005-4.998 5.005H190.998c-2.76 0-4.998-2.242-4.998-5.005v-33.99z"/>
                            <text id="text" fill="#7E7878" fontFamily="Poppins" fontSize="16" fontWeight="260"
                                  transform="translate(180 556)">
                                <tspan x="41.797" y="27">Open Modal</tspan>
                            </text>
                        </g>
                        <g id="word" fontFamily="Poppins">
                            <text id="title" fill="#434343" fontSize="20" transform="translate(20 124)">
                                <tspan x="93.713" y="19">Modal Interaction with Genie Effect</tspan>
                            </text>
                            <text id="paragraf" fill="#7E7878" fontSize="16" fontWeight="260"
                                  transform="translate(20 124)">
                                <tspan x="100.457" y="59">Inspired by Mac OS X minimize interaction.</tspan>
                                <tspan x="120.609" y="84">Built with SVG and Greensock Plugin.</tspan>
                            </text>
                        </g>
                        <g id="close" transform="translate(486 36)">
                            <circle id="bg" cx="10" cy="10" r="10" fill="#E9413D"/>
                            <path id="Shape" stroke="#FFF" d="M6 6.023l7.99 7.945M13.99 6.023L6 13.968"
                                  strokeLinecap="round"/>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    )
}