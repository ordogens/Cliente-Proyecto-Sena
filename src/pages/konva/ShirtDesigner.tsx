import Konva from "konva";
import { Stage, Layer, Image as KonvaImage, Transformer } from "react-konva";
import useImage from "use-image";
import { useRef, useState, useEffect } from "react";
import type { ViewType } from "./ViewType";

interface Props {
  view?: ViewType;
  file?: File | null;
}

export const ShirtDesigner = ({ view = "front", file }: Props) => {
  const [mockup] = useImage(`/mockups/${view}.png`);

  const [designUrl, setDesignUrl] = useState<string | null>(null);
  const [designImage] = useImage(designUrl || "");

  const designRef = useRef<Konva.Image | null>(null);
  const transformerRef = useRef<Konva.Transformer | null>(null);

  // Cargar la imagen cada vez que el usuario suba un archivo
  useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setDesignUrl(objectUrl);
    }
  }, [file]);

  // Aplicar transformer al cargar la imagen
  useEffect(() => {
    if (!designRef.current || !transformerRef.current) return;

    transformerRef.current.nodes([designRef.current]);
    transformerRef.current.getLayer()?.batchDraw();
  }, [designImage]);

  return (
    <div className="flex flex-col items-center">
      <Stage width={880} height={470} style={{ border: "1px solid #ccc", background: "#f6fef6", borderRadius: "6px" }}>
        <Layer>
          <KonvaImage image={mockup} width={500} height={550} />

          {designImage && (
            <>
              <KonvaImage
                ref={designRef}
                image={designImage}
                x={150}
                y={150}
                width={200}
                draggable
                onClick={() => {
                  if (!transformerRef.current || !designRef.current) return;
                  transformerRef.current.nodes([designRef.current]);
                  transformerRef.current.getLayer()?.batchDraw();
                }}
              />

              <Transformer
                ref={transformerRef}
                rotateEnabled
                enabledAnchors={["top-left", "top-right", "bottom-left", "bottom-right"]}
              />
            </>
          )}
        </Layer>
      </Stage>
    </div>
  );
};
