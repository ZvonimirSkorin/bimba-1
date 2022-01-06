// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { db, ref, onValue } from "../../firebaseConfig";
import { limitToFirst, limitToLast, orderByKey, query, startAt } from "firebase/database";


type Data = {
 data:{},
 datum:string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const mapa = {}
 
  await get_week_events(mapa,getDate())
  res.status(200).json({datum:getDate(),data:mapa});
}

 const get_week_events =async (pointer_to_events_map: any, date: string) => {
    const reference = ref(db, "termini");
  
    const bre = query(reference, orderByKey(), startAt(date), limitToFirst(7));
  return  onValue(bre, (snapshot) => {
      Object.entries(snapshot.val()).forEach((v: any) => {
        const returnVal = Object.entries(v[1]);
        const acctualVal: any[] = [];
        returnVal.forEach((v) => {
          acctualVal.push(v[1]);
        });
        pointer_to_events_map[v[0]]= acctualVal;
      });
    });
  };
  

  function getDate(){
      const today = new Date();
      const day = today.getDate()
      const month = today.getMonth()+1
      const year = today.getFullYear();
      return `${year}:${month>10?month:`0${month}`}:${day>10?day:`0${day}`}`
  }