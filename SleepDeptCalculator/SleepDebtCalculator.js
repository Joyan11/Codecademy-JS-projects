const getSleepHours = day => {
  switch(day){
    case 'monday':
    return 8;
    break;
    case 'tuesday':
    return 6;
    break;
    case 'wednesday':
    return 3;
    break;
    case 'thursday':
    return 5;
    break;
    case 'friday':
    return 2;
    break;
    case 'saturday':
    return 9;
    break;
    case 'sunday':
    return 8;
    break;
  }
}


const getActualSleep = () => 
getSleepHours('monday')+ getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+ getSleepHours('saturday')+getSleepHours('sunday');


const getIdealSleep = (sleepTime) =>{
  let idealHours = sleepTime;
  return idealHours * 7;
}

const calculateSleepDept =()=>{
  let actualSleepHours = getActualSleep();
  let idealSleepHours = getIdealSleep(6);

  let howMuchLess= idealSleepHours - actualSleepHours;
  let howMuchMore= actualSleepHours - idealSleepHours;
  if(actualSleepHours == idealSleepHours){
    console.log('Perfect sleep');
    }else if (actualSleepHours > idealSleepHours){
      console.log(`got more sleep of ${howMuchLess}`)
    }else{
      console.log(`got less sleep of ${howMuchLess}`);
    }
}

calculateSleepDept();

