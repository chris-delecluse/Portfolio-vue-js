import type {TextProps} from "@/types/props/_base/TextProps";
import type {TextPositionProps} from "@/types/props/_base/TextPositionProps";
import type {TextSizeProps} from "@/types/props/_base/TextSizeProps";

export type TitleProps = {
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & TextProps
    & TextPositionProps
    & TextSizeProps 