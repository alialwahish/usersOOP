    users = [
  {
    fname: "Kermit",
    lname: "the Frog",
    languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
    interests: {
      music: ["guitar", "flute"],
      dance: ["tap", "salsa"],
      television: ["Black Mirror", "Stranger Things"]
    }
  },
  {
    fname: "Winnie",
    lname: "the Pooh",
    languages: ["Python", "Swift", "Java"],
    interests: {
      food: ["honey", "honeycomb"],
      flowers: ["honeysuckle"],
      mysteries: ["Heffalumps"]
    }
  },
  {
    fname: "Arthur",
    lname: "Dent",
    languages: ["JavaScript", "HTML", "Go"],
    interests: {
      space: ["stars", "planets", "improbability"],
      home: ["tea", "yellow bulldozers"]
    }
  }
]


function userLanguage(users){
    retStr=""
    for (i=0;i<users.length;i++){
        retStr+=users[i].fname+" Languages "+users[i].languages+'\n'
        console.log(users[i].fname+" Languages "+users[i].languages)
        var othInt=[]
        dict=users[i].interests
        for(var key in dict){
            othInt.push(dict[key])
        }
        console.log(users[i].fname+" is also interested in "+othInt)
        retStr+=users[i].fname+" is also interested in "+othInt
        retStr+='\n'
        
    }
    return retStr;
}

console.log(userLanguage(users));

