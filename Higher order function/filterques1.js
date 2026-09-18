const users = [
  {name:"Ajay",active:true,verified:true}.
  {name:"Rahul",active:false,verified:true}.
  {name:"Priya",active:true,verified:false}.
  {name:"Neha",active:true,verified:true}.
]


const res = users.filter(function(currEle,index,array){
  return curr.active === true && curr.verified === true;
})

console.log(res);


const users = [
  {name:"Ajay",marks:[90,88,95]},
  {name:"Rahul",marks:[60,20,70]},
  {name:"Priya",marks:[80,75,90]},
]
// return obj whose marks is greater than 35;

const res = users.filter(function(currEle,index,array){
  return currEle.marks.filter(function(currEle,index,array){
    return currEle > 35;
  }).length === currEle.marks.length;
})

console.log(res);