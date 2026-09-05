// All geometry is decorative book geometry, not educational or GIS data.
export const PAGE_WIDTH = 340
export const PAGE_HEIGHT = 470
export const clamp = (value, min = 0, max = 1) => Math.max(min, Math.min(max, value))
export const smoothstep = (value) => { const t = clamp(value); return t * t * (3 - 2 * t) }
const FIRST_CHAPTER_PROGRESS = 0.22
const CHAPTER_GAP = 0.155
const PAGE_TURN_INSET = 0.015
const PAGE_TURN_DURATION = CHAPTER_GAP - PAGE_TURN_INSET * 2

export const chapterProgress = (index) => FIRST_CHAPTER_PROGRESS + clamp(index, 0, 4) * CHAPTER_GAP
export const chapterAt = (progress) => clamp(Math.round((progress - FIRST_CHAPTER_PROGRESS) / CHAPTER_GAP), 0, 4)
export const coverTurn = (progress) => smoothstep(progress / 0.21)
// Each chapter marker is a stable, fully open spread. A leaf only turns in the
// space between two markers, so direct navigation can never stop mid-page.
export const leafTurn = (progress, index) => smoothstep(
  (progress - chapterProgress(index) - PAGE_TURN_INSET) / PAGE_TURN_DURATION,
)

// Integrating the changing tangent bends each leaf continuously around the
// binding. The cover uses a rigid hinge; paper has a soft, delayed outer edge.
export function pageCurve(turn, width = PAGE_WIDTH, flexible = true, segments = 32) {
  const points = [{ x: 0, z: 0 }]
  const bend = flexible ? Math.sin(turn * Math.PI) * 0.88 : 0
  for (let i = 1; i <= segments; i += 1) {
    const u = (i - 0.5) / segments
    const angle = Math.PI * turn + bend * (0.56 - u)
    const previous = points[i - 1]
    points.push({ x: previous.x + Math.cos(angle) * width / segments, z: previous.z + Math.sin(angle) * width / segments })
  }
  return points
}

export function projectPoint(x, y, z, tilt = 0.32) {
  const depth = y * Math.sin(tilt) + z * Math.cos(tilt)
  const perspective = 2300 / (2300 - depth)
  return { x: x * perspective, y: (y * Math.cos(tilt) - z * Math.sin(tilt)) * perspective }
}
