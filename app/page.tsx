"use client"

import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    const path1 = document.querySelector("#triangle-path") as SVGPathElement
    const path2 = document.querySelector("#triangle-path-inverted") as SVGPathElement
    if (path1) {
      path1.style.animation = "dash 3s linear infinite"
    }
    if (path2) {
      path2.style.animation = "dash-v 9s linear infinite"
    }
  }, [])

  return (
    <div className="container">
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "24px"}}>
        <div style={{display: "flex", alignItems: "center"}}>
          <svg width="40" height="24" viewBox="-1 0 28 16" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path
                d="M6 2 L10 13 L2 13 Z"
                fill="none"
                stroke="#00ff88"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.3"
              />
              <path
                id="triangle-path"
                d="M6 2 L10 13 L2 13 Z"
                fill="none"
                stroke="#00ff88"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  strokeDasharray: "35",
                  strokeDashoffset: "35",
                }}
              />
            </g>
            <g transform="translate(14, 0)">
              <path
                d="M2 2 L7 13 L11 2"
                fill="none"
                stroke="#00ff88"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.3"
              />
              <path
                id="triangle-path-inverted"
                d="M2 2 L7 13 L11 2"
                fill="none"
                stroke="#00ff88"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  strokeDasharray: "25",
                  strokeDashoffset: "25",
                }}
              />
            </g>
          </svg>
          <span>Vantage</span>
        </div>
        <p style={{fontSize: "16px", color: "#444", margin: 0, fontFamily: "monospace"}}>See ya soon!</p>
      </div>
    </div>
  )
}
