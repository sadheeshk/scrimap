import React from "react"

function MainContent(){
  const fName="Sa";
  const lName="jum";
  const date=new Date(2020,6,18,12);
  const hr=date.getHours();
  let timeofDay
  const styles={fontSize:20}
  if(hr<12){
    timeofDay="Morning";
    styles.color="Red"
  }else if (hr>=12 && hr<16){
    timeofDay="Afternoon";
    styles.color="Green"
  }else if (hr>=17 ){
      timeofDay="Evening";
      styles.color="Purple"
  }

  return (<div>
    <p style={styles}>Welcome {fName+" "+lName},Good {timeofDay}</p>
    <p>Welcome {`${fName} ${lName}`}</p>
        <p>Now the time is {date.getHours()%12} o'Clock</p>
      </div>
  )
}

export default MainContent
