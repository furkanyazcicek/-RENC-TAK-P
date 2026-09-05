export const SHAPE_HOLD_CONFIG = Object.freeze({durationMs:500,movementPx:5,minPoints:6,minLengthPx:36,confidence:.78,maxSamples:160,transitionMs:90})

/** Eşik ekran pikselidir; kalem basıncı ve zoom bu saati değiştirmez. */
export function createShapeHold(onHold,config=SHAPE_HOLD_CONFIG,clock={set:setTimeout,clear:clearTimeout}) {
  let timer=null,anchor=null
  const stop=()=>{if(timer!==null)clock.clear(timer);timer=null;anchor=null}
  const arm=position=>{
    stop();anchor=position
    timer=clock.set(()=>{timer=null;onHold()},config.durationMs)
  }
  return {start:arm,move(position){if(anchor&&Math.hypot(position.x-anchor.x,position.y-anchor.y)>config.movementPx)arm(position)},stop}
}
