console.log()
console.log("Series duration of my life")
console.log()
//Series duration of my life

const seriesDurations = [
    {
      title: 'friends',
      days: 3,
      hours: 14,
      minutes: 32,  
    },
    {
      title: 'Suits',
      days: 3,
      hours: 17,
      minutes: 45,
    },
    {
      title: 'Game of thrones',
      days: 3,
      hours: 1,
      minutes: 0,  
    }
  ]

  const age = 80
  let minOfAseriy = 0
  let totalMintuesOfSeries = 0
  
  //console.log(seriesDurations[0].days)
    
  const ageInMinues = age * 365 * 24 * 60
  for(let i=0;i<seriesDurations.length;i++){
    minOfAseriy = ((seriesDurations[i].days) * 24 * 60) + ((seriesDurations[i].hours)*60) + ((seriesDurations[i].minutes))
    totalMintuesOfSeries += minOfAseriy
    console.log(seriesDurations[i].title," took ",((minOfAseriy * 100)/ageInMinues).toFixed(3),"% of my life")
  }
  
  console.log()
  console.log("In total that is ",((totalMintuesOfSeries * 100)/ageInMinues).toFixed(3),"% of my life")
  console.log()