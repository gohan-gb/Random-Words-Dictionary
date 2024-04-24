'use strict'
let a = `ART: this word has no exact definition in modern days`
let b = `I Don't Lie: I lie about everything. I'm even lying now`
let c = `CLASS: come late and start sleeping`
let d = `GENETICS: what you blame all of your flaws on`
let e = `SOULMATE: someone who does the same weird things you do`
let f = `Ohhhhhhh: i still don't understand`
let g = `BIRTHDAY: a day to celebrate that you haven't died last year `
let h = `TRADITION: peer pressure from dead people`
let i = `20s: an age range where you're an old person around kids and a kid around all other adults`
let j = `REALITY: the annoying time between sleep and internet`
let k = `THERE: the same thing as 'their' or 'they're,' especially if you're an idiot`
let l = `HOPE: the first step towards disappointment`
let m = `IMMATURE: a word used by boring people to describe fun people`
let n = `FRIENDSHIP:having each others' worst photos`
let o = `FAILURE: when your best just isn't good enough`
let p = `DEMOCRACY: four wolves and one lamb voting on lunch`
let q = 'MEMES: where I get my news from...'
let r = "BRAIN: something we all have, but most don't use"
let s = 'ALCOHOL: your personality inside a bottle'
let t = 'POSITIVE: the most negative word of 2020'
let u = 'OCTOPUS: the creature which can slap eight people together'
let v = 'HOME: where you trust the toilet seat'
let w = 'IRONY: drawing trees on paper'
let x = 'MULTI-TASKING: screwing up several things together'
let y = 'MORNING: the time when the bed has more gravity'
let z = 'TOMORROW: the best time to do everything you had planned for'

const container = document.querySelector(".container")

const btn = document.querySelector('.btn')
btn.addEventListener('click', ()=> { 
    const arr = [ a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z ]
    const random1 = arr[Math.floor(Math.random() * (arr.length))]
    container.textContent = random1
});

