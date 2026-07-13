const {nanoid} = require('nanoid')
const Url = require('../models/url.model')



const shortenerurl = async (req,res)=>{
try {
    const {originalUrl} = req.body;

    if(!originalUrl){
        res.status(400).json({
            error: 'please provide url'
        })
        
    }
    const shortCode = nanoid(6);
        const newUrl = new Url({
            originalUrl: originalUrl,
        shortCode:shortCode
        })

        await newUrl.save();
        res.status(201).json({
            message: '✅ New URL created successfully!',
            data: {
                originalUrl: newUrl.originalUrl,
                shortCode: newUrl.shortCode,
                shortUrl: `http://localhost:5000/${newUrl.shortCode}`,
                clicks: newUrl.clicks
            }
        });
    
} catch (error) {
     res.json({error: error.message });
}}


const redirect = async(req, res)=>{

    try {
        const {code} =  req.params;
const url = await Url.findOne({shortCode: code})
        if(!url){
           return  res.status(404).json({message: 'no url found'})
        }
        url.clicks +=1
        await url.save();
        res.redirect(url.originalUrl);
    } catch (error) {
         res.status(500).json({ error: error.message });
    }

}

const deleteUrl = async(req, res) =>{
    try {
         const {code} =  req.params;

         const url = await Url.findOneAndDelete({shortCode : code})

         if(!url){
             return  res.status(404).json({message: 'no url found'})
         }
         res.status(200).json({message: "Delete successfully",
            deleted: {
                originalUrl: url.originalUrl,
                shortCode: url.shortCode
            }
         })
    } catch (error) {
        return  res.status(404).json({error: error.message})
    }
}

module.exports = {shortenerurl, redirect, deleteUrl};