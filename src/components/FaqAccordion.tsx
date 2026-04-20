'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FaqItem {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            style={{
              border: '1px solid #E2E8F0',
              borderRadius: 12,
              background: '#fff',
              overflow: 'hidden',
              transition: 'box-shadow 200ms',
              boxShadow: isOpen ? '0 6px 24px rgba(15, 23, 42, 0.06)' : 'none',
            }}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 16,
                padding: '20px 24px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                font: 'inherit',
                color: '#0F172A',
              }}
            >
              <span style={{ fontSize: 17, fontWeight: 600, lineHeight: 1.4 }}>{item.q}</span>
              <ChevronDown
                size={20}
                style={{
                  flexShrink: 0,
                  transition: 'transform 200ms ease',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  color: '#64748B',
                }}
              />
            </button>
            <div
              style={{
                maxHeight: isOpen ? 600 : 0,
                transition: 'max-height 300ms ease, padding 300ms ease',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  padding: '0 24px 20px',
                  color: '#475569',
                  fontSize: 15,
                  lineHeight: 1.65,
                }}
              >
                {item.a}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
