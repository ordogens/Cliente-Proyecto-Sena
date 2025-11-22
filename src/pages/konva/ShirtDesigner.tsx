import { Stage, Layer, Image as KonvaImage, Transformer } from "react-konva";
import useImage from "use-image";
import { useRef, useState, useEffect } from "react";
import type { ViewType } from "./ViewType";
import Konva from "konva";

interface Props {
  view?: ViewType;     // vista actual (frontal, trasera, etc.)
  file?: File | null;  // archivo que sube el usuario
}

export const ShirtDesigner = ({ view = "front", file }: Props) => {
  // 1. Cargar el mockup de la camiseta según la vista seleccionada
  const [mockup] = useImage(`/mockups/${view}.png`);

  // 2. Estado para guardar la URL temporal del archivo subido
  const [designUrl, setDesignUrl] = useState<string | null>(null);

  // 3. Cargar la imagen del usuario usando esa URL
  const [designImage] = useImage(designUrl || "");

  // 4. Referencias para manipular la imagen y el transformer
  const designRef = useRef<Konva.Image | null>(null);
  const transformerRef = useRef<Konva.Transformer | null>(null);

  // 5. Cuando el usuario sube un archivo, generar URL temporal
  useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setDesignUrl(objectUrl);
    }
  }, [file]);

  // 6. Cuando la imagen ya está cargada, conectar el transformer a ella
  useEffect(() => {
    // Si las refs aún no existen, salir
    if (!designRef.current || !transformerRef.current) return;

    // Conectar transformer a la imagen
    transformerRef.current.nodes([designRef.current]);

    // Redibujar capa para que los cambios se vean
    transformerRef.current.getLayer()?.batchDraw();
  }, [designImage]);

  return (
    <div className="flex flex-col items-center pt-8">
      {/** Stage = lienzo principal */}
      <Stage
        width={880}
        height={470}
        style={{
          border: "1px solid #ccc",
          background: "#f6fef6",
          borderRadius: "6px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/** Layer = capa donde pintar todo */}
        <Layer>
          {/** 7. Pintar la camiseta (mockup) */}
          <KonvaImage image={mockup} width={500} height={550} />

          {/** 8. Si el usuario subió una imagen, pintarla encima */}
          {designImage && (
            <>
              <KonvaImage
                ref={designRef}       // referencia para manipular este nodo
                image={designImage}   // la imagen del usuario
                x={150}               // posición inicial
                y={150}
                width={200}           // tamaño inicial
                draggable             // permite mover la imagen
                onClick={() => {
                  // Cuando haces click en la imagen, activas el transformer
                  if (!transformerRef.current || !designRef.current) return;
                  transformerRef.current.nodes([designRef.current]);
                  transformerRef.current.getLayer()?.batchDraw();
                }}
              />

              {/** 9. Transformer para escalar, rotar y manipular la imagen */}
              <Transformer
                ref={transformerRef}
                rotateEnabled
                enabledAnchors={[
                  "top-left",
                  "top-right",
                  "bottom-left",
                  "bottom-right",
                ]}
              />
            </>
          )}
        </Layer>
      </Stage>
    </div>
  );
};
