/** @type {import('tailwindcss').Config} */

/**
 * Dr. Koç — AURORA GRADIENT DESIGN SYSTEM (Design Tokens)
 * ------------------------------------------------------------------
 * Tüm renkler `src/index.css` içindeki CSS değişkenlerinden okunur.
 * Bu sayede tek bir yerden tema değiştirilebilir (koyu tema `.dark`
 * altında yalnızca `--c-*` değerlerini yeniden tanımlar).
 *
 * Renk kullanım rehberi (semantik sistem):
 *   brand-*   → mor/violet — birincil aksiyon, aktif durum, vurgu
 *   info-*    → mavi       — bilgi
 *   aqua-*    → camgöbeği  — ilerleme, tamamlanma
 *   accent-*  → pembe      — öne çıkarma, ödül, rozet
 *   success/warning/danger → yalnızca durum bildirimi
 *   ink       → metin, paper → sayfa zemini, surface → kart zemini
 *   line      → kenarlıklar
 *
 * Gradient kuralı: gradient her elemente değil; hero, birincil CTA,
 * aktif durum, ilerleme göstergesi ve öne çıkan tekil kartlara uygulanır.
 */
const withAlpha = (variable) => `rgb(var(${variable}) / <alpha-value>)`

/**
 * Saydamlık ölçeği 0–100 arası tam sayıya açıldı.
 *
 * Aurora dili renkleri dolu pastel yerine "saydam renk + ince halka"
 * olarak kurar (`bg-brand-500/12`, `ring-brand-500/15`). Tailwind'in
 * varsayılan ölçeği 5'er adım olduğu için bu ara değerler sessizce
 * düşüyor — `@apply` içinde ise doğrudan derleme hatası veriyor.
 * Ölçeği açmak yalnızca JIT'in tanıdığı değer kümesini genişletir;
 * üretilen CSS'e yalnızca gerçekten kullanılan sınıflar girer.
 */
const opacityScale = Object.fromEntries(
  Array.from({ length: 101 }, (_, i) => [i, String(i / 100)])
)

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      opacity: opacityScale,

      colors: {
        /* --- Temel yüzeyler --- */
        ink: withAlpha('--c-ink'),
        paper: withAlpha('--c-paper'),
        surface: {
          DEFAULT: withAlpha('--c-surface'),
          muted: withAlpha('--c-surface-muted'),
          sunken: withAlpha('--c-surface-sunken'),
        },
        line: {
          DEFAULT: withAlpha('--c-line'),
          strong: withAlpha('--c-line-strong'),
        },

        /* --- Marka (violet) --- */
        brand: {
          50: withAlpha('--c-brand-50'),
          100: withAlpha('--c-brand-100'),
          200: withAlpha('--c-brand-200'),
          300: withAlpha('--c-brand-300'),
          400: withAlpha('--c-brand-400'),
          500: withAlpha('--c-brand-500'),
          600: withAlpha('--c-brand-600'),
          700: withAlpha('--c-brand-700'),
          800: withAlpha('--c-brand-800'),
          900: withAlpha('--c-brand-900'),
          950: withAlpha('--c-brand-950'),
        },

        /* --- Vurgu (pembe) --- */
        accent: {
          50: withAlpha('--c-accent-50'),
          100: withAlpha('--c-accent-100'),
          200: withAlpha('--c-accent-200'),
          300: withAlpha('--c-accent-300'),
          400: withAlpha('--c-accent-400'),
          500: withAlpha('--c-accent-500'),
          600: withAlpha('--c-accent-600'),
          700: withAlpha('--c-accent-700'),
        },

        /* --- İlerleme (camgöbeği) --- */
        aqua: {
          50: withAlpha('--c-aqua-50'),
          100: withAlpha('--c-aqua-100'),
          200: withAlpha('--c-aqua-200'),
          300: withAlpha('--c-aqua-300'),
          400: withAlpha('--c-aqua-400'),
          500: withAlpha('--c-aqua-500'),
          600: withAlpha('--c-aqua-600'),
          700: withAlpha('--c-aqua-700'),
          DEFAULT: withAlpha('--c-aqua-500'),
        },

        /* --- Aurora gradient durakları (dekoratif katmanlar için) --- */
        aurora: {
          purple: withAlpha('--c-aurora-purple'),
          violet: withAlpha('--c-aurora-violet'),
          blue: withAlpha('--c-aurora-blue'),
          cyan: withAlpha('--c-aurora-cyan'),
          pink: withAlpha('--c-aurora-pink'),
        },

        /* --- Durum renkleri --- */
        success: {
          50: withAlpha('--c-success-50'),
          100: withAlpha('--c-success-100'),
          500: withAlpha('--c-success-500'),
          600: withAlpha('--c-success-600'),
          700: withAlpha('--c-success-700'),
          DEFAULT: withAlpha('--c-success-500'),
        },
        warning: {
          50: withAlpha('--c-warning-50'),
          100: withAlpha('--c-warning-100'),
          500: withAlpha('--c-warning-500'),
          600: withAlpha('--c-warning-600'),
          700: withAlpha('--c-warning-700'),
          DEFAULT: withAlpha('--c-warning-500'),
        },
        danger: {
          50: withAlpha('--c-danger-50'),
          100: withAlpha('--c-danger-100'),
          500: withAlpha('--c-danger-500'),
          600: withAlpha('--c-danger-600'),
          700: withAlpha('--c-danger-700'),
          DEFAULT: withAlpha('--c-danger-500'),
        },
        info: {
          50: withAlpha('--c-info-50'),
          100: withAlpha('--c-info-100'),
          500: withAlpha('--c-info-500'),
          600: withAlpha('--c-info-600'),
          700: withAlpha('--c-info-700'),
          DEFAULT: withAlpha('--c-info-500'),
        },

        /* --- Geriye dönük uyumluluk (eski kodlar bunları kullanıyor) --- */
        good: withAlpha('--c-success-500'),
        warn: withAlpha('--c-warning-500'),
        bad: withAlpha('--c-danger-500'),
      },

      fontFamily: {
        /* Inter Tight → başlıklar (sıkı harf aralığı, premium SaaS hissi)
           Inter        → gövde metni ve form alanları */
        display: [
          'Inter Tight',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'sans-serif',
        ],
        body: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'sans-serif',
        ],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },

      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.02em' }],
        xs: ['0.75rem', { lineHeight: '1.125rem' }],
        sm: ['0.875rem', { lineHeight: '1.4rem' }],
        base: ['1rem', { lineHeight: '1.6rem' }],
        lg: ['1.125rem', { lineHeight: '1.7rem', letterSpacing: '-0.01em' }],
        xl: ['1.25rem', { lineHeight: '1.8rem', letterSpacing: '-0.015em' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.02em' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.025em' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.03em' }],
        '5xl': ['3rem', { lineHeight: '1.08', letterSpacing: '-0.035em' }],
        '6xl': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.04em' }],
        '7xl': ['4.5rem', { lineHeight: '1.02', letterSpacing: '-0.04em' }],
      },

      boxShadow: {
        /* Ağır gölge yok — katmanlı, yumuşak ve violet'e çalan gölgeler.
           Kart havada uçmaz, yüzeyin üzerinde durur. */
        xs: '0 1px 2px rgb(var(--c-shadow) / 0.05)',
        card: '0 1px 2px rgb(var(--c-shadow) / 0.04), 0 5px 16px -12px rgb(var(--c-shadow) / 0.16)',
        'card-hover':
          '0 2px 4px rgb(var(--c-shadow) / 0.05), 0 10px 24px -16px rgb(var(--c-shadow) / 0.2)',
        elevated:
          '0 2px 8px -4px rgb(var(--c-shadow) / 0.12), 0 16px 32px -20px rgb(var(--c-shadow) / 0.22)',
        overlay: '0 32px 80px -20px rgb(var(--c-shadow) / 0.38)',
        glass:
          '0 1px 1px rgb(255 255 255 / 0.4) inset, 0 8px 32px -12px rgb(var(--c-shadow) / 0.18)',
        'inner-line': 'inset 0 0 0 1px rgb(var(--c-line) / 1)',
        /* Aurora ışıması — yalnızca birincil aksiyon ve öne çıkan panel */
        aurora: '0 8px 28px -10px rgb(var(--c-brand-500) / 0.5)',
        'aurora-lg': '0 16px 48px -16px rgb(var(--c-brand-500) / 0.55)',
        'aurora-glow':
          '0 0 0 1px rgb(var(--c-brand-500) / 0.12), 0 12px 40px -12px rgb(var(--c-brand-500) / 0.45)',
        'brand-glow': '0 8px 28px -10px rgb(var(--c-brand-500) / 0.5)',
      },

      borderRadius: {
        btn: '0.625rem' /* 10px — düğmeler */,
        input: '0.625rem' /* 10px — form alanları */,
        card: '0.875rem' /* 14px — kartlar */,
        panel: '1.125rem' /* 18px — büyük paneller, hero kutuları */,
        xl2: '1rem',
        '4xl': '2rem',
      },

      spacing: {
        'safe-top': 'var(--safe-area-inset-top, env(safe-area-inset-top, 0px))',
        'safe-bottom': 'var(--safe-area-inset-bottom, env(safe-area-inset-bottom, 0px))',
        'safe-left': 'var(--safe-area-inset-left, env(safe-area-inset-left, 0px))',
        'safe-right': 'var(--safe-area-inset-right, env(safe-area-inset-right, 0px))',
        'header': 'var(--app-header-height)',
      },

      screens: {
        xs: '420px',
      },

      maxWidth: {
        content: '76rem',
        prose: '65ch',
      },

      backgroundImage: {
        'aurora-gradient': 'var(--g-aurora)',
        'aurora-gradient-hover': 'var(--g-aurora-hover)',
        'aurora-soft': 'var(--g-aurora-soft)',
        'aurora-line': 'var(--g-aurora-line)',
        'aurora-text': 'var(--g-aurora-text)',
        'aurora-pink': 'var(--g-aurora-pink)',
        /* Geriye dönük uyumluluk — eski `bg-brand-gradient` çağrıları */
        'brand-gradient': 'var(--g-aurora)',
        'accent-gradient':
          'linear-gradient(135deg, rgb(var(--c-accent-500)) 0%, rgb(var(--c-brand-600)) 100%)',
        'surface-glow':
          'radial-gradient(80% 60% at 50% 0%, rgb(var(--c-brand-200) / 0.4) 0%, transparent 70%)',
        shimmer:
          'linear-gradient(90deg, transparent 0%, rgb(var(--c-surface) / 0.9) 50%, transparent 100%)',
        'mesh-aurora':
          'radial-gradient(at 12% 12%, rgb(var(--c-aurora-purple) / 0.16) 0px, transparent 55%), radial-gradient(at 85% 8%, rgb(var(--c-aurora-blue) / 0.14) 0px, transparent 50%), radial-gradient(at 70% 85%, rgb(var(--c-aurora-cyan) / 0.12) 0px, transparent 50%), radial-gradient(at 20% 90%, rgb(var(--c-aurora-pink) / 0.1) 0px, transparent 50%)',
      },

      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },

      transitionDuration: {
        250: '250ms',
        400: '400ms',
      },

      blur: {
        aurora: '80px',
        'aurora-lg': '120px',
      },

      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.96)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        slideDown: {
          from: { opacity: '0', transform: 'translateY(-6px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(16px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.55' },
        },
        /* Aurora ışık halkası — AI panelinde ve aktif göstergelerde */
        auroraPulse: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.06)' },
        },
        /* Gradient'in kendi içinde çok yavaş kayması */
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },

      animation: {
        'fade-in': 'fadeIn 220ms cubic-bezier(0.4, 0, 0.2, 1) both',
        'fade-in-up': 'fadeInUp 280ms cubic-bezier(0.16, 1, 0.3, 1) both',
        'scale-in': 'scaleIn 200ms cubic-bezier(0.34, 1.56, 0.64, 1) both',
        'slide-down': 'slideDown 200ms cubic-bezier(0.4, 0, 0.2, 1) both',
        'slide-in-right': 'slideInRight 260ms cubic-bezier(0.16, 1, 0.3, 1) both',
        shimmer: 'shimmer 1.8s infinite',
        'pulse-soft': 'pulseSoft 1.8s ease-in-out infinite',
        'aurora-pulse': 'auroraPulse 6s ease-in-out infinite',
        'gradient-shift': 'gradientShift 12s ease-in-out infinite',
      },

      zIndex: {
        dropdown: '40',
        sticky: '30',
        modal: '50',
        toast: '60',
      },
    },
  },
  plugins: [],
}
