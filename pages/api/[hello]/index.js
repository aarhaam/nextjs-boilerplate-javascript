

export default async function handler(req, res){
  if(req.method === "GET"){
    console.log(req)
    const {hello} = req.query;
    res.send(`Hello ${hello}`)
  }
}