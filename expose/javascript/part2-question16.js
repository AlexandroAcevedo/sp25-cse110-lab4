let statistics = {
    redCars: 21,
    blueCars: 45, 
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};
for(const key in statistics){
    if(statistics.hasOwnProperty(key)){
      const value= statistics[key];
      if(value%2 == 1 || key.startsWith('r')){
        console.log(key);
      }else{
        continue;
      }
    }else{
        return;
    }
}
