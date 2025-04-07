import {Url} from "../Models/Url.js";
import shortid from "shortid";

export const urlShort = async(req,res)=>{
    const longUrl = req.body.longUrl
    const shortCode = shortid.generate();
    const shortUrl = `http://localhost:3001/${shortCode}`

    //Save to DB

    const newUrl = new Url({shortCode,longUrl})
    await newUrl.save();

    console.log("url short successfully..",newUrl)

    res.render("server.ejs",{shortUrl: shortUrl});

};

export const getOriginalUrl = async(req,res)=>{
    const shortCode = req.params.shortCode

    //find on DB

    const urlRecord = Url.findOne({shortCode});

    if(urlRecord){
        res.redirect(urlRecord.longUrl)
    }else{
        res.status(404).send("URL not found")
    }

}