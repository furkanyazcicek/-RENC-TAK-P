/** Onay öncesi miktar ve tamamlanma ölçütü aynı hedefi anlatmalıdır. */
export function editCoachingAmount(recommendation,draft) {
  const amount=recommendation?.suggested_amount
  if(!amount)return recommendation
  const value=Number(draft),min=amount.kind==='minutes'?5:1,max=amount.kind==='minutes'?240:200
  if(!Number.isInteger(value)||value<min||value>max)return null
  if(value===Number(amount.value))return recommendation
  const criteria=recommendation.success_criteria
  const countBased=criteria?.kind==='minimum_count'&&['questions','activities'].includes(amount.kind)
  return {...recommendation,recommendation_version:Number(recommendation.recommendation_version??1)+1,
    suggested_amount:{...amount,value},decision:'edited',status:'edited',
    success_criteria:countBased?{...criteria,minimum_count:value,
      description:`Görevden sonra ${value} yeni ${amount.kind==='questions'?'soru':'etkinlik'} sonucu kaydedildiğinde çalışma doğrulanır.`}:criteria}
}
