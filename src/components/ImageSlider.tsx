"use client";

import { useEffect, useState } from "react";

interface SliderImage {
  _id: string;
  title: string;
  imageUrl: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

function resolveUrl(url: string) {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${API_URL}${url}`;
}

interface ImageSliderProps {
  sliderType?: string;
  title?: string;
  subtitle?: string;
}

export default function ImageSlider({
  sliderType,
  title,
  subtitle,
}: ImageSliderProps) {
  const [images, setImages] = useState<SliderImage[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const params = sliderType ? `?type=${encodeURIComponent(sliderType)}` : "";
    fetch(`${API_URL}/api/content/slider-images${params}`)
      .then((r) => r.json())
      .then((res) => {
        if (res.data?.length > 0) setImages(res.data);
        setLoaded(true);
      })
      .catch(() => setLoaded(true));
  }, [sliderType]);

  // Don't render if not loaded or no images
  if (!loaded || images.length === 0) return null;

  // Show two rows only if 10+ images; split first half to row 1, second half to row 2
  const showTwoRows = images.length >= 10;
  const midpoint = Math.ceil(images.length / 2);
  const row1Images = showTwoRows ? images.slice(0, midpoint) : images;
  const row2Images = showTwoRows ? images.slice(midpoint) : [];

  // Triple for seamless infinite scroll
  const tripled1 = [...row1Images, ...row1Images, ...row1Images];

  const cardWidth = 400;
  const gap = 16;
  const trackWidth1 = tripled1.length * (cardWidth + gap);

  // Use unique animation names per slider type to avoid conflicts
  const uid = sliderType || "default";

  // Build row 2 track if needed
  const tripled2 = showTwoRows ? [...row2Images, ...row2Images, ...row2Images] : [];
  const trackWidth2 = tripled2.length * (cardWidth + gap);

  return (
    <div style={{ overflow: "hidden", padding: "80px 0", position: "relative" }}>
      <style>{`
        @keyframes slider-left-${uid} {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${trackWidth1 / 3}px); }
        }
        ${showTwoRows ? `
        @keyframes slider-right-${uid} {
          0% { transform: translateX(-${trackWidth2 / 3}px); }
          100% { transform: translateX(0); }
        }
        ` : ""}
      `}</style>

      {/* Heading */}
      {title && (
        <div style={{ textAlign: "center", marginBottom: "48px", padding: "0 20px" }}>
          <h2 style={{
            fontSize: "clamp(24px, 4vw, 36px)",
            fontWeight: 700,
            color: "#0F2B46",
            marginBottom: "12px",
          }}>
            Preview Our{" "}
            <span style={{
              background: "linear-gradient(to right, #C8102E, #f87171)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              {title}
            </span>{" "}
            Designs
          </h2>
          {subtitle && (
            <p style={{ fontSize: "16px", color: "#64748b", maxWidth: "640px", margin: "0 auto" }}>
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Row 1 — scrolls left */}
      <div style={{ overflow: "hidden", marginBottom: showTwoRows ? "16px" : "0" }}>
        <div
          style={{
            display: "flex",
            gap: `${gap}px`,
            width: `${trackWidth1}px`,
            animation: `slider-left-${uid} 40s linear infinite`,
          }}
        >
          {tripled1.map((img, i) => (
            <div
              key={`r1-${i}`}
              style={{
                position: "relative",
                width: `${cardWidth}px`,
                height: "280px",
                flexShrink: 0,
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <img
                src={resolveUrl(img.imageUrl)}
                alt={img.title}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right (only if 10+ images, shows different images) */}
      {showTwoRows && (
        <div style={{ overflow: "hidden" }}>
          <div
            style={{
              display: "flex",
              gap: `${gap}px`,
              width: `${trackWidth2}px`,
              animation: `slider-right-${uid} 45s linear infinite`,
            }}
          >
            {tripled2.map((img, i) => (
              <div
                key={`r2-${i}`}
                style={{
                  position: "relative",
                  width: `${cardWidth}px`,
                  height: "280px",
                  flexShrink: 0,
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={resolveUrl(img.imageUrl)}
                  alt={img.title}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Edge fades */}
      <div style={{ position: "absolute", inset: "0", left: 0, width: "80px", background: "linear-gradient(to right, #f6f0e9, transparent)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: "80px", background: "linear-gradient(to left, #f6f0e9, transparent)", pointerEvents: "none" }} />
    </div>
  );
}
