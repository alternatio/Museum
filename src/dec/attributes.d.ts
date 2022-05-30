import { AriaAttributes, DOMAttributes } from "react"
import { Components } from "@ionic/core";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // [marquee:string]: any
    }
  }
}

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    content?: string;
  }
}
