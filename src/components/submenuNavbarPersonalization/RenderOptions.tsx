// components/submenuNavbarPersonalization/RenderOptions.tsx
import type { PersonalizationOption, ViewType } from "../../pages/konva/ViewType";
import {
  ShirtOption,
  UploadOption,
  TextOption,
  EmojiOption,
  EffectsOption,
} from "./Options";

interface RenderOptionsProps {
  option: PersonalizationOption;
  file: File | null;
  view: ViewType;
  color: string;
  colors: string[];
  onSelectColor: (color: string) => void;
}

export const RenderOptions = ({
  option,
  file,
  view,
  color,
  colors,
  onSelectColor,
}: RenderOptionsProps) => {
  switch (option) {
    case "shirt":
      return <ShirtOption />;

    case "upload":
      return <UploadOption />;

    case "text":
      return <TextOption />;

    case "emoji":
      return <EmojiOption />;

    case "effects":
      return (
        <EffectsOption
          colors={colors}
          onSelectColor={onSelectColor}
        />
      );

    default:
      return null;
  }
};
