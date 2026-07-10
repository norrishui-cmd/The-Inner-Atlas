export async function subscribe(email:string, source:string){
  const endpoint=import.meta.env.PUBLIC_NEWSLETTER_ENDPOINT;
  if(!endpoint) return {ok:false,message:'Email delivery is not connected yet. Please check back soon.'};
  try{const response=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,source})});if(!response.ok) throw new Error();return{ok:true,message:'You’re on the list. Your first quiet journey is on its way.'}}catch{return{ok:false,message:'We could not save your email. Please try again later.'}}
}
