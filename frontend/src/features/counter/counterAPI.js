export function fetchCount(amount = 1) {
  return new Promise(async (resolve) =>{
    const response = await fetch('https://e-commerce-with-chatbot.vercel.app') 
    const data = await response.json()
    resolve({data})
  }
  );
}