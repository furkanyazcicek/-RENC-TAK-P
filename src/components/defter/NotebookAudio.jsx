import { useEffect, useRef, useState } from 'react'
import { Download, Flag, Mic, Pause, Play, Square } from 'lucide-react'
import { Button } from '../ui'
import { uid } from '../../lib/defter/model'
import { blobData } from '../../lib/defter/media'
import { downloadBlob } from '../../lib/defter/drawing'
export const audioTime=value=>`${Math.floor(value/60)}:${String(Math.floor(value%60)).padStart(2,'0')}`

/** Kaydın zaman işaretleri sayfa ve öğe kimliğine bağlanır; çizim motorunu değiştirmez. */
export function useNotebookRecording({doc,page,onSave}) {
  const [state,setState]=useState('idle'),[elapsed,setElapsed]=useState(0),[error,setError]=useState(''),[recovery,setRecovery]=useState(null)
  const current=useRef({doc,page,onSave});current.current={doc,page,onSave}
  const recoveryRef=useRef(recovery);recoveryRef.current=recovery
  const session=useRef(null),alive=useRef(true),saving=useRef(Promise.resolve())
  const seconds=s=>(s.elapsed+(s.pausedAt?0:performance.now()-s.start))/1000
  function mark(pageId,itemId) {
    const s=session.current;if(!s||s.recorder.state!=='recording')return
    if(s.cues.length>=10000)return
    const time=seconds(s),last=s.cues.at(-1)
    if(last?.pageId===pageId&&last?.itemId===itemId&&time-last.time<.2)return
    s.cues.push({time,pageId,...(itemId?{itemId}:{})})
  }
  function capture(next,previous){const ids=new Set(previous.items.map(x=>x.id));for(const x of next.items)if(!ids.has(x.id))mark(next.id,x.id)}
  function persist(s,final=false) {
    const blob=new Blob(s.chunks,{type:s.recorder.mimeType}),duration=seconds(s),cues=s.cues.filter(c=>c.time<=duration)
    if(!blob.size)return saving.current
    saving.current=saving.current.catch(()=>{}).then(async()=>{
      const asset={id:s.assetId,type:'audio',name:s.title,data:await blobData(blob)}
      const d=current.current.doc,r={id:s.id,assetId:s.assetId,title:s.title,duration,cues}
      const next={...d,assets:{...d.assets,[asset.id]:asset},recordings:[...(d.recordings??[]).filter(x=>x.id!==s.id),r]}
      const ok=await current.current.onSave(next)
      if(ok===false)throw new Error('Ses kaydı deftere yazılamadı. Ses dosyasını indirerek koru.')
      if(final&&alive.current)setRecovery(null)
    }).catch(e=>{if(alive.current){setRecovery(blob);setError(e.message||'Ses kaydedilemedi. Ses dosyasını indirerek koru.')}})
    return saving.current
  }
  async function start() {
    if(session.current||state==='starting')return
    if(recoveryRef.current){setError('Önce kurtarma sesini indir. Ardından yeni kayıt başlatabilirsin.');return}
    setError('');setState('starting')
    if(!navigator.mediaDevices?.getUserMedia||typeof MediaRecorder==='undefined'){setError('Bu tarayıcı ses kaydını desteklemiyor. Güncel Safari veya Chrome kullan.');setState('idle');return}
    let stream
    try {
      if((current.current.doc.recordings??[]).length>=50)throw new Error('Bu defterde 50 kayıt var. Yeni bir defterde devam et.')
      stream=await navigator.mediaDevices.getUserMedia({audio:true})
      if(!alive.current){stream.getTracks().forEach(t=>t.stop());return}
      const mime=['audio/webm;codecs=opus','audio/mp4','audio/ogg;codecs=opus'].find(t=>MediaRecorder.isTypeSupported(t))
      const recorder=new MediaRecorder(stream,{...(mime?{mimeType:mime}:{}),audioBitsPerSecond:48000})
      const s={id:uid(),assetId:uid(),title:`Ders kaydı · ${new Date().toLocaleString('tr-TR',{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'})}`,recorder,stream,chunks:[],cues:[],start:performance.now(),elapsed:0,pausedAt:0,bytes:0}
      session.current=s
      recorder.ondataavailable=e=>{if(e.data.size){s.chunks.push(e.data);s.bytes+=e.data.size;persist(s);if(s.bytes>10*1024*1024&&recorder.state!=='inactive'){setError('Kayıt boyutu sınırına ulaşıldı; sesin kaydediliyor.');stop()}}}
      recorder.onerror=()=>{if(alive.current)setError('Mikrofon kaydı kesildi. Alınan ses korunuyor.');stop()}
      recorder.onstop=async()=>{stream.getTracks().forEach(t=>t.stop());await persist(s,true);if(session.current===s)session.current=null;if(alive.current)setState('idle')}
      stream.getAudioTracks().forEach(t=>t.onended=()=>stop())
      recorder.start(10000);setState('recording');setElapsed(0);mark(current.current.page.id)
    }catch(e){stream?.getTracks().forEach(t=>t.stop());session.current=null;setState('idle');setError(['NotAllowedError','SecurityError'].includes(e.name)?'Mikrofon izni verilmedi. Tarayıcının site ayarlarından mikrofonu açıp yeniden dene.':e.name==='NotFoundError'?'Mikrofon bulunamadı. Bir mikrofon bağlayıp yeniden dene.':e.message||'Ses kaydı başlatılamadı.')}
  }
  function pause() {const s=session.current;if(!s)return;if(s.recorder.state==='recording'){s.elapsed+=performance.now()-s.start;s.pausedAt=performance.now();s.recorder.pause();setState('paused')}else if(s.recorder.state==='paused'){s.start=performance.now();s.pausedAt=0;s.recorder.resume();setState('recording')}}
  function stop(){const s=session.current;if(!s||s.recorder.state==='inactive')return;if(!s.pausedAt){s.elapsed+=performance.now()-s.start;s.pausedAt=performance.now()}s.recorder.stop();if(alive.current)setState('saving')}
  useEffect(()=>{mark(page.id)},[page.id])
  useEffect(()=>{
    alive.current=true
    const timer=setInterval(()=>{const s=session.current;if(s){const t=seconds(s);setElapsed(t);if(t>=3600)stop()}},500)
    const before=e=>{if(session.current||recoveryRef.current){e.preventDefault();e.returnValue=''}}
    const hidden=()=>{if(document.hidden)stop()}
    window.addEventListener('beforeunload',before);document.addEventListener('visibilitychange',hidden)
    return()=>{alive.current=false;clearInterval(timer);window.removeEventListener('beforeunload',before);document.removeEventListener('visibilitychange',hidden);stop()}
  },[])
  return {state,elapsed,error,recovery,start,pause,stop,mark,capture,downloadRecovery:()=>{if(recoveryRef.current){downloadBlob(recoveryRef.current,`Ders-kaydi.${recoveryRef.current.type.includes('mp4')?'m4a':'webm'}`);setRecovery(null);setError('')}}}
}
export default function NotebookAudio({doc,page,rec,onSeek}) {
  const [selected,setSelected]=useState(''),[follow,setFollow]=useState(true),[playError,setPlayError]=useState('')
  const player=useRef(null),lastCue=useRef('')
  const recordings=doc.recordings??[],recording=recordings.find(r=>r.id===selected)??recordings.at(-1)
  const active=['recording','paused','saving','starting'].includes(rec.state)
  function sync(t,force=false){if(!recording||(!follow&&!force))return;const cue=[...recording.cues].reverse().find(c=>c.time<=t);if(cue){const key=`${recording.id}:${cue.time}`;if(force||lastCue.current!==key){lastCue.current=key;onSeek(cue)}}}
  function seek(cue){if(player.current){player.current.currentTime=cue.time;sync(cue.time,true)}}
  return <div className="defter-audio-panel">
    <div className="defter-audio-controls"><Mic size={20}/><div><strong>{active?'Ders kaydı':'Sesli notlar'}</strong><small>{active?`${audioTime(rec.elapsed)} · ${rec.state==='paused'?'Duraklatıldı':rec.state==='saving'?'Kaydediliyor…':rec.state==='starting'?'Mikrofon bekleniyor…':'Kayıt sürüyor'}`:'Yazdıkların sesin doğru anına bağlanır.'}</small></div>
      {!active?<Button icon={Mic} onClick={()=>{player.current?.pause();rec.start()}}>Kaydı başlat</Button>:<><Button variant="secondary" icon={rec.state==='paused'?Play:Pause} aria-label={rec.state==='paused'?'Kayda devam et':'Kaydı duraklat'} disabled={!['recording','paused'].includes(rec.state)} onClick={rec.pause}/><Button variant="secondary" icon={Square} disabled={!['recording','paused'].includes(rec.state)} onClick={rec.stop}>Bitir</Button></>}
    </div>
    {active&&<Button variant="ghost" icon={Flag} disabled={rec.state!=='recording'} onClick={()=>rec.mark(page.id)}>Bu anı işaretle</Button>}
    <p className="defter-help">Kayıt sırasında yazı ve çizimlerin zamanla eşleşir. Her 10 saniyede kayıt alınır. Sekmeden ayrılınca kayıt tamamlanır. Tek kayıt en fazla 60 dakika.</p>
    {rec.error&&<p role="alert">{rec.error}</p>}{rec.recovery&&<Button icon={Download} onClick={rec.downloadRecovery}>Ses dosyasını kurtar</Button>}
    {!active&&recording&&<div className="defter-audio-playback"><label>Dinlenecek kayıt<select aria-label="Dinlenecek kayıt" value={recording.id} onChange={e=>{setSelected(e.target.value);lastCue.current='';setPlayError('')}}>{recordings.map(r=><option key={r.id} value={r.id}>{r.title} · {audioTime(r.duration)}</option>)}</select></label>
      <input aria-label="Ses kaydının adı" value={recording.title} maxLength={120} onChange={e=>rec.rename?.(recording.id,e.target.value)}/>
      <audio key={recording.id} ref={player} controls preload="metadata" src={doc.assets?.[recording.assetId]?.data} onTimeUpdate={e=>sync(e.currentTarget.currentTime)} onSeeked={e=>sync(e.currentTarget.currentTime)} onError={()=>setPlayError('Ses bu tarayıcıda oynatılamadı. Ses dosyasını indirip açabilirsin.')}/>
      {playError&&<p role="alert">{playError}</p>}
      <label>Dinleme hızı<select aria-label="Dinleme hızı" defaultValue="1" onChange={e=>{if(player.current)player.current.playbackRate=Number(e.target.value)}}><option value="0.75">0,75×</option><option value="1">1×</option><option value="1.25">1,25×</option><option value="1.5">1,5×</option><option value="2">2×</option></select></label><label className="defter-check"><input type="checkbox" checked={follow} onChange={e=>setFollow(e.target.checked)}/><span>Sesi dinlerken ilgili sayfayı ve notu takip et</span></label>
      <div className="defter-cues">{recording.cues.filter((c,i,a)=>i===0||c.pageId!==a[i-1].pageId||!c.itemId).map((cue,i)=><button key={i} onClick={()=>seek(cue)}>{audioTime(cue.time)} · {doc.pages.find(p=>p.id===cue.pageId)?.title||'Not sayfası'}</button>)}</div>
      <Button variant="ghost" icon={Download} onClick={async()=>{const blob=await (await fetch(doc.assets[recording.assetId].data)).blob();downloadBlob(blob,`${recording.title}.${blob.type.includes('mp4')?'m4a':blob.type.includes('ogg')?'ogg':'webm'}`)}}>Ses dosyasını indir</Button>
    </div>}
    {!recordings.length&&!active&&<p className="defter-help">Henüz ses kaydın yok. Dersi kaydederken Defterim’de yazmaya devam edebilirsin.</p>}
  </div>
}
